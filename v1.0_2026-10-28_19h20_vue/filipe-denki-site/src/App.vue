<template>
  <div @click="onLinkClick">
    <RouterView />
  </div>
</template>

<script>
// Intercepta cliques em links internos (/sobre, /livros#obra...) para navegar sem recarregar a página.
export default {
  methods: {
    onLinkClick(e) {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return
      const a = e.target.closest && e.target.closest('a')
      if (!a) return
      const href = a.getAttribute('href')
      if (!href || a.target === '_blank' || a.hasAttribute('download')) return
      if (/^(https?:|mailto:|tel:)/i.test(href) || href.startsWith('/assets/')) return
      e.preventDefault()
      if (href.startsWith('#')) {
        const el = document.querySelector(href)
        if (el) el.scrollIntoView({ behavior: 'smooth' })
        history.replaceState(null, '', href)
        return
      }
      this.$router.push(href)
    }
  }
}
</script>
