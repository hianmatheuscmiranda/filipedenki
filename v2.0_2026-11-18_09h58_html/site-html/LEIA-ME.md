# Site Filipe Denki — versão HTML, CSS e JS (sem framework)

Gerada a partir do projeto Vue (pasta filipe-denki-site) por `node scripts/gerar-estatico.js`.

## Como abrir
- Duplo clique em `index.html` já funciona (links relativos).
- Para publicar: envie todo o conteúdo desta pasta para a raiz do domínio (Hostinger, Apache, Netlify, Vercel, GitHub Pages...).
  Em Apache/Hostinger, o `.htaccess` permite usar /sobre além de /sobre.html.

## Estrutura
- `*.html` — uma página por arquivo, com todo o conteúdo já escrito no HTML.
- `css/estilos.css` — estilos globais; `css/fontes.css` + `fonts/` — Montserrat local.
- `js/dc.js` — base em JS puro (estado, redesenho, eventos) usada pelas páginas interativas.
- `js/paginas/<pagina>.js` — dados (listas de publicações, livros, vídeos, imprensa, eventos, cursos) e lógica de filtros/abas.
- `assets/` — imagens, capas e PDFs. `sitemap.xml`, `robots.txt`.

## Como atualizar o conteúdo
- Páginas estáticas (index, sobre, sistema): edite o próprio .html.
- Páginas interativas (publicacoes, livros, cursos, videos, imprensa, eventos, contato, artigo, admin):
  edite as listas no topo de `js/paginas/<pagina>.js` **e** o trecho correspondente do .html
  (o HTML traz uma cópia pré-renderizada para buscadores e para quem navega sem JS).
  Alternativa mais segura: edite o projeto Vue e rode o gerador de novo.

## Pendências herdadas do original
- Formulários (contato, lista de espera, newsletter) não enviam e-mail: precisam de um serviço (Formspree, Netlify Forms, PHP na hospedagem etc.).
- Marcadores "[a informar]" e vídeos provisórios seguem como no original.
