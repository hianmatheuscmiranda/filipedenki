// Página: Painel administrativo (admin.html)
// Dados e lógica da página (editáveis) + função render(), que monta o HTML em JS puro.
// Depende de js/dc.js.

class Component extends DCLogic {
  constructor(p) { super(p); this.state = { view: 'new', title: '', published: false }; }
  renderVals() {
    const s = this.state;
    const slug = (s.title || 'titulo-do-artigo').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
    const on = 'background: #14213D; color: #FFFFFF; border: 1px solid #14213D; font-weight: 600; ';
    const off = 'background: #FFFFFF; color: #24262B; border: 1px solid #B8BDC5; ';
    const b = 'font: inherit; font-size: 14px; padding: 10px 16px; border-radius: 2px; cursor: pointer;';
    return {
      isList: s.view === 'list', isNew: s.view === 'new',
      listSel: s.view === 'list' ? 'true' : 'false', newSel: s.view === 'new' ? 'true' : 'false',
      listStyle: b + (s.view === 'list' ? on : off), newStyle: b + (s.view === 'new' ? on : off),
      showList: () => this.setState({ view: 'list' }), showNew: () => this.setState({ view: 'new' }),
      title: s.title, onTitle: (e) => this.setState({ title: e.target.value, published: false }),
      slug, seoTitle: (s.title || 'Título do artigo') + ' | Filipe Denki',
      published: s.published, publish: () => this.setState({ published: true })
    };
  }
}

function render(v) {
  var h = DC.h, attr = DC.attr, on = DC.on;
  var { isList, isNew, listSel, newSel, listStyle, newStyle, showList, showNew, title, onTitle, slug, seoTitle, published, publish } = v;
  return `<div class="dc-page">

<div style="font-family: Montserrat, 'Helvetica Neue', Arial, sans-serif; color: #24262B; background: #F5F6F8; min-height: 100vh; display: flex; flex-wrap: wrap">

<aside style="flex: 1 1 240px; max-width: 280px; background: #0F1930; color: #D4D7DD; padding: 24px 16px; display: flex; flex-direction: column; gap: 24px; box-sizing: border-box">
<div style="display: flex; align-items: center; gap: 10px; padding: 0 8px">
<img src="public/img/logo-filipe-denki.png" alt="Filipe Denki" style="height: 30px; width: auto; display: block">
<span style="font-weight: 700; font-size: 14px; color: #FFFFFF">Painel do acervo</span>
</div>
<nav aria-label="Seções do painel" style="display: flex; flex-direction: column; gap: 2px; font-size: 14px">
<a href="#a" style="color: #D4D7DD; text-decoration: none; padding: 11px 12px">Visão geral</a>
<a href="#a" aria-current="page" style="color: #FFFFFF; text-decoration: none; padding: 11px 12px; background: #14213D; font-weight: 600">Artigos</a>
<a href="#a" style="color: #D4D7DD; text-decoration: none; padding: 11px 12px">Livros e obras</a>
<a href="#a" style="color: #D4D7DD; text-decoration: none; padding: 11px 12px">Cursos</a>
<a href="#a" style="color: #D4D7DD; text-decoration: none; padding: 11px 12px">Vídeos</a>
<a href="#a" style="color: #D4D7DD; text-decoration: none; padding: 11px 12px">Eventos</a>
<a href="#a" style="color: #D4D7DD; text-decoration: none; padding: 11px 12px">Páginas (Sobre, Contato)</a>
<a href="#a" style="color: #D4D7DD; text-decoration: none; padding: 11px 12px">Temas e tags</a>
<a href="#a" style="color: #D4D7DD; text-decoration: none; padding: 11px 12px">Inscritos na newsletter</a>
<a href="#a" style="color: #D4D7DD; text-decoration: none; padding: 11px 12px">Mensagens recebidas</a>
<a href="#a" style="color: #D4D7DD; text-decoration: none; padding: 11px 12px">SEO e integrações</a>
</nav>
<a href="index.html" style="color: #FFFFFF; font-size: 13px; padding: 0 12px">Ver o site</a>
</aside>

<main style="flex: 999 1 640px; min-width: 0; padding: 32px 40px; box-sizing: border-box; display: flex; flex-direction: column; gap: 24px">
<div style="display: flex; flex-wrap: wrap; justify-content: space-between; align-items: center; gap: 16px">
<h1 style="margin: 0; font-family: Montserrat, 'Helvetica Neue', Arial, sans-serif; font-weight: 600; font-size: 34px">Artigos</h1>
<div role="tablist" aria-label="Visualização" style="display: flex; gap: 8px">
<button type="button" role="tab"${attr("aria-selected", listSel)} data-on-click="${on(showList)}"${attr("style", listStyle)}>Todos os artigos</button>
<button type="button" role="tab"${attr("aria-selected", newSel)} data-on-click="${on(showNew)}"${attr("style", newStyle)}>Novo artigo</button>
</div>
</div>

${(isList) ? `
<div style="background: #FFFFFF; border: 1px solid #E1E3E7; overflow-x: auto">
<table style="width: 100%; border-collapse: collapse; font-size: 14px; min-width: 640px">
<thead><tr style="text-align: left; color: #50545C; font-size: 13px"><th style="padding: 14px 18px; font-weight: 600; border-bottom: 1px solid #E1E3E7">Título</th><th style="padding: 14px 18px; font-weight: 600; border-bottom: 1px solid #E1E3E7">Tema</th><th style="padding: 14px 18px; font-weight: 600; border-bottom: 1px solid #E1E3E7">Status</th><th style="padding: 14px 18px; font-weight: 600; border-bottom: 1px solid #E1E3E7">Atualizado</th></tr></thead>
<tbody>
<tr><td style="padding: 16px 18px; border-bottom: 1px solid #E1E3E7">[Artigo demonstrativo 1]</td><td style="padding: 16px 18px; border-bottom: 1px solid #E1E3E7">Produtor Rural</td><td style="padding: 16px 18px; border-bottom: 1px solid #E1E3E7"><span style="background: #E9EBEF; color: #14213D; font-weight: 600; font-size: 12px; padding: 4px 8px">Publicado</span></td><td style="padding: 16px 18px; border-bottom: 1px solid #E1E3E7; color: #50545C">[data]</td></tr>
<tr><td style="padding: 16px 18px; border-bottom: 1px solid #E1E3E7">[Artigo demonstrativo 2]</td><td style="padding: 16px 18px; border-bottom: 1px solid #E1E3E7">Recuperação Judicial</td><td style="padding: 16px 18px; border-bottom: 1px solid #E1E3E7"><span style="background: #EDEFF2; color: #50545C; font-weight: 600; font-size: 12px; padding: 4px 8px">Rascunho</span></td><td style="padding: 16px 18px; border-bottom: 1px solid #E1E3E7; color: #50545C">[data]</td></tr>
<tr><td style="padding: 16px 18px">[Artigo demonstrativo 3]</td><td style="padding: 16px 18px">Administração Judicial</td><td style="padding: 16px 18px"><span style="background: #FFF4E0; color: #7A4B00; font-weight: 600; font-size: 12px; padding: 4px 8px">Agendado</span></td><td style="padding: 16px 18px; color: #50545C">[data]</td></tr>
</tbody>
</table>
</div>
` : ''}

${(isNew) ? `
<div style="display: flex; flex-wrap: wrap; gap: 24px; align-items: flex-start">
<div style="flex: 999 1 520px; min-width: 0; background: #FFFFFF; border: 1px solid #E1E3E7; padding: 28px; display: flex; flex-direction: column; gap: 18px">
<div style="display: flex; flex-direction: column; gap: 6px"><label for="t" style="font-size: 13px; font-weight: 600">Título</label><input id="t" type="text"${attr("value", title)} data-on-input="${on(onTitle)}" placeholder="Título do artigo" style="padding: 12px; font: inherit; font-family: Montserrat, 'Helvetica Neue', Arial, sans-serif; font-size: 22px; border: 1px solid #B8BDC5; border-radius: 2px"></div>
<p style="margin: 0; font-size: 13px; color: #50545C">Endereço: filipedenki.com.br/artigos/<strong style="color: #24262B">${h(slug)}</strong></p>
<div style="display: flex; flex-direction: column; gap: 6px"><label for="r" style="font-size: 13px; font-weight: 600">Resumo</label><textarea id="r" rows="3" style="padding: 12px; font: inherit; font-size: 15px; border: 1px solid #B8BDC5; border-radius: 2px"></textarea></div>
<div style="border: 1px solid #B8BDC5; border-radius: 2px">
<div role="toolbar" aria-label="Formatação" style="display: flex; flex-wrap: wrap; gap: 4px; padding: 6px; border-bottom: 1px solid #E1E3E7; background: #F5F6F8">
<button type="button" style="min-width: 44px; height: 36px; background: #FFFFFF; border: 1px solid #E1E3E7; font: inherit; font-size: 13px; font-weight: 700; cursor: pointer">Título</button>
<button type="button" aria-label="Negrito" style="min-width: 44px; height: 36px; background: #FFFFFF; border: 1px solid #E1E3E7; font: inherit; font-weight: 800; cursor: pointer">N</button>
<button type="button" aria-label="Itálico" style="min-width: 44px; height: 36px; background: #FFFFFF; border: 1px solid #E1E3E7; font: inherit; font-style: italic; cursor: pointer">I</button>
<button type="button" style="height: 36px; padding: 0 10px; background: #FFFFFF; border: 1px solid #E1E3E7; font: inherit; font-size: 13px; cursor: pointer">Citação longa</button>
<button type="button" style="height: 36px; padding: 0 10px; background: #FFFFFF; border: 1px solid #E1E3E7; font: inherit; font-size: 13px; cursor: pointer">Nota de rodapé</button>
<button type="button" style="height: 36px; padding: 0 10px; background: #FFFFFF; border: 1px solid #E1E3E7; font: inherit; font-size: 13px; cursor: pointer">Referência</button>
<button type="button" style="height: 36px; padding: 0 10px; background: #FFFFFF; border: 1px solid #E1E3E7; font: inherit; font-size: 13px; cursor: pointer">Imagem</button>
<button type="button" style="height: 36px; padding: 0 10px; background: #FFFFFF; border: 1px solid #E1E3E7; font: inherit; font-size: 13px; cursor: pointer">Tabela</button>
<button type="button" style="height: 36px; padding: 0 10px; background: #FFFFFF; border: 1px solid #E1E3E7; font: inherit; font-size: 13px; cursor: pointer">Anexo</button>
</div>
<div style="min-height: 220px; padding: 18px; font-size: 16px; line-height: 1.8; color: #50545C">Escreva ou cole o texto do artigo aqui. Notas e referências são numeradas automaticamente.</div>
</div>
</div>

<div style="flex: 1 1 300px; display: flex; flex-direction: column; gap: 16px">
<div style="background: #FFFFFF; border: 1px solid #E1E3E7; padding: 20px; display: flex; flex-direction: column; gap: 14px">
<strong style="font-size: 14px">Publicação</strong>
<label for="st" style="font-size: 13px; font-weight: 600">Status</label>
<select id="st" style="padding: 10px; font: inherit; font-size: 14px; border: 1px solid #B8BDC5; border-radius: 2px"><option>Rascunho</option><option>Agendado</option><option>Publicado</option></select>
<div style="display: flex; gap: 8px"><button type="button" style="flex: 1; background: #FFFFFF; color: #14213D; border: 1px solid #B8BDC5; font: inherit; font-weight: 600; font-size: 14px; padding: 11px; border-radius: 2px; cursor: pointer">Pré-visualizar</button><button type="button" data-on-click="${on(publish)}" style="flex: 1; background: #14213D; color: #FFFFFF; border: 0; font: inherit; font-weight: 700; font-size: 14px; padding: 11px; border-radius: 2px; cursor: pointer">Publicar</button></div>
${(published) ? `<p role="status" style="margin: 0; font-size: 13px; color: #14213D; font-weight: 600">Publicado. Os inscritos serão avisados por e-mail.</p>` : ''}
</div>
<div style="background: #FFFFFF; border: 1px solid #E1E3E7; padding: 20px; display: flex; flex-direction: column; gap: 10px; font-size: 13px">
<strong style="font-size: 14px">Dados bibliográficos</strong>
<label for="tm" style="font-weight: 600">Tema</label><select id="tm" style="padding: 10px; font: inherit; font-size: 14px; border: 1px solid #B8BDC5; border-radius: 2px"><option>Recuperação Judicial do Produtor Rural</option><option>Recuperação Judicial</option><option>Administração Judicial</option></select>
<label for="kw" style="font-weight: 600">Palavras-chave</label><input id="kw" type="text" placeholder="Separadas por ponto e vírgula" style="padding: 10px; font: inherit; font-size: 14px; border: 1px solid #B8BDC5; border-radius: 2px">
<label for="vc" style="font-weight: 600">Veículo e referência ABNT</label><input id="vc" type="text" style="padding: 10px; font: inherit; font-size: 14px; border: 1px solid #B8BDC5; border-radius: 2px">
<label style="display: flex; gap: 8px; align-items: center; padding-top: 4px"><input type="checkbox"> Permitir download do PDF</label>
</div>
<div style="background: #FFFFFF; border: 1px solid #E1E3E7; padding: 20px; display: flex; flex-direction: column; gap: 8px">
<strong style="font-size: 14px">Prévia no Google</strong>
<span style="font-size: 12px; color: #50545C">filipedenki.com.br/artigos/${h(slug)}</span>
<span style="font-size: 17px; color: #1A0DAB">${h(seoTitle)}</span>
<span style="font-size: 13px; line-height: 1.5; color: #50545C">O resumo é usado como meta descrição; edite-o para até 155 caracteres.</span>
</div>
</div>
</div>
` : ''}
</main>
</div>
</div>`;
}

DC.mount(Component, render, document.getElementById('app'));
