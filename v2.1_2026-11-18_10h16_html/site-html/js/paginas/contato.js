// Página: Contato (contato.html)
// Dados e lógica da página (editáveis) + função render(), que monta o HTML em JS puro.
// Depende de js/dc.js.

class Component extends DCLogic {
  constructor(p) { super(p); this.state = { sent: false }; }
  renderVals() {
    return { sent: this.state.sent, form: !this.state.sent,
      send: () => this.setState({ sent: true }), again: () => this.setState({ sent: false }) };
  }
}

function render(v) {
  var h = DC.h, attr = DC.attr, on = DC.on;
  var { sent, form, send, again } = v;
  return `<div class="dc-page">

<div style="font-family: Montserrat, 'Helvetica Neue', Arial, sans-serif; color: #24262B; background: #FFFFFF; min-height: 100vh">

<header style="border-bottom: 1px solid #14213D; background: #14213D">
<div style="max-width: 1200px; margin: 0 auto; padding: 18px 32px; display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 16px">
<a href="index.html" aria-label="Filipe Denki — início" style="display: flex; align-items: center; gap: 12px; text-decoration: none; color: #D4D7DD">
<img src="public/img/logo-filipe-denki.png" alt="Filipe Denki" style="height: 44px; width: auto; display: block">
</a>
<nav aria-label="Principal" style="display: flex; flex-wrap: wrap; gap: 26px; font-size: 14px; font-weight: 600">
<a href="index.html" style="color: #D4D7DD; text-decoration: none; padding: 6px 0">Início</a>
<a href="sobre.html" style="color: #D4D7DD; text-decoration: none; padding: 6px 0">Sobre mim</a>
<a href="publicacoes.html" style="color: #D4D7DD; text-decoration: none; padding: 6px 0">Publicações</a>
<a href="livros.html" style="color: #D4D7DD; text-decoration: none; padding: 6px 0">Livros</a>
<a href="cursos.html" style="color: #D4D7DD; text-decoration: none; padding: 6px 0">Cursos</a>
<a href="videos.html" style="color: #D4D7DD; text-decoration: none; padding: 6px 0">Vídeos</a>
<a href="imprensa.html" style="color: #D4D7DD; text-decoration: none; padding: 6px 0">Imprensa</a>
<a href="eventos.html" style="color: #D4D7DD; text-decoration: none; padding: 6px 0">Eventos</a>
<a href="contato.html" aria-current="page" style="color: #FFFFFF; text-decoration: none; padding: 6px 0; border-bottom: 2px solid #FFFFFF">Contato</a>
</nav>
</div>
</header>

<div style="max-width: 1200px; margin: 0 auto; padding: 80px 32px 96px; display: flex; flex-wrap: wrap; gap: 80px">
<section style="flex: 1 1 340px; display: flex; flex-direction: column; gap: 24px">
<h1 style="margin: 0; font-family: Montserrat, 'Helvetica Neue', Arial, sans-serif; font-weight: 600; font-size: clamp(44px, 5.5vw, 68px); line-height: 1.04">Contato</h1>
<p style="margin: 0; font-size: 17px; line-height: 1.7; color: #50545C">Canal para assuntos acadêmicos e institucionais: convites para palestras, entrevistas, bancas, cursos e participações em eventos.</p>
<dl style="margin: 0; display: flex; flex-direction: column; gap: 18px; border-top: 1px solid #24262B; padding-top: 24px; font-size: 15px">
<div><dt style="color: #50545C; font-size: 13px; padding-bottom: 4px">E-mail</dt><dd style="margin: 0"><a href="#c">[contato@filipedenki.com.br — a confirmar]</a></dd></div>
<div><dt style="color: #50545C; font-size: 13px; padding-bottom: 4px">Redes</dt><dd style="margin: 0; display: flex; flex-wrap: wrap; gap: 20px; font-weight: 600"><a href="https://www.linkedin.com">LinkedIn</a><a href="https://www.instagram.com/filipedenki/">Instagram</a><a href="https://www.youtube.com">YouTube</a></dd></div>
<div><dt style="color: #50545C; font-size: 13px; padding-bottom: 4px">Perfis acadêmicos</dt><dd style="margin: 0; display: flex; flex-wrap: wrap; gap: 20px; font-weight: 600"><a href="https://lattes.cnpq.br">Lattes</a><a href="https://orcid.org">ORCID</a></dd></div>
</dl>
</section>

<section aria-label="Formulário de contato" style="flex: 999 1 520px; min-width: 0; background: #F5F6F8; padding: 40px; display: flex; flex-direction: column; gap: 20px">
${(sent) ? `
<div role="status" style="display: flex; flex-direction: column; gap: 12px; padding: 24px 0">
<h2 style="margin: 0; font-family: Montserrat, 'Helvetica Neue', Arial, sans-serif; font-weight: 600; font-size: 30px">Mensagem enviada</h2>
<p style="margin: 0; font-size: 16px; line-height: 1.7; color: #50545C">Uma cópia foi enviada para o seu e-mail. O retorno é feito pelo endereço informado.</p>
<button type="button" data-on-click="${on(again)}" style="align-self: flex-start; background: #FFFFFF; color: #14213D; border: 1px solid #B8BDC5; font: inherit; font-weight: 600; font-size: 14px; padding: 12px 18px; border-radius: 2px; cursor: pointer">Enviar outra mensagem</button>
</div>
` : ''}
${(form) ? `
<div style="display: flex; flex-direction: column; gap: 20px">
<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 20px">
<div style="display: flex; flex-direction: column; gap: 8px"><label for="nome" style="font-size: 14px; font-weight: 600">Nome</label><input id="nome" type="text" autocomplete="name" style="padding: 13px 14px; font: inherit; font-size: 15px; border: 1px solid #B8BDC5; background: #FFFFFF; border-radius: 2px"></div>
<div style="display: flex; flex-direction: column; gap: 8px"><label for="email" style="font-size: 14px; font-weight: 600">E-mail</label><input id="email" type="email" autocomplete="email" style="padding: 13px 14px; font: inherit; font-size: 15px; border: 1px solid #B8BDC5; background: #FFFFFF; border-radius: 2px"></div>
</div>
<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 20px">
<div style="display: flex; flex-direction: column; gap: 8px"><label for="inst" style="font-size: 14px; font-weight: 600">Instituição (opcional)</label><input id="inst" type="text" style="padding: 13px 14px; font: inherit; font-size: 15px; border: 1px solid #B8BDC5; background: #FFFFFF; border-radius: 2px"></div>
<div style="display: flex; flex-direction: column; gap: 8px"><label for="assunto" style="font-size: 14px; font-weight: 600">Assunto</label><select id="assunto" style="padding: 13px 12px; font: inherit; font-size: 15px; border: 1px solid #B8BDC5; background: #FFFFFF; border-radius: 2px"><option>Convite para palestra</option><option>Pedido de entrevista</option><option>Participação acadêmica</option><option>Curso ou docência</option><option>Outro assunto institucional</option></select></div>
</div>
<div style="display: flex; flex-direction: column; gap: 8px"><label for="msg" style="font-size: 14px; font-weight: 600">Mensagem</label><textarea id="msg" rows="6" style="padding: 13px 14px; font: inherit; font-size: 15px; border: 1px solid #B8BDC5; background: #FFFFFF; border-radius: 2px; resize: vertical"></textarea></div>
<label style="display: flex; gap: 10px; align-items: flex-start; font-size: 13px; line-height: 1.6; color: #50545C"><input type="checkbox" style="margin-top: 4px"> Li a <a href="#privacidade">Política de Privacidade</a> e autorizo o uso dos meus dados apenas para resposta a esta mensagem (LGPD, Lei 13.709/2018).</label>
<p style="margin: 0; font-size: 13px; line-height: 1.6; color: #50545C">Este canal não se destina a consultas jurídicas sobre casos concretos.</p>
<button type="button" data-on-click="${on(send)}" style="align-self: flex-start; background: #14213D; color: #FFFFFF; border: 0; font: inherit; font-weight: 700; font-size: 15px; padding: 15px 26px; border-radius: 2px; cursor: pointer">Enviar mensagem</button>
</div>
` : ''}
</section>
</div>

<section id="privacidade" style="border-top: 1px solid #E1E3E7">
<div style="max-width: 1200px; margin: 0 auto; padding: 48px 32px; display: flex; flex-wrap: wrap; gap: 24px 64px; font-size: 14px; line-height: 1.7; color: #50545C">
<strong style="font-family: Montserrat, 'Helvetica Neue', Arial, sans-serif; font-weight: 600; font-size: 22px; color: #24262B; flex: 1 1 220px">Privacidade e cookies</strong>
<p style="margin: 0; flex: 3 1 480px">[Resumo da Política de Privacidade: dados coletados, finalidade, base legal, prazo de guarda, direitos do titular e contato do encarregado. Texto final a ser validado juridicamente.] Cookies de análise só são ativados após consentimento.</p>
</div>
</section>

<footer style="background: #0F1930; color: #B8BDC5; font-size: 13px">
<div style="max-width: 1200px; margin: 0 auto; padding: 32px; display: flex; flex-wrap: wrap; justify-content: space-between; gap: 16px"><span>Filipe Denki | filipedenki.com.br</span><span>Conteúdo informativo e acadêmico, conforme Provimento 205/2021 da OAB.</span></div>
</footer>
</div>
</div>`;
}

DC.mount(Component, render, document.getElementById('app'));
