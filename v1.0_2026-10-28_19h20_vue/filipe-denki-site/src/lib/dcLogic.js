// Base mínima compatível com a lógica original das páginas.
// Cada página define uma classe Component com `state`, `setState()` e `renderVals()`.
export class DCLogic {
  constructor(props) {
    this.props = props || {}
    this.state = {}
  }
  setState(patch) {
    const next = typeof patch === 'function' ? patch(this.state) : patch
    Object.assign(this.state, next)
  }
}
