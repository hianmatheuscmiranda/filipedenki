<template>
  <div class="dc-page">

<div style="font-family: Montserrat, 'Helvetica Neue', Arial, sans-serif; color: #24262B; background: #FFFFFF; min-height: 100vh">

<header style="border-bottom: 1px solid #14213D; background: #14213D">
<div style="max-width: 1200px; margin: 0 auto; padding: 18px 32px; display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 16px">
<a href="/" aria-label="Filipe Denki — início" style="display: flex; align-items: center; gap: 12px; text-decoration: none; color: #D4D7DD">
<img src="/assets/img/logo-filipe-denki.png" alt="Filipe Denki" style="height: 44px; width: auto; display: block">
</a>
<nav aria-label="Principal" style="display: flex; flex-wrap: wrap; gap: 26px; font-size: 14px; font-weight: 600">
<a href="/" style="color: #D4D7DD; text-decoration: none; padding: 6px 0">Início</a>
<a href="/sobre" style="color: #D4D7DD; text-decoration: none; padding: 6px 0">Sobre mim</a>
<a href="/publicacoes" style="color: #D4D7DD; text-decoration: none; padding: 6px 0">Publicações</a>
<a href="/livros" style="color: #D4D7DD; text-decoration: none; padding: 6px 0">Livros</a>
<a href="/cursos" style="color: #D4D7DD; text-decoration: none; padding: 6px 0">Cursos</a>
<a href="/videos" aria-current="page" style="color: #FFFFFF; text-decoration: none; padding: 6px 0; border-bottom: 2px solid #FFFFFF">Vídeos</a>
<a href="/imprensa" style="color: #D4D7DD; text-decoration: none; padding: 6px 0">Imprensa</a>
<a href="/eventos" style="color: #D4D7DD; text-decoration: none; padding: 6px 0">Eventos</a>
<a href="/contato" style="color: #D4D7DD; text-decoration: none; padding: 6px 0">Contato</a>
</nav>
</div>
</header>

<section style="background: #0F1930; color: #FFFFFF">
<div style="max-width: 1200px; margin: 0 auto; padding: 64px 32px; display: grid; grid-template-columns: repeat(auto-fit, minmax(340px, 1fr)); gap: 48px; align-items: center">
<div style="aspect-ratio: 16 / 9; background: #14213D; display: flex; align-items: center; justify-content: center; position: relative">
<button type="button" aria-label="Reproduzir vídeo em destaque" style="background: transparent; border: 0; cursor: pointer; padding: 0"><svg width="84" height="84" viewBox="0 0 54 54" aria-hidden="true"><circle cx="27" cy="27" r="26" fill="none" stroke="#FFFFFF" stroke-width="1.2"></circle><path d="M22 17L37 27L22 37Z" fill="#FFFFFF"></path></svg></button>
<span style="position: absolute; left: 16px; bottom: 14px; font-size: 12px; color: #D4D7DD">Incorporação YouTube | [00:00]</span>
</div>
<div style="display: flex; flex-direction: column; gap: 18px">
<h1 style="margin: 0; font-family: Montserrat, 'Helvetica Neue', Arial, sans-serif; font-weight: 600; font-size: clamp(40px, 5vw, 64px); line-height: 1.05">Vídeos e entrevistas</h1>
<p style="margin: 0; font-size: 16px; line-height: 1.7; color: #D4D7DD">Em destaque: [título do vídeo — provisório]. [Descrição curta.]</p>
<span style="font-size: 13px; color: #B8BDC5">Palestra | [data] | [duração]</span>
</div>
</div>
</section>

<section style="max-width: 1200px; margin: 0 auto; padding: 48px 32px 96px; display: flex; flex-direction: column; gap: 28px">
<div style="display: flex; flex-wrap: wrap; gap: 16px; align-items: flex-end; justify-content: space-between">
<div role="group" aria-label="Categorias" style="display: flex; flex-wrap: wrap; gap: 8px; flex: 1 1 600px">
<template v-for="(c, i9) in cats" :key="i9">
<button type="button" :aria-pressed="c.sel" @click="c.pick" :style="c.style">{{ c.label }}</button>
</template>
</div>
<div style="flex: 0 1 300px; display: flex; flex-direction: column; gap: 6px">
<label for="vbusca" style="font-size: 13px; font-weight: 600; color: #50545C">Pesquisar vídeos</label>
<input id="vbusca" type="search" :value="query" @input="onQuery" placeholder="Tema ou palavra-chave" style="padding: 12px 14px; font: inherit; font-size: 14px; border: 1px solid #B8BDC5; border-radius: 2px">
</div>
</div>

<template v-if="empty">
<p style="margin: 0; padding: 40px 0; font-size: 16px">Nenhum vídeo nesta categoria ainda. Escolha outra categoria ou limpe a pesquisa.</p>
</template>

<div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 40px 32px">
<template v-for="(v, i10) in videos" :key="i10">
<a :href="v.href" target="_blank" rel="noopener" style="text-decoration: none; color: #24262B; display: flex; flex-direction: column; gap: 10px">
<div :style="`aspect-ratio: 16 / 9; background: ${v.bg}; display: flex; align-items: center; justify-content: center; position: relative`"><svg width="48" height="48" viewBox="0 0 54 54" aria-hidden="true"><circle cx="27" cy="27" r="26" fill="none" stroke="#FFFFFF" stroke-width="1.5"></circle><path d="M22 17L37 27L22 37Z" fill="#FFFFFF"></path></svg><span style="position: absolute; right: 10px; bottom: 10px; background: #0F1930; color: #FFFFFF; font-size: 12px; padding: 3px 6px">{{ v.fonte }}</span></div>
<span style="font-size: 12px; font-weight: 700; color: #6D1F32; padding-top: 4px">{{ v.cat }}</span>
<span style="font-family: Montserrat, 'Helvetica Neue', Arial, sans-serif; font-size: 20px; line-height: 1.3">{{ v.titulo }}</span>
<span style="font-size: 14px; line-height: 1.6; color: #50545C">{{ v.desc }}</span>
<span style="font-size: 13px; color: #50545C">{{ v.data }}</span>
</a>
</template>
</div>
</section>

<footer style="background: #0F1930; color: #B8BDC5; font-size: 13px">
<div style="max-width: 1200px; margin: 0 auto; padding: 32px; display: flex; flex-wrap: wrap; justify-content: space-between; gap: 16px"><span>Filipe Denki | filipedenki.com.br</span><a href="/contato" style="color: #FFFFFF">Contato e política de privacidade</a></div>
</footer>
</div>
</div>
</template>

<script>
import { useDcPage } from '../lib/dcPage.js'
import { DCLogic } from '../lib/dcLogic.js'

class Component extends DCLogic {
  constructor(p) { super(p); this.state = { cat: 'Todos', query: '' }; }
  renderVals() {
    const C = ['Todos','Entrevistas','Palestras','Aulas','Podcasts','Comentários jurídicos','Produtor Rural','Casos e jurisprudência'];
    const BG = ['#14213D','#24262B','#6D1F32','#2C3A5C'];
    const REAL = [
      { cat: 'Entrevistas', bg: '#24262B', titulo: 'Entrevista ao Agro Mais', desc: 'Participação no Agro Mais sobre temas do agronegócio.', data: 'set. 2026', href: 'https://youtu.be/tjNnODItm2g' },
      { cat: 'Entrevistas', bg: '#6D1F32', titulo: 'Entrevista ao Agro Mais (segunda participação)', desc: 'Nova participação no Agro Mais.', data: 'set. 2026', href: 'https://youtu.be/S-ZcnprZjeY' },
      { cat: 'Entrevistas', bg: '#2C3A5C', titulo: 'Entrevista ao Agro Hoje', desc: 'Participação no Agro Hoje, com transmissão em TV e rádio.', data: 'mai. 2026', href: 'https://www.youtube.com/watch?v=XvdUB6YY9Kg' },
      { cat: 'Entrevistas', bg: '#14213D', titulo: 'Participação no Agro+', desc: 'TV | Entrevista', data: 'mar. 2026', href: 'https://www.youtube.com/watch?v=mUpRFuSxHvA' },
      { cat: 'Entrevistas', bg: '#24262B', titulo: 'Participação no Canal do Boi', desc: 'TV | Entrevista (a partir de 0min31s)', data: '17 mar. 2026', href: 'https://www.youtube.com/watch?v=63FV9duyIt8&t=31s' },
      { cat: 'Entrevistas', bg: '#6D1F32', titulo: 'Entrevista à Rádio Bandeirantes', desc: 'Rádio | Entrevista (a partir de 21min07s)', data: '18 mar. 2026', href: 'https://www.youtube.com/live/jwDE3wGrdSg?t=1267' },
      { cat: 'Entrevistas', bg: '#2C3A5C', titulo: 'Entrevista à Rádio Bandeirantes Goiânia', desc: 'Rádio | Entrevista (a partir de 54min)', data: '27 mar. 2026', href: 'https://www.youtube.com/watch?v=8v2qY6i0R9U&t=3240s' },
      { cat: 'Entrevistas', bg: '#14213D', titulo: 'Participação no NC Contexto', desc: 'TV | NC Contexto (a partir de 14min)', data: '11 abr. 2026', href: 'https://youtu.be/89sFLU6AkrQ?t=840' },
      { cat: 'Entrevistas', bg: '#24262B', titulo: 'Entrevista ao Pan News Litoral', desc: 'Rádio | Pan News Litoral (a partir de 10min06s)', data: '13 abr. 2026', href: 'https://www.youtube.com/watch?v=p5sFI__YVtA&t=606s' },
      { cat: 'Entrevistas', bg: '#6D1F32', titulo: 'Participação no Canal Rural', desc: 'TV | Entrevista', data: 'jul. 2026', href: 'https://www.youtube.com/watch?v=fSFy6nWkFi8' },
      { cat: 'Entrevistas', bg: '#2C3A5C', titulo: 'Participação no SBT Goiânia', desc: 'TV | Entrevista', data: 'jul. 2026', href: 'https://youtu.be/6FQB23tPQu4' },
      { cat: 'Entrevistas', bg: '#14213D', titulo: 'Participação na TV Canção Nova Agro', desc: 'TV | Entrevista', data: 'jul. 2026', href: 'https://www.youtube.com/watch?v=NcrcSYMtfo8' },
      { cat: 'Entrevistas', bg: '#24262B', titulo: 'Participação na TV PUC', desc: 'TV | Entrevista', data: 'jul. 2026', href: 'https://youtu.be/p7NvbISGmXc' },
      { cat: 'Entrevistas', bg: '#6D1F32', titulo: 'Participação no SBT Agro', desc: 'TV | Entrevista (a partir de 12min10s)', data: 'jul. 2026', href: 'https://www.youtube.com/watch?v=1QIfh_9F8w4&t=730s' },
      { cat: 'Entrevistas', bg: '#2C3A5C', titulo: 'Entrevista ao Agro e Prosa', desc: 'Rádio | Entrevista', data: 'jul. 2026', href: 'https://youtu.be/8J5KdGhnrY8' },
      { cat: 'Entrevistas', bg: '#14213D', titulo: 'Entrevista à Rádio Bandeirantes', desc: 'Rádio | Entrevista', data: 'jul. 2026', href: 'https://www.youtube.com/watch?v=fMZf_o3yla8' },
      { cat: 'Entrevistas', bg: '#24262B', titulo: 'Participação no Canal do Boi', desc: 'TV | Entrevista', data: 'ago. 2026', href: 'https://youtu.be/qjFmpopxnx8' },
      { cat: 'Entrevistas', bg: '#6D1F32', titulo: 'CNN Brasil: Azul e o Chapter 11', desc: 'Entrevista sobre o pedido de recuperação judicial da Azul nos Estados Unidos e os créditos de leasing que ficam fora da RJ brasileira.', data: 'mai. 2025', href: 'https://laramartinsadvogados.com.br/noticias/recuperacao-judicial-internacional-as-razoes-de-empresa-aerea-para-optar-pelo-chapter-eleven-segundo-filipe-denki/' },
      { cat: 'Podcasts', bg: '#6D1F32', titulo: 'Agrotalk #227: Produtor rural pode pedir recuperação judicial?', desc: 'Conversa com Angela Ruiz sobre o passo a passo do pedido de recuperação judicial do produtor rural e seus aspectos jurídicos.', data: '27 mar. 2024', href: 'https://creators.spotify.com/pod/profile/agrotalk/episodes/127-Tempo-e-clima-personalizado-para-sua-fazenda-e1hopcr' },
      { cat: 'Aulas', bg: '#14213D', titulo: 'Saber Direito (TV Justiça) — Recuperação Judicial, aula 1', desc: 'Curso em cinco aulas sobre a nova recuperação judicial, gravado em 2021 para a TV Justiça.', data: '2021', href: 'https://youtu.be/AqSI6cYuQMM' },
      { cat: 'Aulas', bg: '#24262B', titulo: 'Saber Direito (TV Justiça) — Recuperação Judicial, aula 2', desc: 'Segunda aula da série no programa Saber Direito.', data: '2021', href: 'https://youtu.be/IalVkPKEX5E' },
      { cat: 'Aulas', bg: '#6D1F32', titulo: 'Saber Direito (TV Justiça) — Recuperação Judicial, aula 3', desc: 'Terceira aula da série no programa Saber Direito.', data: '2021', href: 'https://youtu.be/QkbcSxo5NnM' },
      { cat: 'Aulas', bg: '#2C3A5C', titulo: 'Saber Direito (TV Justiça) — Recuperação Judicial, aula 4', desc: 'Quarta aula da série no programa Saber Direito.', data: '2021', href: 'https://youtu.be/yHITFSTqW5I' },
      { cat: 'Aulas', bg: '#14213D', titulo: 'Saber Direito (TV Justiça) — Recuperação Judicial, aula 5', desc: 'Quinta aula da série no programa Saber Direito.', data: '2021', href: 'https://youtu.be/-fXRsriu5_Q' },
      { cat: 'Comentários jurídicos', bg: '#24262B', titulo: 'Live: o que mudou na recuperação judicial?', desc: 'Live com Danilo Diniz sobre as mudanças da Lei nº 14.112/2020, logo após sua entrada em vigor.', data: 'jan. 2021', href: 'https://laramartinsadvogados.com.br/recuperacao-de-empresas/rec-o-que-mudou-na-recuperacao-judicial/' },
      { cat: 'Entrevistas', bg: '#6D1F32', titulo: 'Jornal da Record: micro e pequenas empresas na pandemia', desc: 'Entrevista sobre a situação das micro e pequenas empresas e o aumento dos pedidos de recuperação judicial.', data: '21 mai. 2020', href: 'https://noticias.r7.com/jr-24h/conteudo-exclusivo/videos/exclusivo-r7-advogado-fala-sobre-a-situacao-das-micro-e-pequenas-empresas-em-meio-a-pandemia-20052020' },
      { cat: 'Entrevistas', bg: '#2C3A5C', titulo: 'Bom Dia Goiás: aumento das recuperações judiciais', desc: 'Entrevista ao telejornal sobre o aumento dos pedidos de recuperação judicial.', data: '2020', href: 'https://laramartinsadvogados.com.br/noticias/entrevista-filipe-denki-para-o-bom-dia-goias-recuperacao-judicial/' }
    ];
    const V = REAL.concat(['Palestras','Produtor Rural'].map((c, i) => ({ cat: c, bg: BG[i % 4], titulo: '[Título do vídeo — provisório]', desc: '[Descrição em uma ou duas linhas.]', data: '[data]', href: '#v' })));
    const MES = { 'jan.':1,'fev.':2,'mar.':3,'abr.':4,'mai.':5,'jun.':6,'jul.':7,'ago.':8,'set.':9,'out.':10,'nov.':11,'dez.':12 };
    const dkey = (s) => { const p = String(s || '').trim().split(/\s+/); let d = 0, m = 0, y = 0; p.forEach(x => { if (MES[x]) m = MES[x]; else if (/^\d{4}$/.test(x)) y = +x; else if (/^\d{1,2}$/.test(x)) d = +x; }); return y * 10000 + m * 100 + d; };
    const fonte = (h) => /youtu/.test(h) ? 'YouTube' : /spotify/.test(h) ? 'Spotify' : /r7\.com/.test(h) ? 'R7' : /laramartins/.test(h) ? 'Lara Martins Advogados' : /^https?:/.test(h) ? 'Site externo' : '';
    const acaoV = (h) => /youtu/.test(h) ? 'Assistir no YouTube' : /spotify/.test(h) ? 'Ouvir no Spotify' : /r7\.com/.test(h) ? 'Assistir no R7' : 'Ver entrevista';
    const s = this.state, q = s.query.trim().toLowerCase();
    const list = V.map((v, i) => ({ ...v, i, k: dkey(v.data), fonte: fonte(v.href) || 'Em breve' })).sort((a, b) => b.k - a.k || a.i - b.i).filter(v => (s.cat === 'Todos' || v.cat === s.cat) && (!q || (v.cat + ' ' + v.titulo + ' ' + v.desc).toLowerCase().includes(q)));
    return {
      cats: C.map(c => ({ label: c, sel: s.cat === c ? 'true' : 'false', pick: () => this.setState({ cat: c }),
        style: 'font: inherit; font-size: 14px; padding: 10px 16px; border-radius: 2px; cursor: pointer; ' + (s.cat === c ? 'background: #14213D; color: #FFFFFF; border: 1px solid #14213D; font-weight: 600' : 'background: #FFFFFF; color: #24262B; border: 1px solid #B8BDC5') })),
      query: s.query, onQuery: (e) => this.setState({ query: e.target.value }),
      videos: list, empty: list.length === 0
    };
  }
}

export default {
  setup() {
    return useDcPage(Component)
  }
}
</script>
