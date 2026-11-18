# Site Filipe Denki — HTML, CSS e JS (sem framework)

Site mantido diretamente em HTML, CSS e JavaScript puro. O histórico de versões fica em `HISTORICO.md`.

## Como abrir
- Duplo clique em `index.html` já funciona (links relativos).
- Para publicar: envie todo o conteúdo desta pasta para a raiz do domínio (Hostinger, Apache, Netlify, Vercel, GitHub Pages...).
  Em Apache/Hostinger, o `.htaccess` redireciona /sobre e o endereço antigo /sobre.html para /html/sobre.html.

## Estrutura
```
index.html              página inicial (única página na raiz)
html/                   demais páginas, uma por arquivo, com todo o conteúdo já escrito no HTML
  sobre.html, publicacoes.html, artigo.html, livros.html, cursos.html,
  videos.html, imprensa.html, eventos.html, contato.html,
  admin.html, sistema.html (internas, fora dos buscadores)
css/estilos.css         estilos globais
css/fontes.css          declaração da fonte Montserrat (arquivos em public/fonts/)
js/dc.js                base em JS puro (estado, redesenho, eventos) das páginas interativas
js/paginas/<pagina>.js  dados (publicações, livros, vídeos, imprensa, eventos, cursos) e lógica de filtros/abas
public/
  livros/capas/         capas das obras (.jpg)
  livros/pdf/           PDFs das obras para download
  img/                  logo, retrato e fotos do site
  fonts/                Montserrat local (.woff2)
  favicon.png           ícone da aba do navegador
sitemap.xml, robots.txt, .htaccess
```

## Caminhos relativos (atenção ao editar)
- Em `index.html` (raiz): páginas são `html/sobre.html`; arquivos são `public/...`, `css/...`, `js/...`.
- Em `html/*.html`: outras páginas são `sobre.html` (mesma pasta); a inicial é `../index.html`;
  arquivos são `../public/...`, `../css/...`, `../js/...`.
- Em `js/paginas/*.js`: o HTML gerado é exibido dentro de `html/`, então use os mesmos caminhos de `html/*.html`
  (`../public/...`, `../index.html`, `contato.html`).

## Como atualizar o conteúdo
- Páginas estáticas (index, sobre, sistema): edite o próprio .html.
- Páginas interativas (publicacoes, livros, cursos, videos, imprensa, eventos, contato, artigo, admin):
  edite as listas no topo de `js/paginas/<pagina>.js` **e** o trecho correspondente de `html/<pagina>.html`
  (o HTML traz uma cópia já preenchida para buscadores e para quem navega sem JS).
- Nova obra com PDF: coloque a capa em `public/livros/capas/` e o PDF em `public/livros/pdf/`,
  e aponte `capa` e `pdf` para `../public/livros/...` em `js/paginas/livros.js` e em `html/livros.html`.
- Nova imagem do site: `public/img/`.

## Pendências
- Formulários (contato, lista de espera, newsletter) não enviam e-mail: precisam de um serviço (Formspree, Netlify Forms, PHP na hospedagem etc.).
- Marcadores "[a informar]" e vídeos provisórios.
