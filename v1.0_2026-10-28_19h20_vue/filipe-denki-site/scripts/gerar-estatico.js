// Gera a versão em HTML, CSS e JS puro (sem framework) do site, na pasta ../site-html.
// Uso: node scripts/gerar-estatico.js   (rodar dentro de filipe-denki-site)
//
// O que faz:
//  - lê cada página em src/views/*.vue;
//  - páginas sem interação viram HTML estático puro;
//  - páginas com abas/filtros/formulários viram HTML já preenchido (bom para SEO e para quem
//    navega sem JS) + um arquivo js/paginas/<pagina>.js com os dados e a lógica em JS puro;
//  - copia imagens, capas, PDFs, favicon e as fontes Montserrat locais;
//  - gera sitemap.xml, robots.txt e .htaccess (endereços sem ".html" em Apache/Hostinger).
import { readFileSync, writeFileSync, mkdirSync, cpSync, existsSync, rmSync, readdirSync } from 'node:fs'
import { join, dirname } from 'node:path'
import vm from 'node:vm'

const ROOT = process.cwd()
const OUT = join(ROOT, '..', 'site-html')
let SITE = process.env.VITE_SITE_URL || ''
if (!SITE && existsSync(join(ROOT, '.env'))) {
  const m = readFileSync(join(ROOT, '.env'), 'utf8').match(/^VITE_SITE_URL=(.*)$/m)
  if (m) SITE = m[1].trim()
}
SITE = (SITE || 'https://www.filipedenki.com.br').replace(/\/$/, '')

const ROUTES = ['sobre', 'publicacoes', 'artigo', 'livros', 'cursos', 'videos', 'imprensa', 'eventos', 'contato', 'admin', 'sistema']

// ---------- rotas e metadados (lidos do router do projeto Vue) ----------
const routerSrc = readFileSync(join(ROOT, 'src/router/index.js'), 'utf8')
const pages = []
for (const m of routerSrc.matchAll(/\{ path: '([^']+)', name: '[^']+', component: \(\) => import\('\.\.\/views\/(\w+)\.vue'\), meta: \{ title: '([^']*)', description: '([^']*)'(, noindex: true)? \} \}/g)) {
  const path = m[1]
  pages.push({ path, view: m[2], title: m[3], description: m[4], noindex: !!m[5], file: path === '/' ? 'index.html' : path.slice(1) + '.html' })
}
if (pages.length !== 12) throw new Error('Esperava 12 rotas no router, encontrei ' + pages.length)

// ---------- links: "/sobre" -> "sobre.html", "/assets/..." -> "assets/..." ----------
function rewriteLinks(s) {
  return s
    .replace(new RegExp(`(["'\`])\\/(${ROUTES.join('|')})(?=[#"'\`?])`, 'g'), '$1$2.html')
    .replace(/(href=")\/(")/g, '$1index.html$2')
    .replace(/(href: ')\/(')/g, '$1index.html$2')
    .replace(/(href=")\/#/g, '$1index.html#')
    .replace(/(["'`(])\/(assets\/|favicon\.png)/g, '$1$2')
}

// ---------- compilador do subconjunto de template usado nas páginas ----------
const escLit = (s) => s.replace(/\\/g, '\\\\').replace(/`/g, '\\`').replace(/\$\{/g, '\\${')

function parseAttrs(str) {
  const out = []
  const re = /([^\s=/]+)(?:\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s>]+)))?/g
  let m
  while ((m = re.exec(str))) {
    const value = m[2] ?? m[3] ?? m[4]
    out.push({ name: m[1], value: value === undefined ? null : value, raw: m[0] })
  }
  return out
}

function compile(src) {
  let js = ''
  let pos = 0
  let interactive = false
  const stack = []
  const lit = (s) => { js += escLit(s) }
  while (pos < src.length) {
    const lt = src.indexOf('<', pos)
    const mu = src.indexOf('{{', pos)
    if (lt < 0 && mu < 0) { lit(src.slice(pos)); break }
    if (mu >= 0 && (lt < 0 || mu < lt)) {
      lit(src.slice(pos, mu))
      const end = src.indexOf('}}', mu)
      js += '${h(' + src.slice(mu + 2, end).trim() + ')}'
      interactive = true
      pos = end + 2
      continue
    }
    lit(src.slice(pos, lt))
    if (src.startsWith('</template>', lt)) { js += stack.pop(); pos = lt + 11; continue }
    if (src.startsWith('<!--', lt)) { const e = src.indexOf('-->', lt); lit(src.slice(lt, e + 3)); pos = e + 3; continue }
    if (!/^<\/?[a-zA-Z]/.test(src.slice(lt, lt + 2))) { lit('<'); pos = lt + 1; continue }
    // encontra o fim da tag respeitando aspas
    let j = lt + 1, q = null
    while (j < src.length) {
      const c = src[j]
      if (q) { if (c === q) q = null } else if (c === '"' || c === "'") q = c; else if (c === '>') break
      j++
    }
    const tag = src.slice(lt, j + 1)
    pos = j + 1
    if (tag.startsWith('</')) { lit(tag); continue }
    const m = tag.match(/^<([a-zA-Z][\w-]*)([\s\S]*?)(\/?)>$/)
    const name = m[1], attrs = parseAttrs(m[2]), self = m[3]
    if (name === 'template') {
      interactive = true
      const vfor = attrs.find(a => a.name === 'v-for')
      const vif = attrs.find(a => a.name === 'v-if')
      if (vfor) {
        const fm = vfor.value.match(/^\s*\(?\s*([^)]*?)\s*\)?\s+in\s+(.+)$/)
        js += '${(' + fm[2] + ' || []).map((' + fm[1] + ') => `'
        stack.push("`).join('')}")
      } else if (vif) {
        js += '${(' + vif.value + ') ? `'
        stack.push("` : ''}")
      } else stack.push('')
      continue
    }
    js += '<' + name
    for (const a of attrs) {
      if (a.name.startsWith(':')) {
        interactive = true
        const n = a.name.slice(1)
        if (n === 'key') continue
        js += '${attr(' + JSON.stringify(n) + ', ' + a.value + ')}'
      } else if (a.name.startsWith('@')) {
        interactive = true
        js += ' data-on-' + a.name.slice(1) + '="${on(' + a.value + ')}"'
      } else if (a.name.startsWith('v-')) {
        throw new Error('Diretiva não suportada: ' + a.raw)
      } else {
        lit(' ' + a.raw)
      }
    }
    js += self ? ' />' : '>'
  }
  if (stack.length) throw new Error('<template> sem fechamento')
  return { js, interactive }
}

// ---------- runtime JS puro (copiado para js/dc.js e usado também para pré-renderizar) ----------
const RUNTIME = `// Base em JavaScript puro usada pelas páginas com interação (abas, filtros, formulários).
// Cada página define uma classe Component (dados + lógica) e uma função render(v) que devolve o HTML.
(function (global) {
  'use strict';
  var handlers = [];
  var BOOL = { disabled: 1, checked: 1, selected: 1, readonly: 1, required: 1, hidden: 1, multiple: 1, open: 1 };

  // Escapa texto para HTML.
  function h(v) {
    if (v === null || v === undefined) return '';
    return String(v).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }
  // Atributo dinâmico: null/undefined somem; false some em atributos booleanos.
  function attr(name, v) {
    if (v === null || v === undefined) return '';
    if (BOOL[name]) return v ? ' ' + name : '';
    return ' ' + name + '="' + h(v) + '"';
  }
  // Registra uma função de evento e devolve o índice usado em data-on-*.
  function on(fn) { handlers.push(fn); return handlers.length - 1; }

  function DCLogic(props) { this.props = props || {}; this.state = {}; }
  DCLogic.prototype.setState = function (patch) {
    var next = typeof patch === 'function' ? patch(this.state) : patch;
    Object.assign(this.state, next);
    if (this._update) this._update();
  };

  function pathOf(el, root) {
    var p = [];
    while (el && el !== root) { p.unshift(Array.prototype.indexOf.call(el.parentNode.children, el)); el = el.parentNode; }
    return el === root ? p : null;
  }
  function byPath(p, root) {
    var el = root;
    for (var i = 0; i < p.length && el; i++) el = el.children[p[i]];
    return el;
  }

  function mount(Component, render, el) {
    el = el || document.getElementById('app');
    var inst = new Component({});
    function update() {
      // guarda o foco (campo de busca, botão) para restaurá-lo depois de redesenhar
      var a = document.activeElement, id = null, path = null, s0 = null, s1 = null;
      if (a && a !== document.body && el.contains(a)) {
        id = a.id || null; path = pathOf(a, el);
        try { s0 = a.selectionStart; s1 = a.selectionEnd; } catch (e) {}
      }
      handlers = [];
      el.innerHTML = render(inst.renderVals());
      var sel = el.querySelectorAll('select[value]');
      for (var i = 0; i < sel.length; i++) sel[i].value = sel[i].getAttribute('value');
      var f = id ? document.getElementById(id) : (path ? byPath(path, el) : null);
      if (f && f.focus) {
        f.focus({ preventScroll: true });
        if (s0 !== null && typeof f.setSelectionRange === 'function') { try { f.setSelectionRange(s0, s1); } catch (e) {} }
      }
    }
    inst._update = update;
    ['click', 'input', 'change'].forEach(function (type) {
      el.addEventListener(type, function (e) {
        var t = e.target.closest && e.target.closest('[data-on-' + type + ']');
        if (!t || !el.contains(t)) return;
        var fn = handlers[+t.getAttribute('data-on-' + type)];
        if (typeof fn === 'function') fn(e);
      });
    });
    update();
    return inst;
  }

  global.DC = { h: h, attr: attr, on: on, mount: mount };
  global.DCLogic = DCLogic;
})(typeof window !== 'undefined' ? window : globalThis);
`

// ---------- leitura das páginas ----------
function splitVue(file) {
  const src = readFileSync(file, 'utf8')
  const s = src.indexOf('<script>')
  const tplFull = src.slice(0, s)
  const inner = tplFull.replace(/^\s*<template>\s*/, '').replace(/\s*<\/template>\s*$/, '')
  const script = src.slice(s + 8, src.lastIndexOf('</script>'))
  const classSrc = script
    .replace(/^\s*import[^\n]*\n/gm, '')
    .replace(/\nexport default \{[\s\S]*$/, '')
    .trim()
  return { inner, classSrc }
}

function head(p, extraHead = '') {
  const t = p.title ? `${p.title} — Filipe Denki` : 'Filipe Denki'
  const url = SITE + '/' + (p.file === 'index.html' ? '' : p.file)
  const ld = p.file === 'index.html'
    ? `\n<script type="application/ld+json">\n{"@context":"https://schema.org","@type":"Person","name":"Filipe Denki Belém Pacheco","alternateName":"Filipe Denki","jobTitle":"Advogado e Administrador Judicial","address":{"@type":"PostalAddress","addressLocality":"Goiânia","addressRegion":"GO","addressCountry":"BR"},"knowsAbout":["Direito Empresarial","Recuperação Judicial","Recuperação Extrajudicial","Falência","Insolvência","Agronegócio"]}\n</script>`
    : ''
  return `<!doctype html>
<html lang="pt-BR">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title>${t}</title>
<meta name="description" content="${p.description}">
<meta name="author" content="Filipe Denki Belém Pacheco">
<meta name="robots" content="${p.noindex ? 'noindex, nofollow' : 'index, follow'}">
<link rel="canonical" href="${url}">
<meta property="og:type" content="website">
<meta property="og:site_name" content="Filipe Denki">
<meta property="og:locale" content="pt_BR">
<meta property="og:title" content="${t}">
<meta property="og:description" content="${p.description}">
<meta property="og:url" content="${url}">
<meta property="og:image" content="${SITE}/assets/img/retrato-filipe-denki.jpg">
<meta name="twitter:card" content="summary_large_image">
<meta name="theme-color" content="#14213D">
<link rel="icon" type="image/png" href="favicon.png">
<link rel="preload" href="fonts/montserrat-latin-400-normal.woff2" as="font" type="font/woff2" crossorigin>
<link rel="stylesheet" href="css/fontes.css">
<link rel="stylesheet" href="css/estilos.css">${ld}${extraHead}
</head>
`
}

// ---------- geração ----------
if (existsSync(OUT)) {
  // limpa apenas o que este script gera, preservando arquivos que você tenha acrescentado
  for (const f of readdirSync(OUT)) {
    if (/\.html$/.test(f) || ['css', 'js', 'fonts', 'assets', 'favicon.png', 'sitemap.xml', 'robots.txt', '.htaccess', 'LEIA-ME.md'].includes(f)) rmSync(join(OUT, f), { recursive: true, force: true })
  }
}
mkdirSync(join(OUT, 'css'), { recursive: true })
mkdirSync(join(OUT, 'js/paginas'), { recursive: true })
mkdirSync(join(OUT, 'fonts'), { recursive: true })

writeFileSync(join(OUT, 'js/dc.js'), RUNTIME)

const report = []
for (const p of pages) {
  const { inner, classSrc } = splitVue(join(ROOT, 'src/views', p.view + '.vue'))
  const tpl = rewriteLinks(inner)
  const { js, interactive } = compile(tpl)
  const slug = p.file.replace('.html', '')
  let body
  if (!interactive) {
    body = `<body>\n${tpl.trim()}\n</body>\n</html>\n`
    report.push(`${p.file.padEnd(17)} estática`)
  } else {
    const cls = rewriteLinks(classSrc)
    const sandbox = {}
    vm.createContext(sandbox)
    vm.runInContext(RUNTIME, sandbox)
    // descobre as variáveis usadas no template executando a lógica uma vez
    vm.runInContext(cls + '\n;globalThis.__C = Component;', sandbox)
    const keys = Object.keys(new sandbox.__C({}).renderVals())
    const pageJs = `// Página: ${p.title || 'Início'} (${p.file})
// Dados e lógica da página (editáveis) + função render(), que monta o HTML em JS puro.
// Depende de js/dc.js.

${cls}

function render(v) {
  var h = DC.h, attr = DC.attr, on = DC.on;
  var { ${keys.join(', ')} } = v;
  return \`${js}\`;
}

DC.mount(Component, render, document.getElementById('app'));
`
    writeFileSync(join(OUT, 'js/paginas', slug + '.js'), pageJs)
    // pré-renderização: o HTML já sai preenchido
    vm.runInContext(`function render(v) { var h = DC.h, attr = DC.attr, on = DC.on; var { ${keys.join(', ')} } = v; return \`${js}\`; }\nglobalThis.__html = render(new Component({}).renderVals());`, sandbox)
    body = `<body>\n<div id="app">${sandbox.__html.trim()}</div>\n<script src="js/dc.js"></script>\n<script src="js/paginas/${slug}.js"></script>\n</body>\n</html>\n`
    report.push(`${p.file.padEnd(17)} interativa -> js/paginas/${slug}.js`)
  }
  writeFileSync(join(OUT, p.file), head(p) + body)
}

// ---------- CSS ----------
writeFileSync(join(OUT, 'css/estilos.css'), '/* Estilos globais. Os estilos de cada bloco estão no próprio HTML (atributo style). */\n' + readFileSync(join(ROOT, 'src/styles/global.css'), 'utf8'))
const fontDir = join(ROOT, 'node_modules/@fontsource/montserrat')
let fontCss = '/* Montserrat servida localmente (sem Google Fonts). Apenas os subconjuntos latin e latin-ext. */\n'
for (const w of ['300', '400', '500', '600', '700', '800', '400-italic', '500-italic']) {
  const css = readFileSync(join(fontDir, w + '.css'), 'utf8')
  for (const block of css.split(/\n(?=\/\*)/)) {
    if (!/montserrat-latin(-ext)?-\d+-(normal|italic) \*\//.test(block)) continue
    const files = [...block.matchAll(/url\(\.\/files\/([^)]+)\)/g)].map(m => m[1]).filter(f => f.endsWith('.woff2'))
    files.forEach(f => cpSync(join(fontDir, 'files', f), join(OUT, 'fonts', f)))
    fontCss += block
      .replace(/url\(\.\/files\/([^)]+\.woff2)\) format\('woff2'\), url\(\.\/files\/[^)]+\.woff\) format\('woff'\)/, "url(../fonts/$1) format('woff2')")
      .trim() + '\n\n'
  }
}
writeFileSync(join(OUT, 'css/fontes.css'), fontCss)

// ---------- arquivos públicos ----------
cpSync(join(ROOT, 'public/assets'), join(OUT, 'assets'), { recursive: true })
cpSync(join(ROOT, 'public/favicon.png'), join(OUT, 'favicon.png'))

const pub = pages.filter(p => !p.noindex)
const today = new Date().toISOString().slice(0, 10)
writeFileSync(join(OUT, 'sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${pub.map(p => `  <url><loc>${SITE}/${p.file === 'index.html' ? '' : p.file}</loc><lastmod>${today}</lastmod></url>`).join('\n')}\n</urlset>\n`)
writeFileSync(join(OUT, 'robots.txt'), `User-agent: *\nAllow: /\nDisallow: /admin.html\nDisallow: /sistema.html\nSitemap: ${SITE}/sitemap.xml\n`)
writeFileSync(join(OUT, '.htaccess'), `# Apache / Hostinger: permite acessar /sobre em vez de /sobre.html
Options -MultiViews
RewriteEngine On
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteCond %{REQUEST_FILENAME}.html -f
RewriteRule ^(.+?)/?$ $1.html [L]
ErrorDocument 404 /index.html

<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType font/woff2 "access plus 1 year"
  ExpiresByType image/jpeg "access plus 1 month"
  ExpiresByType image/png "access plus 1 month"
</IfModule>
`)

writeFileSync(join(OUT, 'LEIA-ME.md'), `# Site Filipe Denki — versão HTML, CSS e JS (sem framework)

Gerada a partir do projeto Vue (pasta filipe-denki-site) por \`node scripts/gerar-estatico.js\`.

## Como abrir
- Duplo clique em \`index.html\` já funciona (links relativos).
- Para publicar: envie todo o conteúdo desta pasta para a raiz do domínio (Hostinger, Apache, Netlify, Vercel, GitHub Pages...).
  Em Apache/Hostinger, o \`.htaccess\` permite usar /sobre além de /sobre.html.

## Estrutura
- \`*.html\` — uma página por arquivo, com todo o conteúdo já escrito no HTML.
- \`css/estilos.css\` — estilos globais; \`css/fontes.css\` + \`fonts/\` — Montserrat local.
- \`js/dc.js\` — base em JS puro (estado, redesenho, eventos) usada pelas páginas interativas.
- \`js/paginas/<pagina>.js\` — dados (listas de publicações, livros, vídeos, imprensa, eventos, cursos) e lógica de filtros/abas.
- \`assets/\` — imagens, capas e PDFs. \`sitemap.xml\`, \`robots.txt\`.

## Como atualizar o conteúdo
- Páginas estáticas (index, sobre, sistema): edite o próprio .html.
- Páginas interativas (publicacoes, livros, cursos, videos, imprensa, eventos, contato, artigo, admin):
  edite as listas no topo de \`js/paginas/<pagina>.js\` **e** o trecho correspondente do .html
  (o HTML traz uma cópia pré-renderizada para buscadores e para quem navega sem JS).
  Alternativa mais segura: edite o projeto Vue e rode o gerador de novo.

## Pendências herdadas do original
- Formulários (contato, lista de espera, newsletter) não enviam e-mail: precisam de um serviço (Formspree, Netlify Forms, PHP na hospedagem etc.).
- Marcadores "[a informar]" e vídeos provisórios seguem como no original.
`)

console.log('Versão HTML/CSS/JS gerada em', OUT, '\n' + report.join('\n'))
