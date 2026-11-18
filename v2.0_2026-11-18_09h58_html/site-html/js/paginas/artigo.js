// Página: Liberação de grãos na recuperação judicial do produtor rural (artigo.html)
// Dados e lógica da página (editáveis) + função render(), que monta o HTML em JS puro.
// Depende de js/dc.js.

class Component extends DCLogic {
  constructor(p) { super(p); this.state = { citing: false }; }
  renderVals() {
    return { citing: this.state.citing, toggleCite: () => this.setState({ citing: !this.state.citing }) };
  }
}

function render(v) {
  var h = DC.h, attr = DC.attr, on = DC.on;
  var { citing, toggleCite } = v;
  return `<div class="dc-page">

<div style="font-family: Montserrat, 'Helvetica Neue', Arial, sans-serif; color: #24262B; background: #FFFFFF; min-height: 100vh">

<header style="border-bottom: 1px solid #14213D; background: #14213D">
<div style="max-width: 1200px; margin: 0 auto; padding: 18px 32px; display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 16px">
<a href="index.html" aria-label="Filipe Denki — início" style="display: flex; align-items: center; gap: 12px; text-decoration: none; color: #D4D7DD">
<img src="assets/img/logo-filipe-denki.png" alt="Filipe Denki" style="height: 44px; width: auto; display: block">
</a>
<nav aria-label="Principal" style="display: flex; flex-wrap: wrap; gap: 26px; font-size: 14px; font-weight: 600">
<a href="index.html" style="color: #D4D7DD; text-decoration: none; padding: 6px 0">Início</a>
<a href="sobre.html" style="color: #D4D7DD; text-decoration: none; padding: 6px 0">Sobre mim</a>
<a href="publicacoes.html" aria-current="page" style="color: #FFFFFF; text-decoration: none; padding: 6px 0; border-bottom: 2px solid #FFFFFF">Publicações</a>
<a href="livros.html" style="color: #D4D7DD; text-decoration: none; padding: 6px 0">Livros</a>
<a href="cursos.html" style="color: #D4D7DD; text-decoration: none; padding: 6px 0">Cursos</a>
<a href="videos.html" style="color: #D4D7DD; text-decoration: none; padding: 6px 0">Vídeos</a>
<a href="imprensa.html" style="color: #D4D7DD; text-decoration: none; padding: 6px 0">Imprensa</a>
<a href="eventos.html" style="color: #D4D7DD; text-decoration: none; padding: 6px 0">Eventos</a>
<a href="contato.html" style="color: #D4D7DD; text-decoration: none; padding: 6px 0">Contato</a>
</nav>
</div>
</header>

<div style="max-width: 1200px; margin: 0 auto; padding: 56px 32px 96px; display: flex; flex-wrap: wrap; gap: 72px">
<article style="flex: 999 1 600px; min-width: 0; max-width: 720px; display: flex; flex-direction: column; gap: 28px">
<nav aria-label="Trilha" style="font-size: 13px; color: #50545C; display: flex; flex-wrap: wrap; gap: 8px"><a href="publicacoes.html">Publicações</a><span aria-hidden="true">/</span><a href="publicacoes.html">Recuperação Judicial do Produtor Rural</a></nav>
<h1 style="margin: 0; font-family: Montserrat, 'Helvetica Neue', Arial, sans-serif; font-weight: 600; font-size: clamp(36px, 4.4vw, 54px); line-height: 1.12">Liberação de grãos para comercialização na recuperação judicial do produtor rural: a postergação da garantia para safra futura como alternativa à tese da essencialidade</h1>
<div style="display: flex; flex-wrap: wrap; gap: 8px 28px; font-size: 14px; color: #50545C; border-top: 1px solid #24262B; border-bottom: 1px solid #E1E3E7; padding: 16px 0">
<span><strong style="color: #24262B; font-weight: 600">Filipe Denki Belém Pacheco</strong></span>
<span>jun. 2026</span>
<span>Artigo científico</span>
<span>Leitura de 22 min</span>
</div>

<section aria-label="Resumo" style="background: #F5F6F8; padding: 28px; display: flex; flex-direction: column; gap: 12px">
<h2 style="margin: 0; font-size: 14px; font-weight: 700; color: #14213D">Resumo</h2>
<p style="margin: 0; font-size: 16px; line-height: 1.75">O presente artigo analisa a viabilidade jurídica da autorização judicial para que o produtor rural em recuperação judicial comercialize os grãos vinculados a Cédulas de Produto Rural (CPR) físicas, com postergação da garantia correspondente para a safra subsequente. A proposta apresenta-se como alternativa à tese da essencialidade dos grãos, que tem sido majoritariamente afastada pelos tribunais estaduais, em linha com o entendimento da 3ª Turma do Superior Tribunal de Justiça (STJ) de que o produto agrícola não constitui bem de capital. Demonstra-se que a liberação dos grãos para fins de caixa operacional, com substituição da garantia para a próxima colheita, não viola a extraconcursalidade da CPR física prevista no art. 11 da Lei nº 8.929/1994, com a redação dada pela Lei nº 14.112/2020, mas antes harmoniza os interesses do credor com a necessidade de preservação da atividade do devedor.</p>
<p style="margin: 0; font-size: 14px; color: #50545C"><strong style="font-weight: 600">Palavras-chave:</strong> Recuperação judicial. Produtor rural. CPR física. Grãos. Essencialidade. Postergação. Safra futura. Liquidez. Lei 14.112/2020.</p>
</section>

<div style="display: flex; flex-direction: column; gap: 22px; font-size: 17px; line-height: 1.85; color: #24262B">
<h2 style="margin: 12px 0 0; font-family: Montserrat, 'Helvetica Neue', Arial, sans-serif; font-weight: 600; font-size: 28px; line-height: 1.25">1. Introdução</h2>
<p style="margin: 0">O agronegócio brasileiro enfrenta uma das mais severas crises de endividamento de sua história recente. Dados da Serasa Experian revelam que apenas no primeiro trimestre de 2025 foram registrados 389 pedidos de recuperação judicial no setor agropecuário, representando aumento de 45% em relação ao mesmo período do ano anterior. O endividamento rural total já orbita os R$ 890 bilhões, com projeções de ultrapassar R$ 1 trilhão nos próximos anos, alimentado por reversões de margens, volatilidade cambial, fenômenos climáticos e pelo elevado custo dos insumos contratados em ciclos anteriores de preços favoráveis.</p>
<p style="margin: 0">No centro dessa crise está um paradoxo operacional: o produtor rural, ao atingir o período de colheita, detém fisicamente o ativo mais valioso de sua atividade — a safra produzida —, mas não pode convertê-lo em caixa porque esse mesmo ativo está vinculado a credores por meio de Cédulas de Produto Rural (CPR) de liquidação física. A incapacidade de monetizar o grão colhido impede o pagamento de despesas essenciais à operação em curso — mão de obra, arrendamentos, insumos para o ciclo seguinte — e transforma uma crise de liquidez pontual em insolvência estrutural.</p>
<p style="margin: 0">Nesse contexto, dois caminhos jurídicos têm sido percorridos pelos devedores e seus advogados. O primeiro é a arguição de essencialidade dos grãos, com fundamento no art. 49, § 3º, da Lei nº 11.101/2005 (LREF), buscando impedir a excussão da garantia durante o stay period. O segundo — e objeto central deste artigo — é o pleito de autorização judicial para comercialização imediata dos grãos vinculados à CPR física, com postergação da obrigação de entrega para a safra futura, garantindo ao credor proteção equivalente ou superior à que já detinha.</p>
<p style="margin: 0">A tese da essencialidade, como se verá, tem sido sistematicamente afastada pelo STJ e pela maioria dos tribunais estaduais, que entendem que o produto agrícola constitui resultado final da atividade, não bem de capital. A postergação para safra futura, por sua vez, representa solução mais consistente com o quadro normativo vigente, com a lógica econômica subjacente à CPR e com a finalidade preservacionista da lei concursal.</p>
<div style="border-top: 1px solid #E1E3E7; padding-top: 20px; display: flex; flex-direction: column; gap: 10px">
<span style="font-size: 14px; font-weight: 700; color: #14213D">Continua no texto completo</span>
<ol style="margin: 0; padding: 0; list-style: none; font-family: Montserrat, 'Helvetica Neue', Arial, sans-serif; font-size: 18px; line-height: 1.5; display: flex; flex-direction: column; gap: 10px">
<li>2. A crise de liquidez do produtor rural e o papel dos grãos como único ativo monetizável</li>
<li>3. A tese da essencialidade dos grãos: construção, limites e afastamento pela jurisprudência</li>
<li>4. A postergação da garantia para safra futura: fundamentos e viabilidade jurídica</li>
<li>5. Precedentes jurisprudenciais relevantes</li>
<li>6. O Provimento CNJ nº 216/2026 e seu impacto sobre as teses em disputa</li>
<li>7. Condições de admissibilidade e limites da postergação</li>
<li>8. Conclusão</li>
</ol>
</div>
</div>

<section aria-labelledby="h-ref" style="display: flex; flex-direction: column; gap: 10px">
<h2 id="h-ref" style="margin: 0; font-size: 14px; font-weight: 700">Referências</h2>
<p style="margin: 0; font-size: 14px; line-height: 1.7; color: #50545C">BRASIL. Lei nº 11.101, de 9 de fevereiro de 2005. Regula a recuperação judicial, a extrajudicial e a falência do empresário e da sociedade empresária.</p>
<p style="margin: 0; font-size: 14px; line-height: 1.7; color: #50545C">BRASIL. Lei nº 8.929, de 22 de agosto de 1994. Institui a Cédula de Produto Rural.</p>
<p style="margin: 0; font-size: 14px; line-height: 1.7; color: #50545C">BRASIL. Lei nº 14.112, de 24 de dezembro de 2020. Altera a Lei nº 11.101/2005.</p>
<p style="margin: 0; font-size: 14px; line-height: 1.7; color: #50545C">BRASIL. Superior Tribunal de Justiça. REsp nº 2.178.558/MT. 3ª Turma, 2025.</p>
<p style="margin: 0; font-size: 14px; line-height: 1.7; color: #50545C">[Demais referências do artigo, conforme o original.]</p>
</section>
</article>

<aside aria-label="Ações do artigo" style="flex: 1 1 260px; display: flex; flex-direction: column; gap: 32px; align-self: flex-start">
<div style="display: flex; flex-direction: column; gap: 10px; border-top: 2px solid #14213D; padding-top: 20px">
<button type="button" data-on-click="${on(toggleCite)}"${attr("aria-expanded", citing)} style="background: #14213D; color: #FFFFFF; border: 0; font: inherit; font-weight: 700; font-size: 14px; padding: 13px 16px; border-radius: 2px; text-align: left; cursor: pointer">Citar este artigo</button>
${(citing) ? `
<div style="background: #F5F6F8; padding: 14px; font-size: 13px; line-height: 1.6">PACHECO, Filipe Denki Belém. Liberação de grãos para comercialização na recuperação judicial do produtor rural. [Veículo], 2026.<br><button type="button" style="margin-top: 10px; background: #FFFFFF; color: #14213D; border: 1px solid #B8BDC5; font: inherit; font-weight: 600; font-size: 13px; padding: 8px 12px; border-radius: 2px; cursor: pointer">Copiar ABNT</button></div>
` : ''}
<button type="button" style="background: #FFFFFF; color: #14213D; border: 1px solid #B8BDC5; font: inherit; font-weight: 600; font-size: 14px; padding: 12px 16px; border-radius: 2px; text-align: left; cursor: pointer">Baixar PDF</button>
<button type="button" style="background: #FFFFFF; color: #14213D; border: 1px solid #B8BDC5; font: inherit; font-weight: 600; font-size: 14px; padding: 12px 16px; border-radius: 2px; text-align: left; cursor: pointer">Compartilhar no LinkedIn</button>
<button type="button" style="background: #FFFFFF; color: #14213D; border: 1px solid #B8BDC5; font: inherit; font-weight: 600; font-size: 14px; padding: 12px 16px; border-radius: 2px; text-align: left; cursor: pointer">Copiar link</button>
</div>
<div style="display: flex; flex-direction: column; gap: 14px">
<span style="font-size: 13px; font-weight: 700; color: #50545C">Do mesmo tema</span>
<a href="publicacoes.html" style="font-family: Montserrat, 'Helvetica Neue', Arial, sans-serif; font-size: 18px; line-height: 1.35; color: #24262B; text-decoration: none; padding-bottom: 14px; border-bottom: 1px solid #E1E3E7">O empresário individual rural e os limites da recuperação judicial</a>
<a href="publicacoes.html" style="font-family: Montserrat, 'Helvetica Neue', Arial, sans-serif; font-size: 18px; line-height: 1.35; color: #24262B; text-decoration: none; padding-bottom: 14px; border-bottom: 1px solid #E1E3E7">A falência do produtor rural pessoa física</a>
</div>
</aside>
</div>

<footer style="background: #0F1930; color: #B8BDC5; font-size: 13px">
<div style="max-width: 1200px; margin: 0 auto; padding: 32px; display: flex; flex-wrap: wrap; justify-content: space-between; gap: 16px"><span>Filipe Denki | filipedenki.com.br</span><a href="contato.html" style="color: #FFFFFF">Contato e política de privacidade</a></div>
</footer>
</div>
</div>`;
}

DC.mount(Component, render, document.getElementById('app'));
