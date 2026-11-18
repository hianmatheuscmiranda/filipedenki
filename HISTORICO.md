# Site Filipe Denki — Histórico de versões

**Versão atual: v2.2 — 18/11/2026, 10h28 — HTML, CSS e JS, sem framework**
Pasta: `v2.2_2026-11-18_10h28_html/site-html/`

Repositório: `git@github.com:hianmatheuscmiranda/filipedenki.git` (cópia de trabalho em `Documents/GitHub/filipedenki`).
As versões até a v2.1 também estão no OneDrive, em `Colaboradores/Hian/Site Denki/versoes/`.

A partir da v2.0, o site é mantido diretamente em HTML, CSS e JavaScript puro, sem framework.
Novas alterações são feitas em uma nova versão; as versões anteriores ficam preservadas como histórico e não são editadas.

---

## Como criar uma nova versão

1. Copie a pasta da versão atual para uma nova pasta na raiz do repositório, no padrão
   `vX.Y_AAAA-MM-DD_HHhMM_descricao` (ex.: `v2.1_2026-12-05_14h30_html`).
   Data e horário são os do fechamento da versão (horário de Brasília). O Windows não aceita ":" em nomes de pasta, por isso "14h30".
2. Faça as alterações apenas na nova pasta.
3. Gere o .zip para publicação com o nome `site-filipe-denki_vX.Y_AAAA-MM-DD_HHhMM.zip` dentro da pasta da versão.
4. Registre a versão abaixo, no topo da lista (data e horário, o que mudou, se foi publicada).

Numeração: muda o primeiro número (v3.0) em mudança de tecnologia ou de estrutura;
muda o segundo (v2.1, v2.2) em atualização de conteúdo, correção ou ajuste visual.

---

## Versões

### v2.2 — 18/11/2026, 10h28 — Pasta html/ (atual)
Pasta: `v2.2_2026-11-18_10h28_html/`
- `site-html/` — arquivos do site. Detalhes em `site-html/LEIA-ME.md`.
- `site-filipe-denki_v2.2_2026-11-18_10h28.zip` — pacote pronto para extrair na pasta raiz da hospedagem (`public_html`).

O que mudou em relação à v2.1:
- Páginas reunidas na pasta `html/`; apenas `index.html` permanece na raiz.
- Caminhos ajustados: em `index.html`, links para `html/<pagina>.html`; nas páginas de `html/` e em `js/paginas/*.js`, `../index.html`, `../public/`, `../css/` e `../js/`.
- Endereço principal (canonical) e `og:url` das páginas, `sitemap.xml` e `robots.txt` atualizados para `/html/`.
- `.htaccess`: redireciona (301) os endereços curtos (`/sobre`) e os antigos da raiz (`/sobre.html`) para `/html/sobre.html`, preservando links já divulgados.
- `LEIA-ME.md` atualizado com a nova estrutura e uma seção sobre caminhos relativos.
- Conteúdo sem alteração: o texto das 12 páginas e o resultado de todas as interações (abas, filtros, buscas) são idênticos aos da v2.1. Imagens, CSS, fonte, favicon, links internos e os 11 PDFs foram conferidos no navegador.

Atenção na publicação: se uma versão anterior já estiver no servidor, apague da raiz, depois de extrair a v2.2, as páginas antigas (`sobre.html`, `publicacoes.html` etc.) — o `.htaccess` passa a redirecioná-las para `/html/`. Se a v2.0 estiver no servidor, apague também `assets/`, `fonts/` e `favicon.png` da raiz.

Situação: pronta para publicação; publicação a cargo do usuário.

### v2.1 — 18/11/2026, 10h16 — Pasta public/
Pasta: `v2.1_2026-11-18_10h16_html/`
- `site-html/` — arquivos do site. Detalhes em `site-html/LEIA-ME.md`.
- `site-filipe-denki_v2.1_2026-11-18_10h16.zip` — pacote pronto para extrair na pasta raiz da hospedagem (`public_html`).

O que mudou em relação à v2.0:
- Arquivos de mídia, livros e fontes reunidos na pasta `public/`:
  - `assets/capas/` → `public/livros/capas/`
  - `assets/pdf/` → `public/livros/pdf/`
  - `assets/img/` → `public/img/`
  - `fonts/` → `public/fonts/`
  - `favicon.png` → `public/favicon.png`
- Referências atualizadas em todas as páginas `.html`, em `js/paginas/*.js` e em `css/fontes.css` (incluindo a imagem de compartilhamento nas redes sociais).
- `LEIA-ME.md` reescrito com a nova estrutura e as instruções para incluir novas obras.
- Conteúdo e textos sem alteração: o texto das 12 páginas é idêntico ao da v2.0. Imagens, fonte, favicon e os 11 PDFs foram conferidos no navegador.

Atenção na publicação: se a v2.0 já estiver no servidor, apague as pastas antigas `assets/` e `fonts/` e o `favicon.png` da raiz depois de extrair a v2.1, para não deixar arquivos duplicados.

Situação: pronta para publicação; publicação a cargo do usuário.

### v2.0 — 18/11/2026, 09h58 — HTML, CSS e JS
Pasta: `v2.0_2026-11-18_09h58_html/`
- `site-html/` — arquivos do site (12 páginas `.html`, `css/`, `js/`, `fonts/`, `assets/`, `sitemap.xml`, `robots.txt`, `.htaccess`). Detalhes em `site-html/LEIA-ME.md`.
- `site-filipe-denki_v2.0_2026-11-18_09h58.zip` — pacote pronto para extrair na pasta raiz da hospedagem (`public_html`).

Marcos de horário:
- 09h53 — arquivos do site gerados.
- 09h58 — pacote .zip fechado e entregue para publicação (horário de identificação da versão).

O que mudou em relação à v1.0:
- Conversão completa do projeto Vue para HTML, CSS e JS puro, sem framework e sem etapa de build.
- Conteúdo idêntico ao da v1.0: texto e comportamento das abas, filtros e buscas conferidos página a página no navegador.
- Links relativos (abre com duplo clique) e `.htaccess` para endereços sem `.html` em Apache/Hostinger.
- Fonte Montserrat servida localmente.

Situação: entregue em 18/11/2026 para publicação; publicação a cargo do usuário.

Pendências herdadas: formulários (contato, lista de espera, newsletter) não enviam e-mail; marcadores "[a informar]" e vídeos provisórios.

### v1.0 — 28/10/2026, 19h20 — Vue 3 + Vite (arquivada)
Pasta: `v1.0_2026-10-28_19h20_vue/filipe-denki-site/`
- Projeto original em Vue 3 + Vite, convertido do protótipo. Instruções no `README.md` do projeto.
- Horário de identificação: último arquivo original modificado (28/10/2026, 19h20).
- Mantida apenas como referência histórica.
- Em 18/11/2026, durante a conversão para a v2.0, foram acrescentados a esse projeto: a pasta `node_modules/` e a atualização do `package-lock.json` (09h49, por `npm install`) e o script `scripts/gerar-estatico.js` (09h53), que gerou a v2.0.
  Como a v2.0 passou a ser editada diretamente, esse script não deve mais ser usado: ele recriaria o HTML a partir do Vue e descartaria alterações feitas depois.
