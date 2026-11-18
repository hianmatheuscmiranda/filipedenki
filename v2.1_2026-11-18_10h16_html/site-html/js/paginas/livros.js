// Página: Livros e obras (livros.html)
// Dados e lógica da página (editáveis) + função render(), que monta o HTML em JS puro.
// Depende de js/dc.js.

class Component extends DCLogic {
  constructor(p) { super(p); this.state = { tab: 'Todas', toc: false, dl: {} }; }
  renderVals() {
    const T = ['Todas','Obras individuais','Obras coletivas','Artigos em periódicos'];
    const s = this.state;
    const W = [
      { cat: 'Obras coletivas', tipo: 'Obra coletiva | Capítulo', obra: 'O Mercado de Special Situations no Brasil: Reestruturação, Créditos e Ativos Estressados', titulo: 'A efetividade da recuperação extrajudicial como ferramenta para superar as limitações da recuperação judicial', editora: 'Mizuno', ano: '2026', info: 'Coautoria com Raoni Sales de Barros | Org. Wilson Furtado Roberto, João de Oliveira Rodrigues Filho, Pedro Freitas Teixeira e Luiz Roberto Ayoub', resumo: 'A recuperação extrajudicial como instrumento para contornar limitações da recuperação judicial, com dados sobre seu uso crescente no país.', capa: 'public/livros/capas/special-situations.jpg', pdf: 'public/livros/pdf/special-situations.pdf', arquivo: 'Filipe Denki - Special Situations no Brasil - Recuperacao extrajudicial.pdf' },
      { cat: 'Obras coletivas', tipo: 'Obra coletiva | Capítulo', obra: 'Propriedade Intelectual e Tecnologias Contemporâneas', titulo: 'A manutenção dos contratos de licenciamento de propriedade intelectual de empresas em recuperação judicial', editora: 'Mizuno', ano: '2026', info: 'Coautoria com Rayane C. Melo | Org. Paulo Dias de Moura Ribeiro, Wilson Furtado Roberto e Maria Eduarda Trindade dos Reis | p. 373', resumo: 'A continuidade de contratos de licença de marcas e de outros ativos de propriedade intelectual durante a recuperação judicial.', capa: 'public/livros/capas/propriedade-intelectual.jpg', pdf: 'public/livros/pdf/propriedade-intelectual.pdf', arquivo: 'Filipe Denki - Propriedade Intelectual - Licenciamento na RJ.pdf' },
      { cat: 'Obras coletivas', tipo: 'Obra coletiva | Capítulo', obra: '10 Anos do CPC: Lei nº 13.105, de 16/03/2015', titulo: 'A intersecção do processo civil e a recuperação judicial: aspectos jurídicos e práticos', editora: 'Mizuno', ano: '2025', info: 'Org. executivo Min. Cristiano Zanin | Org. Min. Paulo Dias de Moura Ribeiro, Wilson Furtado Roberto e outros | Prefácio de Manoel de Queiroz Pereira Calças', resumo: 'A aplicação subsidiária do CPC na recuperação judicial: prazos, recursos, competência do juízo recuperacional e métodos consensuais.', capa: 'public/livros/capas/10-anos-cpc.jpg', pdf: 'public/livros/pdf/10-anos-cpc.pdf', arquivo: 'Filipe Denki - 10 Anos do CPC - Processo civil e RJ.pdf' },
      { cat: 'Obras coletivas', tipo: 'Obra coletiva | Capítulo', obra: 'Reforma da Lei de Recuperação e Falência: Estudos em Homenagem aos Drs. Alexandre Alves Lazzarini e Cesar Ciampolini Neto', titulo: 'A ineficiência do sistema de insolvência empresarial brasileiro para as micro e pequenas empresas: por que a recuperação judicial não é uma lei para todos?', editora: 'Thoth', ano: '2025', info: 'Org. Ronaldo Vasconcelos e outros | Capítulo 33 | p. 525–542', resumo: 'Por que a recuperação judicial não atende micro e pequenas empresas e quais os limites do plano especial.', capa: 'public/livros/capas/reforma-lei-thoth.jpg', pdf: 'public/livros/pdf/reforma-lei-thoth.pdf', arquivo: 'Filipe Denki - Reforma da Lei (Thoth) - MEPs.pdf' },
      { cat: 'Obras coletivas', tipo: 'Obra coletiva | Capítulo', obra: 'A Nova Recuperação Extrajudicial: Análise e Configurações da Doutrina e Prática nos Tribunais', titulo: 'Tratamento do crédito tributário na recuperação extrajudicial', editora: 'Juruá', ano: '2024', info: 'Coautoria com Jorge Lucas de Oliveira | Org. Alexandre Correa Nasser de Melo e Juliana Biolchi | Prefácio do Min. Raul Araújo (STJ) | p. 347–360', resumo: 'Examina o tratamento do crédito tributário na recuperação extrajudicial em comparação com a recuperação judicial e defende que a lei passe a equipará-los.', capa: 'public/livros/capas/nova-recuperacao-extrajudicial.jpg', pdf: 'public/livros/pdf/nova-recuperacao-extrajudicial.pdf', arquivo: 'Filipe Denki - A Nova Recuperacao Extrajudicial - Credito tributario.pdf' },
      { cat: 'Obras coletivas', tipo: 'Obra coletiva | Capítulo', obra: 'M&A e Reestruturação de Empresas: Estudos do Comitê de M&A e Reestruturação de Empresas da CAMARB', titulo: 'Mediação ou plano alternativo dos credores: buscando meios para a construção de soluções colaborativas na recuperação judicial', editora: 'Quartier Latin', ano: '2023', info: 'Coautoria com Juliana Biolchi | Coord. Luis Fernando Guerrero | Org. Nathalia Jordão, Fernanda Gomes Barjud Silva e Hugo Tubone Yamashita | p. 447–475', resumo: 'Mediação e plano alternativo de credores como caminhos para soluções colaborativas na recuperação judicial após a reforma de 2020.', capa: 'public/livros/capas/ma-reestruturacao.jpg', pdf: 'public/livros/pdf/ma-reestruturacao.pdf', arquivo: 'Filipe Denki - M&A e Reestruturacao (CAMARB) - Mediacao e PAC.pdf' },
      { cat: 'Obras coletivas', tipo: 'Obra coletiva | Capítulo', obra: 'Atualidades do Direito Empresarial: Estudos em Homenagem ao Professor Marlon Tomazette', titulo: 'A ineficiência do sistema de insolvência empresarial brasileiro para as micro e pequenas empresas (MEPs)', editora: 'Expert', ano: '2023', info: 'Org. André Santa Cruz, Henrique Arake e Eduardo Rossigneux | Capítulo 11 | p. 247', resumo: 'Os obstáculos de custo e de procedimento que afastam micro e pequenas empresas da recuperação judicial.', capa: 'public/livros/capas/atualidades-direito-empresarial.jpg', pdf: 'public/livros/pdf/atualidades-direito-empresarial.pdf', arquivo: 'Filipe Denki - Atualidades do Direito Empresarial - MEPs.pdf' },
      { cat: 'Obras coletivas', tipo: 'Obra coletiva | Capítulo', obra: 'Recuperação Judicial e Falência: Evidências Empíricas', titulo: 'Análise comparativa entre os planos de recuperação judicial de produtor rural e das demais atividades empresariais no âmbito do TJSP', editora: 'Foco', ano: '2022', info: 'Coautoria com Alessandra Monteiro Araujo Lima, Aluísio de Freitas Miele e Ana Lívia Carvalho Silva | Coord. Marcelo Barbosa Sacramone, Marcelo Guedes Nunes e Rodrigo D’Orio Dantas | p. 425', resumo: 'Estudo empírico que compara os planos de recuperação judicial de produtores rurais com os das demais atividades no TJSP: deságio, prazos, juros, cram down e venda de UPIs.', capa: 'public/livros/capas/evidencias-empiricas.jpg', pdf: 'public/livros/pdf/evidencias-empiricas.pdf', arquivo: 'Filipe Denki - Evidencias Empiricas - RJ do produtor rural.pdf' },
      { cat: 'Obras coletivas', tipo: 'Obra coletiva | Capítulo', obra: 'Reforma da Lei de Recuperação e Falência (Lei nº 14.112/20)', titulo: 'As novas funções do administrador judicial com a reforma da lei e seus desafios', editora: 'IASP', ano: '2021', info: 'Coord. Ronaldo Vasconcelos, Fernanda Neves Piva, Gabriel José de Orleans e Bragança, Thais D’Angelo da Silva Hanesaka e Thomaz Luiz Sant’Ana | p. 435', resumo: 'As funções acrescentadas ao administrador judicial pela Lei nº 14.112/2020 e os desafios de atuar em varas não especializadas.', capa: 'public/livros/capas/reforma-lei-iasp.jpg', pdf: 'public/livros/pdf/reforma-lei-iasp.pdf', arquivo: 'Filipe Denki - Reforma da Lei (IASP) - Administrador judicial.pdf' },
      { cat: 'Obras coletivas', tipo: 'Obra coletiva | Capítulo', obra: 'Ensaios de Direito Empresarial: Estudos em Homenagem ao Professor Ivanildo Figueiredo', titulo: 'Recuperação judicial do produtor rural', editora: 'IAP / Livro Rápido', ano: '2021', info: 'Org. Jáder Aurélio Gouveia Lemos Neto, Renato Hayashi, Catarina Ferraz e Victor Souza Soares | Prefácio de Manoel Justino Bezerra Filho | p. 453–483', resumo: 'Analisa o acesso do produtor rural à recuperação judicial, as correntes jurisprudenciais sobre o registro na Junta Comercial e o marco temporal de sujeição dos créditos.', capa: 'public/livros/capas/ensaios-direito-empresarial.jpg', pdf: 'public/livros/pdf/ensaios-direito-empresarial.pdf', arquivo: 'Filipe Denki - Ensaios de Direito Empresarial - RJ do produtor rural.pdf' },
      { cat: 'Obras coletivas', tipo: 'Obra coletiva | Capítulo', obra: 'Recuperação Judicial do Produtor Rural: Aspectos Teóricos e Práticos', titulo: 'A inconstitucionalidade da exclusão dos créditos da recuperação judicial de produtor rural', editora: 'Lumen Juris', ano: '2024', info: 'Com Breno Miranda, Aline Nespoli e outros' },
      { cat: 'Artigos em periódicos', tipo: 'Artigo em periódico', obra: 'Revista Síntese Direito Civil e Processual Civil, nº 153', titulo: 'Da submissão da CPR física à recuperação extrajudicial', editora: 'Síntese / IOB', ano: '2025', info: 'Coautoria com Rodrigo Spinelli e Ramirhis Laura Xavier Alves | jan.–fev. 2025 | p. 82–87', resumo: 'Sustenta que, após a Lei 14.112/2020, a CPR física pode ser submetida à recuperação extrajudicial, ainda que excluída da recuperação judicial.', capa: 'public/livros/capas/revista-sintese-153.jpg', pdf: 'public/livros/pdf/revista-sintese-153.pdf', arquivo: 'Filipe Denki - Revista Sintese 153 - CPR fisica e recuperacao extrajudicial.pdf' }
    ];
    const setDl = (k, v) => this.setState({ dl: Object.assign({}, this.state.dl, { [k]: v }) });
    const baixar = async (w) => {
      setDl(w.pdf, 'Preparando o download…');
      try {
        const d = window.claude ? await window.claude.use('downloads') : null;
        if (!d) { const a = document.createElement('a'); a.href = w.pdf; a.download = w.arquivo; document.body.appendChild(a); a.click(); a.remove(); setDl(w.pdf, 'Download iniciado.'); return; }
        const r = await fetch(w.pdf);
        if (!r.ok) throw { code: 'fetch' };
        const blob = await r.blob();
        await d.save({ filename: w.arquivo, data: blob });
        setDl(w.pdf, 'Download concluído.');
      } catch (e) {
        setDl(w.pdf, e && e.code === 'declined' ? '' : 'Não foi possível baixar agora. Tente novamente.');
      }
    };
    const slots = W.filter(w => s.tab === 'Todas' || w.cat === s.tab).map(w => Object.assign({}, w, {
      capa: w.capa || '', resumo: w.resumo || '', temCapa: !!w.capa, semCapa: !w.capa, temResumo: !!w.resumo,
      alt: 'Capa de ' + w.obra, aria: 'Baixar PDF: ' + w.titulo,
      status: (s.dl || {})[w.pdf] || '', baixar: () => baixar(w)
    }));
    return {
      tabs: T.map(t => ({ label: t, sel: s.tab === t ? 'true' : 'false', pick: () => this.setState({ tab: t }),
        style: 'font: inherit; font-size: 14px; padding: 10px 16px; border-radius: 2px; cursor: pointer; ' + (s.tab === t ? 'background: #14213D; color: #FFFFFF; border: 1px solid #14213D; font-weight: 600' : 'background: #FFFFFF; color: #24262B; border: 1px solid #B8BDC5') })),
      slots,
      toc: s.toc, tocLabel: s.toc ? 'Ocultar' : 'Mostrar',
      toggleToc: () => this.setState({ toc: !s.toc })
    };
  }
}

function render(v) {
  var h = DC.h, attr = DC.attr, on = DC.on;
  var { tabs, slots, toc, tocLabel, toggleToc } = v;
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
<a href="livros.html" aria-current="page" style="color: #FFFFFF; text-decoration: none; padding: 6px 0; border-bottom: 2px solid #FFFFFF">Livros</a>
<a href="cursos.html" style="color: #D4D7DD; text-decoration: none; padding: 6px 0">Cursos</a>
<a href="videos.html" style="color: #D4D7DD; text-decoration: none; padding: 6px 0">Vídeos</a>
<a href="imprensa.html" style="color: #D4D7DD; text-decoration: none; padding: 6px 0">Imprensa</a>
<a href="eventos.html" style="color: #D4D7DD; text-decoration: none; padding: 6px 0">Eventos</a>
<a href="contato.html" style="color: #D4D7DD; text-decoration: none; padding: 6px 0">Contato</a>
</nav>
</div>
</header>

<section style="max-width: 1200px; margin: 0 auto; padding: 80px 32px 40px; display: flex; flex-direction: column; gap: 20px">
<h1 style="margin: 0; font-family: Montserrat, 'Helvetica Neue', Arial, sans-serif; font-weight: 600; font-size: clamp(44px, 5.5vw, 72px); line-height: 1.04">Livros e obras</h1>
<p style="margin: 0; max-width: 40em; font-size: 17px; line-height: 1.7; color: #50545C">Obras individuais, coletivas, capítulos e publicações em coautoria. Os dados bibliográficos são exibidos conforme informados pelo autor e pelas editoras. Nas obras com capa, clique na imagem para baixar o PDF com o capítulo ou artigo.</p>
<div role="tablist" aria-label="Tipo de obra" style="display: flex; flex-wrap: wrap; gap: 8px; padding-top: 12px">
${(tabs || []).map((t, i4) => `
<button type="button" role="tab"${attr("aria-selected", t.sel)} data-on-click="${on(t.pick)}"${attr("style", t.style)}>${h(t.label)}</button>
`).join('')}
</div>
</section>

<figure style="margin: 0 auto 40px; max-width: 1200px; padding: 0 32px; box-sizing: border-box">
<img src="public/img/estante.jpg" alt="Lombadas de obras coletivas e revistas com participação de Filipe Denki, lado a lado sobre um aparador" style="display: block; width: 100%; height: clamp(200px, 30vw, 380px); object-fit: cover; object-position: 50% 45%">
<figcaption style="padding-top: 10px; font-size: 13px; color: #50545C">Algumas das obras coletivas e revistas em que publicou</figcaption>
</figure>

<section style="max-width: 1200px; margin: 0 auto; padding: 24px 32px 80px; display: grid; grid-template-columns: repeat(auto-fill, minmax(230px, 1fr)); gap: 48px 40px">
<div style="display: flex; flex-direction: column; gap: 14px">
<img src="public/livros/capas/rj-produtor-rural.jpg" alt="Capa do livro A Recuperação Judicial de Produtor Rural" style="display: block; width: 100%; aspect-ratio: 2 / 3; object-fit: cover; box-shadow: 12px 12px 0 #B8BDC5">
<span style="font-size: 12px; font-weight: 700; color: #6D1F32; padding-top: 6px">Obra individual | Lançamento em 23 nov. 2026</span>
<span style="font-family: Montserrat, 'Helvetica Neue', Arial, sans-serif; font-size: 20px; line-height: 1.3">A Recuperação Judicial de Produtor Rural: entre a retórica da inclusão e a prática da exclusão de créditos</span>
<span style="font-size: 13px; color: #14213D; font-weight: 600">Lumen Juris, 2026</span>
<p style="margin: 0; font-size: 14px; line-height: 1.6; color: #2F3238">Fruto da pesquisa de mestrado em Direito Comercial na PUC-SP, analisa as exclusões de créditos que tornam a recuperação judicial inviável para muitos produtores e propõe um microssistema de insolvência rural.</p>
<span style="font-size: 13px; line-height: 1.5; color: #50545C">À venda no site da Lumen Juris e na Amazon | links em breve</span>
</div>
<a href="#obra" style="text-decoration: none; color: #24262B; display: flex; flex-direction: column; gap: 14px">
<div style="aspect-ratio: 2 / 3; background: #14213D; box-shadow: 12px 12px 0 #B8BDC5; display: flex; flex-direction: column; justify-content: space-between; padding: 24px 20px; box-sizing: border-box; color: #FFFFFF">
<svg width="28" height="28" viewBox="0 0 164 164" aria-hidden="true"><path d="M0 0H164V164H64V131H132V33H0Z" fill="#D4D7DD"></path><path d="M0 71H100V100H36V164H0Z" fill="#FFFFFF"></path></svg>
<span style="font-family: Montserrat, 'Helvetica Neue', Arial, sans-serif; font-size: 21px; line-height: 1.2">Manual da Administração Judicial</span>
<span style="font-size: 11px; color: #D4D7DD">Capa ilustrativa</span>
</div>
<span style="font-size: 12px; font-weight: 700; color: #6D1F32; padding-top: 6px">Obra individual | Em produção</span>
<span style="font-family: Montserrat, 'Helvetica Neue', Arial, sans-serif; font-size: 20px; line-height: 1.3">Manual da Administração Judicial — Teoria e Prática</span>
<span style="font-size: 13px; color: #50545C">Lançamento previsto para o 2º bimestre de 2027</span>
</a>
${(slots || []).map((s, i5) => `
<div style="display: flex; flex-direction: column; gap: 14px">
${(s.temCapa) ? `
<button type="button" data-on-click="${on(s.baixar)}"${attr("aria-label", s.aria)} title="Clique para baixar o PDF" style="padding: 0; border: 0; background: none; cursor: pointer; display: block; width: 100%">
<img${attr("src", s.capa)}${attr("alt", s.alt)} style="display: block; width: 100%; aspect-ratio: 2 / 3; object-fit: cover; box-shadow: 12px 12px 0 #B8BDC5; border: 1px solid #E1E3E7; box-sizing: border-box">
</button>
` : ''}
${(s.semCapa) ? `
<div style="aspect-ratio: 2 / 3; background: #F5F6F8; border: 1px solid #E1E3E7; display: flex; flex-direction: column; justify-content: space-between; padding: 22px 18px; box-sizing: border-box">
<span style="font-family: Montserrat, 'Helvetica Neue', Arial, sans-serif; font-size: 19px; line-height: 1.25; color: #14213D">${h(s.obra)}</span>
<span style="font-size: 12px; color: #50545C">${h(s.editora)}, ${h(s.ano)}</span>
</div>
` : ''}
<span style="font-size: 12px; font-weight: 700; color: #6D1F32; padding-top: 6px">${h(s.tipo)}</span>
<span style="font-family: Montserrat, 'Helvetica Neue', Arial, sans-serif; font-size: 19px; line-height: 1.3">${h(s.titulo)}</span>
${(s.temCapa) ? `<span style="font-size: 13px; color: #14213D; font-weight: 600">${h(s.obra)} | ${h(s.editora)}, ${h(s.ano)}</span>` : ''}
${(s.temResumo) ? `<p style="margin: 0; font-size: 14px; line-height: 1.6; color: #2F3238">${h(s.resumo)}</p>` : ''}
<span style="font-size: 13px; line-height: 1.5; color: #50545C">${h(s.info)}</span>
${(s.temCapa) ? `
<button type="button" data-on-click="${on(s.baixar)}" style="align-self: flex-start; background: #FFFFFF; color: #14213D; border: 1px solid #14213D; font: inherit; font-size: 13px; font-weight: 700; padding: 10px 14px; border-radius: 2px; cursor: pointer">Baixar PDF</button>
<span role="status" style="font-size: 12px; color: #50545C; min-height: 1em">${h(s.status)}</span>
` : ''}
</div>
`).join('')}
</section>

<div style="background: #F5F6F8; border-top: 1px solid #E1E3E7">
<div style="max-width: 1200px; margin: 0 auto; padding: 20px 32px; font-size: 13px; font-weight: 600; color: #50545C">Modelo de página individual da obra</div>
</div>

<section id="obra" style="max-width: 1200px; margin: 0 auto; padding: 72px 32px 96px; display: flex; flex-wrap: wrap; gap: 72px">
<div style="flex: 1 1 300px; max-width: 360px; display: flex; flex-direction: column; gap: 24px">
<div style="aspect-ratio: 2 / 3; background: #14213D; box-shadow: 18px 18px 0 #B8BDC5; display: flex; flex-direction: column; justify-content: space-between; padding: 32px 28px; box-sizing: border-box; color: #FFFFFF">
<svg width="36" height="36" viewBox="0 0 164 164" aria-hidden="true"><path d="M0 0H164V164H64V131H132V33H0Z" fill="#D4D7DD"></path><path d="M0 71H100V100H36V164H0Z" fill="#FFFFFF"></path></svg>
<span style="font-family: Montserrat, 'Helvetica Neue', Arial, sans-serif; font-size: 28px; line-height: 1.2">Manual da Administração Judicial</span>
<span style="font-size: 12px; color: #D4D7DD">Em produção | capa ilustrativa</span>
</div>
<div style="display: flex; flex-direction: column; gap: 10px; padding-top: 16px">
<span style="font-size: 13px; font-weight: 700; color: #6D1F32">Em produção</span>
<p style="margin: 0; font-size: 15px; line-height: 1.6; color: #2F3238">Lançamento previsto para o 2º bimestre de 2027. Os canais de venda serão informados aqui no lançamento.</p>
<a href="contato.html" style="background: #14213D; color: #FFFFFF; text-decoration: none; font-weight: 700; font-size: 14px; padding: 14px 18px; border-radius: 2px">Quero ser avisado do lançamento</a>
</div>
</div>

<div style="flex: 999 1 520px; min-width: 0; max-width: 720px; display: flex; flex-direction: column; gap: 28px">
<span style="align-self: flex-start; font-size: 12px; font-weight: 700; color: #FFFFFF; background: #6D1F32; padding: 6px 10px; border-radius: 2px">Em produção | Lançamento previsto para o 2º bimestre de 2027</span>
<h2 style="margin: 0; font-family: Montserrat, 'Helvetica Neue', Arial, sans-serif; font-weight: 600; font-size: 48px; line-height: 1.1">Manual da Administração Judicial — Teoria e Prática</h2>
<dl style="margin: 0; display: grid; grid-template-columns: 140px minmax(0, 1fr); gap: 12px 20px; font-size: 15px; border-top: 1px solid #24262B; padding-top: 20px">
<dt style="color: #50545C">Autoria</dt><dd style="margin: 0">Filipe Denki Belém Pacheco [e coautores, se houver]</dd>
<dt style="color: #50545C">Editora</dt><dd style="margin: 0">[a informar]</dd>
<dt style="color: #50545C">Situação</dt><dd style="margin: 0">Em produção | lançamento previsto para o 2º bimestre de 2027</dd>
<dt style="color: #50545C">ISBN</dt><dd style="margin: 0">[a informar]</dd>
<dt style="color: #50545C">Páginas</dt><dd style="margin: 0">[a informar]</dd>
</dl>
<div style="display: flex; flex-direction: column; gap: 12px">
<h3 style="margin: 0; font-family: Montserrat, 'Helvetica Neue', Arial, sans-serif; font-weight: 600; font-size: 26px">Sinopse</h3>
<p style="margin: 0; font-size: 17px; line-height: 1.8; color: #2F3238">[Sinopse oficial, fornecida pelo autor ou pela editora.]</p>
</div>
<div style="display: flex; flex-direction: column; gap: 8px">
<button type="button" data-on-click="${on(toggleToc)}"${attr("aria-expanded", toc)} style="display: flex; justify-content: space-between; align-items: center; background: #FFFFFF; border: 0; border-top: 1px solid #24262B; border-bottom: 1px solid #E1E3E7; padding: 18px 0; font: inherit; font-family: Montserrat, 'Helvetica Neue', Arial, sans-serif; font-size: 26px; color: #24262B; cursor: pointer; text-align: left">Sumário <span style="font-family: Montserrat, sans-serif; font-size: 14px; color: #14213D">${h(tocLabel)}</span></button>
${(toc) ? `
<ol style="margin: 0; padding: 8px 0 8px 22px; font-size: 16px; line-height: 2; color: #2F3238"><li>[Capítulo — exibido somente com autorização]</li><li>[Capítulo]</li><li>[Capítulo]</li></ol>
` : ''}
</div>
<div style="background: #F5F6F8; padding: 24px; display: flex; flex-direction: column; gap: 10px">
<span style="font-size: 13px; font-weight: 700; color: #50545C">Como citar</span>
<p style="margin: 0; font-size: 15px; line-height: 1.6">PACHECO, Filipe Denki Belém. <strong>Manual da Administração Judicial</strong>: teoria e prática. [Local]: [Editora], no prelo (lançamento previsto para 2027).</p>
</div>
<div style="display: flex; flex-direction: column; gap: 12px">
<h3 style="margin: 0; font-family: Montserrat, 'Helvetica Neue', Arial, sans-serif; font-weight: 600; font-size: 26px">Relacionados</h3>
<p style="margin: 0; font-size: 15px; color: #50545C">Lançamentos, palestras e entrevistas sobre a obra aparecem aqui automaticamente quando vinculados no painel.</p>
<div style="display: flex; flex-wrap: wrap; gap: 10px"><a href="eventos.html" style="font-size: 14px; font-weight: 600">[Lançamento — evento]</a><a href="videos.html" style="font-size: 14px; font-weight: 600">[Entrevista sobre o livro]</a></div>
</div>
</div>
</section>

<footer style="background: #0F1930; color: #B8BDC5; font-size: 13px">
<div style="max-width: 1200px; margin: 0 auto; padding: 32px; display: flex; flex-wrap: wrap; justify-content: space-between; gap: 16px"><span>Filipe Denki | filipedenki.com.br</span><a href="contato.html" style="color: #FFFFFF">Contato e política de privacidade</a></div>
</footer>
</div>
</div>`;
}

DC.mount(Component, render, document.getElementById('app'));
