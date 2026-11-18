// Página: Eventos e atividades (eventos.html)
// Dados e lógica da página (editáveis) + função render(), que monta o HTML em JS puro.
// Depende de js/dc.js.

class Component extends DCLogic {
  constructor(p) { super(p); this.state = { tab: 'past' }; }
  renderVals() {
    const E = [
      { ano: '2026', data: '21 out. 2026, 19h', papel: 'Docência | Participação especial', evento: 'Curso de Extensão Reestruturação de Empresas e do Agronegócio — Unisinos', tema: 'Aula 12 “Recuperação judicial do produtor rural: estratégias de negociação, formação de quórum e aprovação do plano”, com Raoni Sales', local: 'Porto Alegre/RS, formato híbrido com transmissão on-line síncrona' },
      { ano: '2026', data: '21 out. 2026, 16h', papel: 'Palestrante', evento: 'Projeto Trilhas do Conhecimento — CRCGO (live)', tema: 'Tema “Recuperação Judicial, Extrajudicial e Falência: entendendo a Lei nº 11.101/05 e o papel do contador”, com Raoni Sales de Barros; mediação de Francisco de Assis de Lima e Bruno da Silva Lima', local: 'Conselho Regional de Contabilidade de Goiás (CRCGO), on-line' },
      { ano: '2026', data: '14 ago. 2026, 9h', papel: 'Palestrante', evento: '4º Congresso de Direito Empresarial do Distrito Federal (CODE)', tema: 'Painel “RJ de Produtor Rural: Atualidades”, presidido por Manoel Justino Bezerra Filho, com Washington Pimentel Jr. e Juliana Biolchi', local: 'Sala Juca Chaves, Brasil 21 Cultural, Brasília/DF' },
      { ano: '2026', data: '18 jun. 2026, 14h', papel: 'Palestrante', evento: 'Congresso Centro-Oeste de Direito Comercial — IDECO 2026', tema: 'Painel “Crise do Produtor Rural” (Recuperação Judicial e Agronegócio), com João Medeiros, João Pedro Scalzilli e Paola Fernandes', local: 'Auditório Salão K, K Hotel | Instituto de Direito Empresarial do Centro-Oeste (IDECO)' },
      { ano: '2026', data: '11 e 12 jun. 2026', papel: 'Palestrante', evento: '8º Congresso Nacional de Insolvência Empresarial — IBAJUD', tema: 'Painel sobre recuperação judicial de produtor rural', local: 'Bendito Cacao Resort, Campos do Jordão/SP | Instituto Brasileiro da Insolvência (IBAJUD)' },
      { ano: '2026', data: '22 mai. 2026', papel: 'Palestrante', evento: 'Ciclo de Debates Goiânia — TMA Brasil', tema: 'Painel “Agronegócio em Crise: Desafios e Soluções no Centro-Oeste”', local: 'Oft Alfre Hotels, Goiânia | Turnaround Management Association do Brasil (TMA Brasil)' },
      { ano: '2026', data: '12 mar. 2026, 13h30', papel: 'Palestrante', evento: 'Hora do Agro — OAB Sinop', tema: 'Bate-papo “Riscos sistêmicos da RJ para o agronegócio”, com Wander Neto', local: 'OAB/MT 6ª Subseção (Sinop) e CAAMT, Teams' },
      { ano: '2026', data: '11 mar. 2026, 18h30', papel: 'Palestrante', evento: 'Bate-papo do Agro — Sindicato Rural de Jataí e OAB Jataí', tema: '“RJ para produtores rurais: verdades e mitos”, com Evandro Vilela Barros e Thiago Castelliano', local: 'Auditório CCAJ, Jataí/GO' },
      { ano: '2026', data: '6 mar. 2026', papel: 'Palestrante', evento: '1º Encontro de Insolvência Empresarial da OAB Goiás', tema: 'Painel 4 “A função social e os desafios do administrador judicial”, sobre a administração judicial na RJ do produtor rural, com Larissa Bareato, Raoni Sales e Eduardo Benini', local: 'OAB Goiás e Comissão Especial de Recuperação de Empresas e Falência, Goiânia/GO' },
      { ano: '2025', data: '6 nov. 2025', papel: 'Participante', evento: 'XVII Congresso TMA Brasil', tema: 'Presença da Veritas Administração Judicial', local: 'São Paulo/SP' },
      { ano: '2025', data: '28 out. 2025, 14h', papel: 'Mediador', evento: 'Superando Desafios Empresariais — ACIEG', tema: 'Painel 1 “Cenário econômico atual e perspectivas futuras”, com Will Teixeira e Pedro Batista', local: 'ACIEG, Goiânia/GO' },
      { ano: '2025', data: '1º out. 2025, 11h', papel: 'Convidado', evento: 'Podcast Nosso Direito — Rádio XYZ', tema: '“Alta dos pedidos de recuperação judicial no agronegócio no 2º trimestre de 2025”, com Raoni Sales; apresentação de Pedro Neto', local: 'Rádio XYZ, ao vivo' },
      { ano: '2025', data: 'out. 2025', papel: 'Participante', evento: 'Curso de Reestruturação Empresarial na Columbia University — iniciativa TMA Brasil', tema: 'Chapter 11, Chapter 15 e visita à Bankruptcy Court de Nova York', local: 'Columbia University, Nova York/EUA' },
      { ano: '2025', data: '18 set. 2025, 19h', papel: 'Palestrante', evento: 'Reunião Ordinária da Comissão de Direito Empresarial da OAB/GO', tema: '“Desafios e oportunidades na recuperação judicial”', local: 'Sede da OAB/GO, Goiânia/GO' },
      { ano: '2025', data: '19 jul. 2025, 9h', papel: 'Palestrante', evento: 'Imersão ao vivo — EFAE', tema: '“SAF e recuperação judicial de clubes de futebol”', local: 'Escola de Formação em Advocacia Empresarial (EFAE)' },
      { ano: '2025', data: '10 jun. 2025, 19h', papel: 'Convidado', evento: 'Conflitos Societários na Prática', tema: '“Os conflitos societários como obstáculo à recuperação judicial: limites da autonomia privada e intervenção judicial na gestão da empresa em crise”, a convite de Leonardo Honorato Costa', local: 'On-line' },
      { ano: '2025', data: '22 abr. 2025, 19h', papel: 'Palestrante', evento: 'Reunião da Comissão Especial de Recuperação Judicial e Falência (CEREF) da OAB/GO', tema: '“O crédito das cooperativas na recuperação judicial”', local: 'OAB/GO, Setor Marista, Goiânia/GO' },
      { ano: '2025', data: '10 mar. 2025, 19h30', papel: 'Palestrante', evento: 'Mesa redonda “O impacto das recuperações judiciais na economia brasileira”', tema: 'Com André Aidar', local: 'IFL Goiânia e LED, Auditório do Sindiposto, Goiânia/GO' },
      { ano: '2025', data: '27 fev. 2025, 11h', papel: 'Debatedor', evento: 'Ciclo de Debates Goiânia — TMA Brasil', tema: '“RJ no agronegócio”, com Alvaro Mariano e Bruna Corrêa Fonseca; moderação de Renato Buranello', local: 'TMA Brasil, Goiânia/GO' },
      { ano: '2024', data: '8 nov. 2024', papel: 'Palestrante', evento: '1º Seminário IBDEE de Compliance e Ética Empresarial no Agronegócio', tema: '—', local: 'Auditório do Ed. Euro Working Concept, Goiânia/GO' },
      { ano: '2024', data: '6 nov. 2024', papel: 'Palestrante', evento: '2º Seminário de Transação Tributária e Special Situations — IEAD', tema: '—', local: 'Oft Alfre Hotel, Goiânia/GO' },
      { ano: '2024', data: '24 e 25 out. 2024', papel: 'Participante', evento: 'XVI Congresso TMA Brasil de Reestruturação e Recuperação de Empresas', tema: '—', local: 'Grand Hyatt São Paulo/SP' },
      { ano: '2024', data: '22 out. 2024, 18h20', papel: 'Debatedor', evento: '1º Congresso Brasileiro de Recuperação Extrajudicial', tema: 'Painel “Alienação de ativos, interesse dos credores e crédito tributário”, com Clara Moreira Azzoni, Liliane Midori Yshiba Michels, Gabriel Penna Gomes e Paulo Furtado; moderação de Juliana Biolchi', local: 'On-line' },
      { ano: '2024', data: '26 set. 2024, 9h', papel: 'Debatedor', evento: 'Café Agro online — TMA Brasil', tema: '“Créditos sujeitos e excluídos da RJ do produtor rural: jurisprudência atual”, com André Rocha e Priscila Camargo; moderação de Luiz Gustavo Bacelar', local: 'TMA Brasil, on-line' },
      { ano: '2024', data: '12 e 13 set. 2024', papel: 'Palestrante', evento: '6º Congresso de Direito Empresarial do Centro-Oeste', tema: 'Painel “Recuperação Judicial e Agronegócio: Reestruturação do Produtor Rural”, com Andrea Greco, Ivo Waisberg e Marcelo Sacramone', local: 'Auditório da OAB-GO, Goiânia/GO' },
      { ano: '2024', data: '4 set. 2024, 17h', papel: 'Palestrante', evento: 'Mesa redonda Recuperação Judicial, Extrajudicial e Falências — ESMAL', tema: '“Recuperação judicial de produtor rural”', local: 'Escola Superior da Magistratura do Estado de Alagoas (ESMAL), on-line' },
      { ano: '2024', data: '22 e 23 ago. 2024', papel: 'Palestrante', evento: 'VI Congresso Nacional de Direito Agrário — UBAU Talks', tema: 'Painel sobre a recuperação judicial do produtor rural, com Moacyr Ribeiro e Heráclito', local: 'UBAU, Goiânia/GO' },
      { ano: '2024', data: '21 ago. 2024, 16h', papel: 'Palestrante', evento: 'Conferência Estadual de Direito & Agronegócio da OAB/SP', tema: '“Financiamento do produtor rural em recuperação judicial”', local: 'OAB/SP, Ribeirão Preto/SP' },
      { ano: '2024', data: '30 jul. 2024, 19h', papel: 'Palestrante', evento: 'Aula magna do MBA em Recuperação de Empresas com ênfase em Recuperação de Créditos — EBPÓS', tema: 'Com Henrique Dantas', local: 'EBPÓS, Zoom' },
      { ano: '2024', data: '28 mai. 2024, 9h', papel: 'Debatedor', evento: 'Recuperação Judicial e Agronegócio — OAB Maringá', tema: 'Com Fabio S. Pinto e Breno Miranda; moderação de Alan Mincache e Henrique Ricci', local: 'Comissão de Recuperação de Empresas e Falências da OAB Maringá/PR (híbrido)' },
      { ano: '2024', data: 'mai. 2024', papel: 'Organizador e mediador', evento: '1º Seminário de Insolvência Empresarial — IBAJUD, ESMEG e ESA-GO', tema: 'Painel 1 sobre o tratamento da crise do produtor rural, com Ivo Waisberg, Marco Medeiros, Odair Moraes Jr. e outros', local: 'ESMEG, Goiânia/GO' },
      { ano: '2024', data: '25 mar. 2024, 9h', papel: 'Debatedor', evento: 'Seminário Goiânia — TMA Brasil', tema: '“Perspectivas jurídicas do agronegócio”, com Thiago Soares Castelliano, Priscila Camargo e Renato Buranello; moderação de Luiz Gustavo Bacelar', local: 'TMA Brasil, na ACIEG, Goiânia/GO' },
      { ano: '2024', data: '7 e 8 mar. 2024', papel: 'Palestrante', evento: '5ª International Insolvency Law Conference', tema: 'Painel “Recuperação judicial do produtor rural”, com Rafaela Parra, Saul Tourinho, Rebeca Drummond e Pollyanna Krüger', local: 'Juristas, Brasília/DF' },
      { ano: '2023', data: '11 dez. 2023', papel: 'Palestrante', evento: 'Seminário Agronegócio — Soluções financeiras e tributárias no momento de crise', tema: 'Painel 02 “Recuperação judicial do produtor rural: alternativa de financiamento e reestruturação”', local: 'Comissão Especial de Direito do Agronegócio da OAB-GO, Goiânia/GO' },
      { ano: '2023', data: '28 nov. 2023, 9h', papel: 'Moderador', evento: 'Solução em Foco — TMA Brasil', tema: '“Tratamento da crise do produtor rural”, com Ana Paula (Itaú Unibanco), Cidinaldo Boschini e Priscila Camargo; relatoria de Caroline Fortes Lacerda', local: 'TMA Brasil, on-line' },
      { ano: '2023', data: '13 nov. 2023, 19h', papel: 'Palestrante', evento: 'Palestra on-line “Cenário econômico e os desafios empresariais” — IPOG', tema: 'A importância do direito dos negócios para as empresas, com Rafael Brasil e Henrique Esteves', local: 'IPOG, Zoom' },
      { ano: '2023', data: '26 e 27 out. 2023', papel: 'Palestrante', evento: '5º Congresso de Direito Empresarial do Centro-Oeste', tema: '—', local: 'Auditório da OAB-GO, Goiânia/GO' },
      { ano: '2023', data: '26 set. 2023, 19h', papel: 'Expositor', evento: 'Reunião Ordinária Conjunta da Comissão de Direito Empresarial e da Comissão Especial de Recuperação de Empresas e Falência da OAB/GO', tema: '“A transformação do produtor rural em empresário rural e a recuperação judicial como instrumento de superação da crise no agronegócio”, com Murillo Lobo e Paulo Henrique', local: 'Sede da OAB/GO, Goiânia/GO (híbrida)' },
      { ano: '2023', data: '12 set. 2023', papel: 'Palestrante', evento: 'Semana Acadêmica do Curso de Direito — Faculdade ESUP', tema: '“As recuperações judiciais e seus reflexos na atividade econômica”', local: 'Faculdade ESUP, Goiânia/GO' },
      { ano: '2023', data: '31 ago. 2023, 9h50', papel: 'Palestrante', evento: '3º Congresso de Insolvência Empresarial da OAB Ribeirão Preto', tema: 'Painel “Desafios da recuperação judicial no agronegócio”, com Manoel Justino Bezerra Filho e Giovana Farenzena; presidência de Alexandre Nuti e moderação de Aluísio Miele', local: 'Wyndham Garden Ribeirão Preto Convention/SP' },
      { ano: '2023', data: '25 mai. 2023', papel: 'Palestrante', evento: 'Workshop “A fraude contra credores pela ótica do direito civil e empresarial”', tema: 'Com Bruna Corrêa e Lucas Medeiros', local: 'UniAraguaia Bueno, Goiânia/GO' },
      { ano: '2023', data: '4 mai. 2023, 14h', papel: 'Mediador', evento: 'V Congresso de Reestruturação e Recuperação Empresarial — MT', tema: '5º painel “Insolvência em números”, com Marcelo Guedes Nunes e Marcelo Sacramone; presidência de mesa de Gabriela Campostrini', local: 'Malai Manso Resort/MT, OAB/MT' },
      { ano: '2022', data: '8 dez. 2022, 13h30', papel: 'Palestrante', evento: 'Perspectivas Econômicas e Jurídicas para 2023', tema: '—', local: 'Sede da OAB-GO, com ACIEG, SEBRAE e ESA-GO, Goiânia/GO' },
      { ano: '2022', data: '17 e 18 nov. 2022', papel: 'Palestrante', evento: '4º Congresso de Direito Empresarial do Centro-Oeste', tema: 'Painel de encerramento sobre a interseção entre o direito societário e o direito da insolvência', local: 'Auditório da OAB-GO, Goiânia/GO' },
      { ano: '2022', data: '27 out. 2022, 19h', papel: 'Palestrante', evento: '30ª Reunião da 45ª Diretoria da ACIEG', tema: '“Como será o cenário para as fusões e aquisições em 2023?”, com Murilo Résio', local: 'Sede da ACIEG, Goiânia/GO' },
      { ano: '2022', data: '16 ago. 2022, 9h', papel: 'Palestrante', evento: 'Reunião aberta da Comissão de Estudos em Recuperação Judicial e Falências da OAB Ribeirão Preto', tema: '“Recuperação judicial do produtor rural sob o enfoque da jurimetria”', local: '12ª Subseção da OAB/SP (Ribeirão Preto), Teams' },
      { ano: '2022', data: '23 jun. 2022', papel: 'Moderador', evento: '1 ano da Reforma da Lei de Recuperação de Empresas e Falência — GPAI', tema: 'Painel “Venda de ativos na falência”, com Paulo Campos Salles de Toledo, Moacyr Lobato de Campos Filho, Maria Rita Rebello Pinho Dias e Eduardo Azuma Nishi', local: 'Grupo Permanente de Aperfeiçoamento da Insolvência (GPAI), com apoio da AASP, on-line' },
      { ano: '2022', data: '17 mai. 2022, 19h30', papel: 'Palestrante', evento: 'IEAD Live — Núcleo de Direito Empresarial', tema: '“Tudo sobre recuperação extrajudicial e negociação antecedente”', local: 'Instituto de Estudos Avançados em Direito (IEAD), Zoom' },
      { ano: '2022', data: '28 e 29 mar. 2022', papel: 'Palestrante', evento: '1º Congresso Brasileiro de Inovação Empresarial e Gestão Inteligente', tema: '—', local: 'Palácio Araguaia, Palmas/TO' },
      { ano: '2021', data: '1º dez. 2021, 18h', papel: 'Organizador e palestrante', evento: 'Seminário de Mediação e Arbitragem Empresarial da OAB/GO', tema: 'Com Marcello Perino, Samantha Longo, Lívia Gavioli Machado, Alessandra Bonilha, Fabiane Vinhal Pereira e outros', local: 'Comissão Especial de Recuperação de Empresas e Falência da OAB/GO, on-line' },
      { ano: '2021', data: '24 nov. 2021, 18h', papel: 'Palestrante convidado', evento: 'Live Mediação em Debate — IEAD', tema: '“Como atuar em mediação empresarial”, com Ana Lívia Carvalho; moderação de Bruna Fetz e Thais Borges', local: 'Instituto de Estudos Avançados em Direito (IEAD), YouTube' },
      { ano: '2021', data: '11 nov. 2021, 18h (MT)', papel: 'Palestrante', evento: 'Webinar Direito em Debate — UNIC Beira Rio', tema: '“Novos desafios e oportunidades da advocacia empresarial e insolvência”; organização de Marco Antonio Lorga e debate com Robson Silva Salustiano', local: 'Universidade de Cuiabá (UNIC Beira Rio), on-line' },
      { ano: '2021', data: '9 nov. 2021, 17h40', papel: 'Mediador', evento: 'II Simpósio Nacional CAMES de Mediação e Arbitragem', tema: 'Painel “Mediação na recuperação de empresas”, com Alessandra Bonilha e Luiz Fernando Paiva', local: 'Câmara de Arbitragem e Mediação Especializada (CAMES)' },
      { ano: '2021', data: '3 nov. 2021, 8h30', papel: 'Palestrante convidado', evento: 'Aula on-line no curso de Direito da UniAraguaia', tema: '“O papel do administrador judicial nos processos de recuperação judicial e falência”, a convite de Henrique Esteves', local: 'UniAraguaia, on-line' },
      { ano: '2021', data: '28 out. 2021, 19h', papel: 'Organizador e palestrante', evento: 'Seminário “A recuperação judicial de produtor rural sob o enfoque jurimétrico”', tema: 'Com Marcelo Guedes Nunes, Marcelo Sacramone, Geraldo Fonseca, José A. Leirião Filho, Aluísio Miele, Ana Lívia Carvalho Silva e Bruno Henrique Rosa', local: 'Comissão Especial de Recuperação de Empresas e Falência da OAB-GO e ESA-GO, on-line' },
      { ano: '2021', data: '29 set. 2021, 10h', papel: 'Palestrante', evento: 'Live “Mediação na reestruturação empresarial” — ACIEG', tema: 'Com Larissa Junqueira', local: 'Associação Comercial, Industrial e de Serviços do Estado de Goiás (ACIEG), on-line' },
      { ano: '2021', data: '22 set. 2021, 16h30', papel: 'Palestrante', evento: 'Webinar Novo Marco Legal do Reempreendedorismo — Disposições finais', tema: 'Com Bruno Rezende, Jader Lemos Neto e Fernando Brandariz', local: 'AASP, IBRADEMP e IASP, on-line' },
      { ano: '2021', data: '24 ago. 2021', papel: 'Palestrante', evento: 'Webinar Migalhas — lançamento do Núcleo Especializado de Insolvência e Reestruturação Empresarial', tema: 'Palestra “A mediação e a arbitragem na insolvência empresarial”, com Carlos Alberto Vilela Sampaio, Lívia Gavioli Machado, Ana Lívia Carvalho e outros', local: 'On-line (Migalhas)' },
      { ano: '2021', data: '12 ago. 2021, 19h30', papel: 'Mediador', evento: 'II Webinar de Mediação da OAB-GO', tema: 'Painel “Mediação na recuperação de empresas”, com Adolfo Braga Neto e Magaly Palhares', local: 'OAB-GO e ESA-GO (Agosto é 11), on-line' },
      { ano: '2021', data: '11 ago. 2021, 11h15', papel: 'Palestrante', evento: 'III Simpósio Mato-grossense de Direito da Insolvência Empresarial', tema: 'Palestra “A habilitação do crédito trabalhista nos processos de insolvência”, com Pedro Ivo; presidência de mesa de Roberta Borges e mediação de Rafael Cisneiro Rodrigues', local: 'OAB/MT, ESA e CAAMT' },
      { ano: '2021', data: '30 jun. 2021, 18h30', papel: 'Debatedor', evento: 'Diálogos da Insolvência — IBAJUD', tema: '4º encontro “Dos novos deveres e funções do AJ na falência”, com mediação de Lívia Gavioli Machado e participação de Frederico Rezende, Maria Isabel Fontana e Fábio Pinto', local: 'Instituto Brasileiro da Insolvência (IBAJUD), on-line' },
      { ano: '2021', data: '25 jun. 2021, 20h', papel: 'Palestrante', evento: '1º Congresso CAAESM — Centro Acadêmico de Direito do IPOG', tema: 'Palestra “Recuperação judicial e falências”', local: 'IPOG Goiânia' },
      { ano: '2021', data: '23 e 24 jun. 2021', papel: 'Organizador e palestrante', evento: '1º Congresso de Recuperação de Empresas e Falência do Centro-Oeste', tema: 'Com Manoel Justino Bezerra Filho, Marcelo Sacramone, Ivo Waisberg, Daniel Carnio Costa, Min. Paulo Dias de Moura Ribeiro e outros', local: 'OAB/GO, OAB/MT e OAB/DF, on-line' },
      { ano: '2021', data: '16 jun. 2021, 14h30', papel: 'Palestrante', evento: 'Congresso Nacional sobre Recuperação Empresarial e Falência — Conselho Federal da OAB', tema: '4º painel “As novas funções do administrador judicial”', local: 'Comissão Especial de Falências e Recuperação Judicial do CFOAB, on-line' },
      { ano: '2021', data: '2 jun. 2021, 21h', papel: 'Palestrante', evento: 'Webinar “A nova recuperação judicial após a Lei 14.112” — UniEVANGÉLICA', tema: 'Mediação de Augusto Cesar Rocha Ventura', local: 'UniEVANGÉLICA, transmissão no YouTube' },
      { ano: '2021', data: '1º jun. 2021', papel: 'Palestrante', evento: 'Simpósio de Direito Empresarial “O Direito e a Reestruturação Empresarial” — PUC Goiás', tema: 'Palestra “Recuperação judicial como meio de estruturação empresarial”', local: 'Escola de Direito e Relações Internacionais da PUC Goiás (Circuito Ciência em Casa), on-line' },
      { ano: '2021', data: '28 mai. 2021, 19h10', papel: 'Palestrante', evento: 'XXIV Semana Jurídica da FAQUI', tema: 'Palestra “A nova lei de recuperação de empresas e falência”', local: 'Faculdade de Quirinópolis (FAQUI), em parceria com OAB e ESA-GO' },
      { ano: '2021', data: '27 mai. 2021, 18h', papel: 'Organizador e palestrante', evento: 'Seminário Aspectos Tributários da Recuperação Judicial e Falência', tema: 'Com Eléia Alvim, Cássio Cavalli, Luiz Trindade, João Bosco de Barros, Carlos Augusto Peixoto Reis e Frederico Medeiros', local: 'Comissão Especial de Recuperação de Empresas e Falência e Comissão de Direito Tributário da OAB/GO, com ESA-GO, on-line' },
      { ano: '2021', data: '18 a 20 mai. 2021', papel: 'Palestrante', evento: 'XXII Semana Jurídica Universo Goiânia', tema: 'Palestra “Desafios e oportunidades da advocacia empresarial e insolvência”', local: 'Universo Goiânia, com OAB-GO e ESA-GO, on-line' },
      { ano: '2021', data: '12 mai. 2021, 15h', papel: 'Palestrante', evento: 'Reunião virtual da FACIEG com as Associações Comerciais', tema: '“PLP 33: uma saída para as pequenas empresas em crise”, com Renato Scardoa e Thomaz Sant’Ana', local: 'Federação das Associações Comerciais, Industriais, Empresariais e Agropecuárias do Estado de Goiás (FACIEG), on-line' },
      { ano: '2021', data: '6 mai. 2021, 20h30', papel: 'Palestrante', evento: 'Live Recuperação Judicial em Tempo de Crise — Medialle Câmara de Mediação', tema: 'Métodos alternativos de solução de conflitos na recuperação judicial, com Larissa Junqueira Bareato e Sônia Caetano', local: 'On-line' },
      { ano: '2021', data: '29 abr. 2021, 8h', papel: 'Palestrante', evento: 'VI Encontro sobre Tendências do Direito Contemporâneo — FASAM', tema: 'Palestra “A nova Lei de Recuperação de Empresas e Falência”, com Wesley Paula Andrade', local: 'Faculdade Sul-Americana (FASAM), Goiânia/GO' },
      { ano: '2021', data: '2021', papel: 'Relator', evento: 'XIII Congresso TMA Brasil de Reestruturação e Recuperação de Empresas', tema: 'Relatoria do Keynote Speaker TWK', local: 'Grand Hyatt São Paulo' },
      { ano: '2020', data: '9 a 13 nov. 2020', papel: 'Abertura de painel', evento: 'XII Congresso TMA Brasil — Caminhos para a Retomada', tema: 'Painel “Regulamentação da atividade e novas funções do administrador judicial”', local: 'São Paulo, evento virtual' },
      { ano: '2020', data: '15 a 19 jun. 2020', papel: 'Presidente de mesa e debatedor', evento: 'Semana do Direito Empresarial — Instituto de Estudos Avançados em Direito (IEAD)', tema: 'Painel “Um balanço dos 15 anos da Lei de Recuperação de Empresas e Falência”', local: 'Evento virtual nacional' },
      { ano: '2019', data: '25 e 26 nov. 2019', papel: 'Participante', evento: 'XI Congresso TMA Brasil', tema: 'Reestruturação e recuperação de empresas', local: 'São Paulo' },
      { ano: '2019', data: '1º nov. 2019', papel: 'Palestrante', evento: 'Congresso do IEAD — Repensando o Direito: Temas Avançados de Direito Contemporâneo', tema: 'Palestra “Crimes falimentares”', local: 'Universidade Salgado de Oliveira (UNIVERSO), Goiânia' },
      { ano: '2019', data: '31 out. 2019', papel: 'Presidente de mesa', evento: '3º Congresso de Direito Empresarial do Centro-Oeste', tema: 'Painel “Recuperação judicial: tendências e discussões modernas”', local: 'OAB/GO e Escola Superior de Advocacia de Goiás, Goiânia' },
      { ano: '2019', data: '30 out. 2019', papel: 'Palestrante', evento: '1º Congresso de Direito Empresarial do Distrito Federal', tema: 'Palestra “Recuperação judicial de produtor rural”', local: 'OAB/DF, Brasília' },
      { ano: '2019', data: '28 jun. 2019', papel: 'Presidente de mesa', evento: '1º Encontro das Escolas da Magistratura e da Advocacia do Estado de Goiás — A recuperação judicial e seus aspectos polêmicos', tema: 'Painel “A atuação do Poder Judiciário na recuperação judicial”', local: 'ASMEGO/TJGO, Goiânia' },
      { ano: '2018', data: 'set. 2018', papel: 'Palestrante', evento: 'Fórum do Instituto de Estudos Avançados em Direito (IEAD)', tema: 'Palestra “A recuperação judicial como meio de superação da crise econômica”', local: 'Universidade Anhanguera, Goiânia' },
      { ano: '2018', data: '3 a 8 mai. 2018', papel: 'Palestrante', evento: 'II Congresso Jurídico — Interdisciplinaridade no Mundo Contemporâneo', tema: 'Palestra “Aspectos práticos da recuperação judicial”', local: 'Faculdade Raízes' },
      { ano: '2017', data: '1º e 2 jun. 2017', papel: 'Participante', evento: 'Congresso de Direito Empresarial do Centro-Oeste', tema: '', local: 'Escola Superior da Advocacia de Goiás e Associação dos Magistrados do Estado de Goiás, Goiânia' },
      { ano: '2016', data: '29 set. 2016', papel: 'Palestrante', evento: 'Dialogando o Direito Empresarial', tema: 'Palestra “Aspectos gerais da recuperação judicial”', local: 'Escola Superior da Advocacia de Goiás, Goiânia' },
      { ano: '2014', data: '19 e 20 ago. 2014', papel: 'Jurista convidado', evento: 'I Jornada Goiana de Direito Empresarial', tema: '', local: 'Escola Superior da Advocacia de Goiás, Goiânia' },
      { ano: 'Sem data', data: '[data a confirmar]', papel: 'Mediador e debatedor', evento: '1º Seminário de Direito Empresarial do Centro-Oeste', tema: 'Painéis “Alterações da recuperação judicial com a reforma da lei” e “A regulamentação e as novas funções do administrador judicial”', local: 'OAB/GO, Goiânia' },
      { ano: 'Sem data', data: '[data a confirmar]', papel: 'Moderador', evento: 'Mediação na recuperação — CAMES', tema: '“Questões práticas da mediação na recuperação judicial” e “Mediação na recuperação negocial antecedente e recuperação extrajudicial”, com Henrique Ávila, Alessandra Bonilha e Ana Lívia Carvalho; moderação com Lívia Gavioli', local: 'Câmara de Arbitragem e Mediação Especializada (CAMES)' },
      { ano: 'Sem data', data: '[data a confirmar], 19h', papel: 'Convidado especial', evento: 'Comissão de Direito Agrário da OAB/GO', tema: '“Recuperação judicial do produtor rural”', local: 'Sede da OAB/GO, Sala de Sessões I, e Zoom, Goiânia/GO' }
    ];
    const C = [
      { ano: '2026', papel: 'Participação especial', curso: 'Curso de Extensão Reestruturação de Empresas e do Agronegócio — Aula 12: Recuperação judicial do produtor rural', info: 'Universidade do Vale do Rio dos Sinos (Unisinos), Porto Alegre | com Raoni Sales' },
      { ano: '2025', papel: 'Coordenação e docência', curso: '6º Curso de Formação de Administradores Judiciais', info: 'ESMEG, com OAB e ESA-GO | coordenação com o juiz Guilherme Carreira | início em 31 mar. 2025 | 83 h/a | módulo “A recuperação judicial de produtor rural”' },
      { ano: '2025', papel: 'Docência', curso: 'Recuperação Judicial e Falência', info: 'Curso da ESA Goiás | 8 abr. 2025' },
      { ano: '2025', papel: 'Docência', curso: 'Módulo de falência e administração judicial', info: 'Pós-graduação em Direito Empresarial, Instituto Goiano de Direito (IGD) | módulo Administrador Judicial e Procedimento Falimentar' },
      { ano: '2025', papel: 'Docência', curso: 'Módulo de recuperação de empresas e falência', info: 'LLM Business Law: Direito, Gestão e Negócios, Instituto de Pós-Graduação (IPOG)' },
      { ano: '2025', papel: 'Docência', curso: 'MBA em Recuperação de Empresas com ênfase em Recuperação de Créditos', info: 'Escola Brasileira de Pós-Graduação (EBPÓS) | corpo docente' },
      { ano: '2024', papel: 'Docência', curso: '5º Curso de Formação de Administradores Judiciais e Aperfeiçoamento em Falência e Recuperação Judicial', info: 'ESMEG, com OAB e ESA-GO | Módulo Extra I: recuperação judicial de produtor rural (3 mai. 2024) e módulo “Plano de recuperação judicial para microempresas e EPP”' },
      { ano: '2024', papel: 'Docência', curso: 'A Prática da Administração Judicial', info: 'Instituto Brasileiro de Direito da Empresa (IBDE) | curso on-line a partir de 20 fev. 2024 | aula 5 (5 mar.): relatório de legalidade do plano, AGC e termo de adesão' },
      { ano: '2024', papel: 'Docência', curso: 'Módulo de recuperação judicial e falência', info: 'LLM Business Law, Instituto de Pós-Graduação (IPOG) | turma 2024' },
      { ano: '2023', papel: 'Coordenação e docência', curso: '4º Curso de Formação de Administradores Judiciais e Aperfeiçoamento em Falência e Recuperação Judicial', info: 'ESMEG, com OAB e ESA-GO | coordenação com o juiz Guilherme Carreira | início em 28 mar. 2023 | 80 h/a' },
      { ano: '2022', papel: 'Docência', curso: '3º Curso de Formação de Administrador Judicial', info: 'Com Daniel Carnio Costa, Marcelo Sacramone, Francisco Satiro, Marlon Tomazette e outros | ESMEG | Módulo V: a nova recuperação extrajudicial, as conciliações e mediações antecedentes ou incidentais (6 mai. 2022)' },
      { ano: '2022', papel: 'Docência', curso: 'Masterclass Imersão & Mentoria “Negociação na Recuperação Judicial”', info: 'Instituto Goiano de Direito (IGD) | 28 e 29 out. 2022 | com Marcelo Sacramone' },
      { ano: '2022', papel: 'Docência', curso: 'Curso de Recuperação Judicial, Extrajudicial e Falência', info: 'Centro Universitário FIG-UNIMESP | aula em 20 abr. 2022 sobre créditos sujeitos, recuperação extrajudicial e plano alternativo, com Fernando Pompeu Luccas' },
      { ano: '2022', papel: 'Docência', curso: 'Advogando na Recuperação Judicial', info: 'ESA-GO | 26 jan. 2022 | on-line' },
      { ano: '2021', papel: 'Docência', curso: 'Curso “Recuperação Judicial” — programa Saber Direito (cinco aulas)', info: 'TV Justiça, Supremo Tribunal Federal | aulas disponíveis no YouTube, na página Cursos' },
      { ano: '2021', papel: 'Docência', curso: 'A nova recuperação judicial', info: 'Curso de aperfeiçoamento' },
      { ano: '2021', papel: 'Docência', curso: 'Curso de Formação de Administradores Judiciais', info: 'Com Marcelo Sacramone, Daniel Carnio Costa, Sérgio Campinho e outros' },
      { ano: '2021', papel: 'Coordenação e docência', curso: '2º Curso de Formação de Administradores Judiciais e Aperfeiçoamento em Falência e Recuperação Judicial', info: 'ESMEG, com OAB e ESA-GO | coordenação com o juiz J. Leal de Sousa | início em 25 out. 2021 | 73 h/a' },
      { ano: '2021', papel: 'Docência', curso: 'Curso de Mediação e Negociação Empresarial e Trabalhista', info: 'Instituto LIS (Rede de Mediação LIS) | início em 29 nov. 2021 | 40 h/a | com Fabiane Vinhal e Thaynara Teleste' },
      { ano: '2021', papel: 'Docência', curso: 'Recuperação Judicial, Extrajudicial e Falência com Capacitação em Administração Judicial', info: 'Instituto Brasileiro de Direito da Empresa (IBDE) | a partir de 18 out. 2021 | 67 h' },
      { ano: '2021', papel: 'Docência', curso: 'Curso Aspectos Práticos da Nova Recuperação Judicial e Falência', info: 'ESA-GO (Agosto é 11) | 20 ago. 2021 | módulo de recuperação judicial; Flávio Cardoso no módulo de falência' },
      { ano: '2019', papel: 'Docência', curso: 'Advogando na recuperação judicial', info: 'Curso de aperfeiçoamento' },
      { ano: '2019', papel: 'Docência', curso: 'Workshop Propriedade Intelectual e Startups', info: 'Curso de aperfeiçoamento' },
      { ano: '2018', papel: 'Docência', curso: 'Aspectos práticos da recuperação judicial', info: 'Curso de aperfeiçoamento' },
      { ano: 'Sem data', papel: 'Docência', curso: 'Pós-graduação em Direito Empresarial — VERBO', info: 'Recuperação judicial com foco prático' }
    ];
    const group = (xs) => { const o = []; xs.forEach(x => { let g = o.find(y => y.ano === x.ano); if (!g) { g = { ano: x.ano, itens: [] }; o.push(g); } g.itens.push({ ...x, temTema: !!x.tema }); }); return o; };
    const anosOrd = (g) => g.sort((a, b) => (b.ano === 'Sem data' ? -1 : a.ano === 'Sem data' ? 1 : b.ano.localeCompare(a.ano)));
    const T = [['fut','Próximos eventos'],['past','Eventos realizados'],['cursos','Cursos ministrados']];
    const t = this.state.tab;
    const on = 'background: #FFFFFF; border: 0; border-bottom: 2px solid #14213D; color: #14213D; font-weight: 700; ';
    const off = 'background: #FFFFFF; border: 0; border-bottom: 2px solid transparent; color: #50545C; font-weight: 600; ';
    return {
      tabs: T.map(x => ({ label: x[1], sel: t === x[0] ? 'true' : 'false', pick: () => this.setState({ tab: x[0] }), style: 'font: inherit; font-size: 15px; padding: 14px 20px; margin-bottom: -1px; cursor: pointer; ' + (t === x[0] ? on : off) })),
      isFut: t === 'fut', isPast: t === 'past', isCursos: t === 'cursos',
      anos: anosOrd(group(E)), cursos: group(C)
    };
  }
}

function render(v) {
  var h = DC.h, attr = DC.attr, on = DC.on;
  var { tabs, isFut, isPast, isCursos, anos, cursos } = v;
  return `<div class="dc-page">

<div style="font-family: Montserrat, 'Helvetica Neue', Arial, sans-serif; color: #24262B; background: #FFFFFF; min-height: 100vh">

<header style="border-bottom: 1px solid #14213D; background: #14213D">
<div style="max-width: 1200px; margin: 0 auto; padding: 18px 32px; display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 16px">
<a href="../index.html" aria-label="Filipe Denki — início" style="display: flex; align-items: center; gap: 12px; text-decoration: none; color: #D4D7DD">
<img src="../public/img/logo-filipe-denki.png" alt="Filipe Denki" style="height: 44px; width: auto; display: block">
</a>
<nav aria-label="Principal" style="display: flex; flex-wrap: wrap; gap: 26px; font-size: 14px; font-weight: 600">
<a href="../index.html" style="color: #D4D7DD; text-decoration: none; padding: 6px 0">Início</a>
<a href="sobre.html" style="color: #D4D7DD; text-decoration: none; padding: 6px 0">Sobre mim</a>
<a href="publicacoes.html" style="color: #D4D7DD; text-decoration: none; padding: 6px 0">Publicações</a>
<a href="livros.html" style="color: #D4D7DD; text-decoration: none; padding: 6px 0">Livros</a>
<a href="cursos.html" style="color: #D4D7DD; text-decoration: none; padding: 6px 0">Cursos</a>
<a href="videos.html" style="color: #D4D7DD; text-decoration: none; padding: 6px 0">Vídeos</a>
<a href="imprensa.html" style="color: #D4D7DD; text-decoration: none; padding: 6px 0">Imprensa</a>
<a href="eventos.html" aria-current="page" style="color: #FFFFFF; text-decoration: none; padding: 6px 0; border-bottom: 2px solid #FFFFFF">Eventos</a>
<a href="contato.html" style="color: #D4D7DD; text-decoration: none; padding: 6px 0">Contato</a>
</nav>
</div>
</header>

<section style="max-width: 1200px; margin: 0 auto; padding: 80px 32px 32px; display: flex; flex-direction: column; gap: 20px">
<h1 style="margin: 0; font-family: Montserrat, 'Helvetica Neue', Arial, sans-serif; font-weight: 600; font-size: clamp(44px, 5.5vw, 72px); line-height: 1.04">Eventos e atividades acadêmicas</h1>
<p style="margin: 0; max-width: 40em; font-size: 17px; line-height: 1.7; color: #50545C">Congressos, seminários e fóruns em que participei como palestrante, presidente de mesa ou debatedor, e cursos que ministrei ou coordenei.</p>
<div role="tablist" aria-label="Seção" style="display: flex; flex-wrap: wrap; border-bottom: 1px solid #E1E3E7; margin-top: 16px">
${(tabs || []).map((t, i14) => `
<button type="button" role="tab"${attr("aria-selected", t.sel)} data-on-click="${on(t.pick)}"${attr("style", t.style)}>${h(t.label)}</button>
`).join('')}
</div>
</section>

<section style="max-width: 1200px; margin: 0 auto; padding: 8px 32px 96px">
${(isFut) ? `
<div style="padding: 40px 0; display: flex; flex-direction: column; gap: 14px; align-items: flex-start">
<div style="width: 100%; display: grid; grid-template-columns: 140px minmax(0, 1fr); gap: 8px 40px; padding-bottom: 28px; border-bottom: 1px solid #E1E3E7">
<h2 style="margin: 0; font-family: Montserrat, 'Helvetica Neue', Arial, sans-serif; font-weight: 600; font-size: 40px; line-height: 1; color: #14213D">2026</h2>
<div style="display: flex; flex-direction: column; gap: 6px">
<span style="display: flex; flex-wrap: wrap; gap: 6px 16px; font-size: 13px"><strong style="font-weight: 700; color: #6D1F32">Mentoria</strong><span style="color: #50545C">21 out., 28 out. e 11 nov. 2026</span></span>
<h3 style="margin: 0; font-family: Montserrat, 'Helvetica Neue', Arial, sans-serif; font-weight: 600; font-size: 22px; line-height: 1.3">Projeto Mentoria OAB-GO — 4ª edição</h3>
<p style="margin: 0; font-size: 15px; line-height: 1.6; color: #24262B">Mentor na área de Direito Empresarial. Tema dos encontros: a prática no Direito Empresarial.</p>
<span style="font-size: 14px; color: #50545C">Local: STG Law | <a href="https://share.google/nIhSR71PXWOltEgEd" target="_blank" rel="noopener">Ver no mapa</a></span>
<span style="font-size: 14px; color: #50545C">Comissão da Advocacia Jovem (CAJ) da OAB-GO | Certificação ESA-GO</span>
<dl style="margin: 6px 0 0; display: grid; grid-template-columns: 112px minmax(0, 1fr); gap: 8px 14px; font-size: 14px; line-height: 1.5">
<dt style="font-weight: 600; color: #50545C">21 out. 2026</dt><dd style="margin: 0; color: #50545C">17h às 19h | Realizado</dd>
<dt style="font-weight: 600">28 out. 2026</dt><dd style="margin: 0">17h às 19h</dd>
<dt style="font-weight: 600">11 nov. 2026</dt><dd style="margin: 0">18h30 às 20h30</dd>
</dl>
<a href="https://www.oabgo.org.br/oab-go-lanca-4a-edicao-do-projeto-mentoria-e-abre-inscricoes-para-mentores/" target="_blank" rel="noopener" style="font-size: 14px; font-weight: 700; padding-top: 4px">Sobre o projeto na OAB-GO</a>
</div>
<div style="grid-column: 2; border-top: 1px solid #E1E3E7; padding-top: 28px; display: flex; flex-direction: column; gap: 6px">
<span style="display: flex; flex-wrap: wrap; gap: 6px 16px; font-size: 13px"><strong style="font-weight: 700; color: #6D1F32">Docência</strong><span style="color: #50545C">29 out. 2026 | 19h às 22h</span></span>
<h3 style="margin: 0; font-family: Montserrat, 'Helvetica Neue', Arial, sans-serif; font-weight: 600; font-size: 22px; line-height: 1.3">7º Curso de Formação de Administradores Judiciais</h3>
<p style="margin: 0; font-size: 15px; line-height: 1.6; color: #24262B">Aula “Recuperação judicial de produtor rural”</p>
<span style="font-size: 14px; color: #50545C">Escola Superior da Magistratura do Estado de Goiás (ESMEG)</span>
<a href="https://esmeg.org.br/cursos/6-curso-de-formacao-de-administradores-judiciais-e-aperfeicoamento-em-falencia-e-recuperacao-judicial-copy/" target="_blank" rel="noopener" style="font-size: 14px; font-weight: 700; padding-top: 4px">Página do curso na ESMEG</a>
</div>
<div style="grid-column: 2; border-top: 1px solid #E1E3E7; padding-top: 28px; display: flex; flex-direction: column; gap: 6px">
<span style="display: flex; flex-wrap: wrap; gap: 6px 16px; font-size: 13px"><strong style="font-weight: 700; color: #6D1F32">Palestrante</strong><span style="color: #50545C">12 nov. 2026 | 13h45 às 15h</span></span>
<h3 style="margin: 0; font-family: Montserrat, 'Helvetica Neue', Arial, sans-serif; font-weight: 600; font-size: 22px; line-height: 1.3">8º Congresso de Direito Empresarial do Centro-Oeste</h3>
<p style="margin: 0; font-size: 15px; line-height: 1.6; color: #24262B">Painel “Reestruturação pré-insolvencial: standstill, renegociação privada e o uso estratégico da recuperação extrajudicial”</p>
<span style="font-size: 14px; color: #50545C">Auditório Principal, Centro de Convenções de Anápolis | Congresso de 12 e 13 nov. 2026</span>
<span style="font-size: 14px; color: #50545C">Realização: OAB/GO, CASAG/GO, ESA/GO, Comissão de Direito Empresarial e OAB Anápolis</span>
<a href="https://esa.oabgo.org.br/cursos/3573-8-congresso-de-direito-empresarial-do-centro-oeste/" target="_blank" rel="noopener" style="font-size: 14px; font-weight: 700; padding-top: 4px">Programação e inscrições na ESA-GO</a>
</div>
<div style="grid-column: 2; border-top: 1px solid #E1E3E7; padding-top: 28px; display: flex; flex-direction: column; gap: 6px">
<span style="display: flex; flex-wrap: wrap; gap: 6px 16px; font-size: 13px"><strong style="font-weight: 700; color: #6D1F32">Lançamento de livro</strong><span style="color: #50545C">23 nov. 2026 | 18h às 22h</span></span>
<h3 style="margin: 0; font-family: Montserrat, 'Helvetica Neue', Arial, sans-serif; font-weight: 600; font-size: 22px; line-height: 1.3">Agro em Debate: Crise, Crédito e Recuperação no Campo – Seminário e Lançamento de Livros</h3>
<span style="font-size: 14px; color: #50545C">Sicoob UniCentro | Organização: IGD – Instituto Goiano de Direito</span>
<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 32px; padding-top: 18px">
<div style="display: flex; flex-direction: column; gap: 10px">
<h4 style="margin: 0; font-size: 15px; font-weight: 700; color: #14213D">Programação</h4>
<dl style="margin: 0; display: grid; grid-template-columns: 112px minmax(0, 1fr); gap: 10px 14px; font-size: 14px; line-height: 1.5">
<dt style="font-weight: 600">18h às 19h30</dt><dd style="margin: 0">Sessão de autógrafos, fotos e coquetel</dd>
<dt style="font-weight: 600">19h30 às 20h30</dt><dd style="margin: 0">Apresentação das obras pelos autores e palestra do Prof. Marcelo Sacramone</dd>
<dt style="font-weight: 600">20h30 às 21h30</dt><dd style="margin: 0">Continuação do coquetel</dd>
</dl>
</div>
<div style="display: flex; flex-direction: column; gap: 16px">
<h4 style="margin: 0; font-size: 15px; font-weight: 700; color: #14213D">Livros</h4>
<div style="display: flex; gap: 16px; align-items: flex-start">
<img src="../public/livros/capas/rj-produtor-rural.jpg" alt="Capa do livro A Recuperação Judicial de Produtor Rural" style="flex: 0 0 84px; width: 84px; height: auto; display: block">
<div style="display: flex; flex-direction: column; gap: 4px"><span style="font-size: 12px; font-weight: 700; color: #6D1F32">Livro 1</span><strong style="font-size: 16px; font-weight: 600; line-height: 1.4">A Recuperação Judicial de Produtor Rural: entre a retórica da inclusão e a prática da exclusão de créditos</strong><span style="font-size: 14px; color: #50545C">Filipe Denki Belem Pacheco | Ed. Lumen Juris | Prefácio de Marcelo Sacramone</span></div>
</div>
<div style="display: flex; gap: 16px; align-items: flex-start">
<div aria-hidden="true" style="flex: 0 0 84px; aspect-ratio: 2 / 3; background: #14213D; color: #D4D7DD; display: flex; align-items: center; justify-content: center; font-size: 11px; font-weight: 600">[Capa]</div>
<div style="display: flex; flex-direction: column; gap: 4px"><span style="font-size: 12px; font-weight: 700; color: #6D1F32">Livro 2</span><strong style="font-size: 16px; font-weight: 600; line-height: 1.4">Direito do Agronegócio: Temas Práticos e Teóricos – Volume 4</strong><span style="font-size: 14px; color: #50545C">Ed. Dialética</span></div>
</div>
</div>
</div>
<h4 style="margin: 0; padding-top: 22px; font-size: 15px; font-weight: 700; color: #14213D">Autores e palestrante</h4>
<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 16px 32px">
<div style="display: flex; flex-direction: column; gap: 4px; border-top: 1px solid #E1E3E7; padding-top: 12px"><strong style="font-size: 15px; font-weight: 600">Filipe Denki</strong><span style="font-size: 14px; line-height: 1.6; color: #50545C">Mestre em Direito pela PUC-SP. Formação Executiva em Turnaround Management pela FGV e Course of Restructuring and Judicial Recovery pela Columbia Law School (Nova York, EUA). Vice-presidente do IDECO e presidente da Câmara de Apoio a Empresa em Crise da ACIEG (CAEC). Professor do IGD, da PUC-GO, do IPOG e da EBPÓS. Sócio da Veritas Administração Judicial e do STG Law.</span></div>
<div style="display: flex; flex-direction: column; gap: 4px; border-top: 1px solid #E1E3E7; padding-top: 12px"><strong style="font-size: 15px; font-weight: 600">Marcelo Sacramone</strong><span style="font-size: 14px; line-height: 1.6; color: #50545C">Professor de Direito Comercial da PUC-SP. Doutor em Direito Comercial pela USP. Uma das principais referências nacionais em insolvência empresarial e autor do prefácio da obra de Filipe Denki.</span></div>
<div style="display: flex; flex-direction: column; gap: 4px; border-top: 1px solid #E1E3E7; padding-top: 12px"><strong style="font-size: 15px; font-weight: 600">Thiago Castelliano</strong><span style="font-size: 14px; line-height: 1.6; color: #50545C">Juiz de Direito titular da 2ª Vara de Sucessões de Goiânia. Professor do IGD. Doutor e Mestre em Direito do Agronegócio e Desenvolvimento. Organizador do Vade Mecum do Agronegócio (Ed. Foco).</span></div>
<div style="display: flex; flex-direction: column; gap: 4px; border-top: 1px solid #E1E3E7; padding-top: 12px"><strong style="font-size: 15px; font-weight: 600">Joviano Cardoso de Paula Júnior</strong><span style="font-size: 14px; line-height: 1.6; color: #50545C">Advogado. Professor do IGD. Doutorando em Direito e Mestre em Agronegócio. Organizador do Vade Mecum do Agronegócio (Ed. Foco).</span></div>
</div>
<p style="margin: 0; padding-top: 18px; font-size: 13px; line-height: 1.6; color: #50545C">Organização: IGD – Instituto Goiano de Direito. Apoio: Instituto de Direito Empresarial do Centro-Oeste (IDECO), Editora Lumen Juris e Editora Dialética.</p>
</div>
</div>
<a href="contato.html" style="background: #14213D; color: #FFFFFF; text-decoration: none; font-size: 14px; font-weight: 700; padding: 13px 20px; border-radius: 2px">Convidar para um evento</a>
</div>
` : ''}

${(isPast) ? `
${(anos || []).map((a, i15) => `
<div style="display: grid; grid-template-columns: 140px minmax(0, 1fr); gap: 8px 40px; padding: 36px 0 12px; border-bottom: 1px solid #E1E3E7">
<h2 style="margin: 0; font-family: Montserrat, 'Helvetica Neue', Arial, sans-serif; font-weight: 600; font-size: 40px; line-height: 1; color: #14213D">${h(a.ano)}</h2>
<ul style="list-style: none; margin: 0; padding: 0">
${(a.itens || []).map((e, i16) => `
<li style="display: flex; flex-direction: column; gap: 6px; padding: 0 0 28px">
<span style="display: flex; flex-wrap: wrap; gap: 6px 16px; font-size: 13px"><strong style="font-weight: 700; color: #6D1F32">${h(e.papel)}</strong><span style="color: #50545C">${h(e.data)}</span></span>
<h3 style="margin: 0; font-family: Montserrat, 'Helvetica Neue', Arial, sans-serif; font-weight: 600; font-size: 22px; line-height: 1.3">${h(e.evento)}</h3>
${(e.temTema) ? `<p style="margin: 0; font-size: 15px; line-height: 1.6; color: #24262B">${h(e.tema)}</p>` : ''}
<span style="font-size: 14px; color: #50545C">${h(e.local)}</span>
</li>
`).join('')}
</ul>
</div>
`).join('')}
` : ''}

${(isCursos) ? `
${(cursos || []).map((a, i17) => `
<div style="display: grid; grid-template-columns: 140px minmax(0, 1fr); gap: 8px 40px; padding: 36px 0 12px; border-bottom: 1px solid #E1E3E7">
<h2 style="margin: 0; font-family: Montserrat, 'Helvetica Neue', Arial, sans-serif; font-weight: 600; font-size: 40px; line-height: 1; color: #14213D">${h(a.ano)}</h2>
<ul style="list-style: none; margin: 0; padding: 0">
${(a.itens || []).map((c, i18) => `
<li style="display: flex; flex-direction: column; gap: 6px; padding: 0 0 24px">
<strong style="font-size: 13px; font-weight: 700; color: #6D1F32">${h(c.papel)}</strong>
<h3 style="margin: 0; font-family: Montserrat, 'Helvetica Neue', Arial, sans-serif; font-weight: 600; font-size: 21px; line-height: 1.3">${h(c.curso)}</h3>
<span style="font-size: 14px; color: #50545C">${h(c.info)}</span>
</li>
`).join('')}
</ul>
</div>
`).join('')}
` : ''}
</section>

<footer style="background: #0F1930; color: #B8BDC5; font-size: 13px">
<div style="max-width: 1200px; margin: 0 auto; padding: 32px; display: flex; flex-wrap: wrap; justify-content: space-between; gap: 16px"><span>Filipe Denki | filipedenki.com.br</span><a href="contato.html" style="color: #FFFFFF">Contato e política de privacidade</a></div>
</footer>
</div>
</div>`;
}

DC.mount(Component, render, document.getElementById('app'));
