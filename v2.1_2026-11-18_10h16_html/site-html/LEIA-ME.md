# Site Filipe Denki — HTML, CSS e JS (sem framework)

Site mantido diretamente em HTML, CSS e JavaScript puro. O histórico de versões fica em `Site Denki/HISTORICO.md`.

## Como abrir
- Duplo clique em `index.html` já funciona (links relativos).
- Para publicar: envie todo o conteúdo desta pasta para a raiz do domínio (Hostinger, Apache, Netlify, Vercel, GitHub Pages...).
  Em Apache/Hostinger, o `.htaccess` permite usar /sobre além de /sobre.html.

## Estrutura
```
*.html                  uma página por arquivo, com todo o conteúdo já escrito no HTML
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

## Como atualizar o conteúdo
- Páginas estáticas (index, sobre, sistema): edite o próprio .html.
- Páginas interativas (publicacoes, livros, cursos, videos, imprensa, eventos, contato, artigo, admin):
  edite as listas no topo de `js/paginas/<pagina>.js` **e** o trecho correspondente do .html
  (o HTML traz uma cópia já preenchida para buscadores e para quem navega sem JS).
- Nova obra com PDF: coloque a capa em `public/livros/capas/` e o PDF em `public/livros/pdf/`,
  e aponte `capa` e `pdf` para esses caminhos em `js/paginas/livros.js` e em `livros.html`.
- Nova imagem do site: `public/img/`.

## Pendências
- Formulários (contato, lista de espera, newsletter) não enviam e-mail: precisam de um serviço (Formspree, Netlify Forms, PHP na hospedagem etc.).
- Marcadores "[a informar]" e vídeos provisórios.
