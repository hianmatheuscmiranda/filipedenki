# Site Filipe Denki — Vue 3 + Vite

Site profissional e acadêmico de **Filipe Denki Belém Pacheco**, convertido do protótipo original para um projeto Vue.js pronto para produção.

## Requisitos

- Node.js 18 ou superior (recomendado: 20 LTS)
- npm 9 ou superior

## Como rodar no computador

```bash
npm install        # instala as dependências
npm run dev        # abre o site em http://localhost:5173
```

## Como gerar a versão de produção

```bash
cp .env.example .env     # ajuste VITE_SITE_URL com o seu domínio
npm run build            # gera a pasta dist/ (com sitemap.xml e robots.txt)
npm run preview          # confere a versão de produção em http://localhost:4173
```

## Estrutura

```
index.html               metadados de SEO, Open Graph e dados estruturados (schema.org)
public/
  assets/img/            logo, retrato e fotos
  assets/capas/          capas dos livros e obras coletivas
  assets/pdf/            PDFs disponíveis para download na página Livros
  favicon.png
  _redirects             fallback de rotas para Netlify
src/
  main.js                inicialização do app (Vue, Router, fontes Montserrat locais)
  App.vue                casca do app; links internos navegam sem recarregar
  router/index.js        rotas, títulos e descrições de cada página (SEO)
  views/                 uma página por arquivo (HomeView, SobreView, LivrosView...)
  lib/                   base que conecta a lógica de cada página ao Vue
  styles/global.css      estilos globais
scripts/sitemap.js       gera sitemap.xml e robots.txt depois do build
vercel.json              fallback de rotas e cache para Vercel
netlify.toml             build e fallback de rotas para Netlify
```

## Rotas

| Página | Endereço |
|---|---|
| Início | `/` |
| Sobre mim | `/sobre` |
| Artigos e publicações | `/publicacoes` |
| Artigo (liberação de grãos) | `/artigo` |
| Livros e obras | `/livros` |
| Cursos | `/cursos` |
| Vídeos e entrevistas | `/videos` |
| Entrevistas e imprensa | `/imprensa` |
| Eventos e atividades | `/eventos` |
| Contato | `/contato` |
| Painel administrativo (interno, `noindex`) | `/admin` |
| Sistema visual (interno, `noindex`) | `/sistema` |

Endereços inexistentes redirecionam para a página inicial.

## Como atualizar o conteúdo

Cada página fica em `src/views/`. A parte de cima do arquivo (`<template>`) é o layout; a parte de baixo (`<script>`) guarda as listas de conteúdo:

- **Publicações:** `PublicacoesView.vue`, lista `DATA` (cada item tem `ord` = data no formato AAAAMMDD, usada na ordenação).
- **Imprensa:** `ImprensaView.vue`, listas `M` (matérias) e `TV` (TV e rádio).
- **Eventos:** `EventosView.vue`, listas `E` (eventos realizados) e `C` (cursos ministrados).
- **Livros:** `LivrosView.vue`, lista `W`. Para um novo PDF, coloque o arquivo em `public/assets/pdf/` e a capa em `public/assets/capas/`, e aponte `pdf` e `capa` para `/assets/...`.
- **Vídeos:** `VideosView.vue`, lista `REAL`.

Depois de editar, rode `npm run build` e publique de novo (na Vercel/Netlify isso acontece sozinho a cada envio ao GitHub).

## Publicar na Vercel (recomendado)

1. Crie uma conta em vercel.com e um repositório no GitHub com estes arquivos.
2. Na Vercel: **Add New → Project → Import** o repositório.
3. Framework: **Vite** (detectado). Build: `npm run build`. Output: `dist`.
4. Em **Settings → Environment Variables**, crie `VITE_SITE_URL = https://www.filipedenki.com.br`.
5. Clique em **Deploy**. O `vercel.json` já cuida do fallback de rotas.

## Publicar na Netlify

1. Em app.netlify.com: **Add new site → Import an existing project** e escolha o repositório.
2. O `netlify.toml` já define build (`npm run build`), pasta (`dist`) e fallback de rotas.
3. Em **Site configuration → Environment variables**, crie `VITE_SITE_URL`.
4. Alternativa sem GitHub: rode `npm run build` e arraste a pasta `dist/` em app.netlify.com/drop.

## Domínio próprio (filipedenki.com.br) e HTTPS

1. No painel da hospedagem (Vercel: **Settings → Domains**; Netlify: **Domain management**), adicione `filipedenki.com.br` e `www.filipedenki.com.br`.
2. No registro do domínio (Registro.br ou o provedor do DNS), crie os registros que o painel mostrar. Normalmente:
   - **Vercel:** `A` para `@` apontando para `76.76.21.21` e `CNAME` para `www` apontando para `cname.vercel-dns.com`.
   - **Netlify:** `CNAME` para `www` apontando para `<seu-site>.netlify.app` e o registro `A`/`ALIAS` indicado no painel para o domínio raiz.
   - Use sempre os valores exibidos no painel da hospedagem, que prevalecem sobre estes exemplos.
3. O certificado HTTPS (Let’s Encrypt) é emitido automaticamente depois que o DNS propaga (de minutos a algumas horas).
4. Envie `https://www.filipedenki.com.br/sitemap.xml` no Google Search Console.

## O que depende de configuração adicional

- **Formulário de contato e lista de espera de cursos:** hoje mostram a confirmação na tela, mas **não enviam e-mail**. Para receber as mensagens, conecte um serviço (Netlify Forms, Formspree, EmailJS ou uma API própria).
- **Painel administrativo (`/admin`):** é a tela de demonstração do protótipo; não salva dados.
- **Links “a informar”:** alguns botões (Lumen Juris, Amazon, plataforma de cursos, inscrições institucionais) seguem como marcadores até você ter os links.
- **Vídeos e matérias:** abrem nos sites de origem (YouTube, Spotify, R7, Lara Martins, veículos de imprensa).
