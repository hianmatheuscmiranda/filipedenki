import { createRouter, createWebHistory } from 'vue-router'

const SITE = 'Filipe Denki'
const routes = [
  { path: '/', name: 'inicio', component: () => import('../views/HomeView.vue'), meta: { title: 'Início', description: 'Advogado e administrador judicial em Goiânia. Direito Empresarial, recuperação judicial, recuperação extrajudicial, insolvência e agronegócio.' } },
  { path: '/sobre', name: 'sobre', component: () => import('../views/SobreView.vue'), meta: { title: 'Sobre mim', description: 'Trajetória, formação acadêmica, docência e atuação institucional de Filipe Denki Belém Pacheco.' } },
  { path: '/publicacoes', name: 'publicacoes', component: () => import('../views/PublicacoesView.vue'), meta: { title: 'Artigos e publicações', description: 'Artigos, análises de caso e textos de opinião sobre recuperação judicial, recuperação extrajudicial, falência e agronegócio.' } },
  { path: '/artigo', name: 'artigo', component: () => import('../views/ArtigoView.vue'), meta: { title: 'Liberação de grãos na recuperação judicial do produtor rural', description: 'Artigo de Filipe Denki sobre a liberação de grãos na recuperação judicial do produtor rural.' } },
  { path: '/livros', name: 'livros', component: () => import('../views/LivrosView.vue'), meta: { title: 'Livros e obras', description: 'Obras individuais, obras coletivas e artigos em periódicos de Filipe Denki, com PDFs para download.' } },
  { path: '/cursos', name: 'cursos', component: () => import('../views/CursosView.vue'), meta: { title: 'Cursos', description: 'Cursos, aulas e programas de formação em recuperação judicial, falência e administração judicial.' } },
  { path: '/videos', name: 'videos', component: () => import('../views/VideosView.vue'), meta: { title: 'Vídeos e entrevistas', description: 'Aulas, entrevistas, podcasts e participações em TV e rádio.' } },
  { path: '/imprensa', name: 'imprensa', component: () => import('../views/ImprensaView.vue'), meta: { title: 'Entrevistas e imprensa', description: 'Matérias, entrevistas, TV, rádio e jornal impresso com participação de Filipe Denki.' } },
  { path: '/eventos', name: 'eventos', component: () => import('../views/EventosView.vue'), meta: { title: 'Eventos e atividades', description: 'Agenda acadêmica, eventos realizados, palestras e cursos ministrados.' } },
  { path: '/contato', name: 'contato', component: () => import('../views/ContatoView.vue'), meta: { title: 'Contato', description: 'Fale com Filipe Denki: contato profissional, convites para eventos e imprensa.' } },
  { path: '/admin', name: 'admin', component: () => import('../views/AdminView.vue'), meta: { title: 'Painel administrativo', description: 'Uso interno.', noindex: true } },
  { path: '/sistema', name: 'sistema', component: () => import('../views/SistemaView.vue'), meta: { title: 'Sistema visual', description: 'Uso interno.', noindex: true } },
  { path: '/:pathMatch(.*)*', redirect: '/' }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, saved) {
    if (saved) return saved
    if (to.hash) return { el: to.hash, top: 16, behavior: 'smooth' }
    return { top: 0 }
  }
})

function setMeta(attr, key, content) {
  let el = document.head.querySelector(`meta[${attr}="${key}"]`)
  if (!el) { el = document.createElement('meta'); el.setAttribute(attr, key); document.head.appendChild(el) }
  el.setAttribute('content', content)
}

router.afterEach((to) => {
  const title = to.meta.title ? `${to.meta.title} — ${SITE}` : SITE
  document.title = title
  const url = (import.meta.env.VITE_SITE_URL || window.location.origin).replace(/\/$/, '') + to.path
  setMeta('name', 'description', to.meta.description || '')
  setMeta('property', 'og:title', title)
  setMeta('property', 'og:description', to.meta.description || '')
  setMeta('property', 'og:url', url)
  setMeta('name', 'robots', to.meta.noindex ? 'noindex, nofollow' : 'index, follow')
  let canon = document.head.querySelector('link[rel="canonical"]')
  if (!canon) { canon = document.createElement('link'); canon.setAttribute('rel', 'canonical'); document.head.appendChild(canon) }
  canon.setAttribute('href', url)
})

export default router
