import { reactive, computed } from 'vue'

// Transforma a classe da página em valores reativos para o template Vue.
// renderVals() é recalculado sempre que o estado muda.
export function useDcPage(Component, props = {}) {
  const inst = new Component(props)
  inst.state = reactive(inst.state || {})
  const vals = computed(() => inst.renderVals())
  const out = {}
  for (const key of Object.keys(vals.value)) {
    out[key] = computed(() => vals.value[key])
  }
  return out
}
