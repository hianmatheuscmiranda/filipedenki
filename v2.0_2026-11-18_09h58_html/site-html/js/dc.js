// Base em JavaScript puro usada pelas páginas com interação (abas, filtros, formulários).
// Cada página define uma classe Component (dados + lógica) e uma função render(v) que devolve o HTML.
(function (global) {
  'use strict';
  var handlers = [];
  var BOOL = { disabled: 1, checked: 1, selected: 1, readonly: 1, required: 1, hidden: 1, multiple: 1, open: 1 };

  // Escapa texto para HTML.
  function h(v) {
    if (v === null || v === undefined) return '';
    return String(v).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }
  // Atributo dinâmico: null/undefined somem; false some em atributos booleanos.
  function attr(name, v) {
    if (v === null || v === undefined) return '';
    if (BOOL[name]) return v ? ' ' + name : '';
    return ' ' + name + '="' + h(v) + '"';
  }
  // Registra uma função de evento e devolve o índice usado em data-on-*.
  function on(fn) { handlers.push(fn); return handlers.length - 1; }

  function DCLogic(props) { this.props = props || {}; this.state = {}; }
  DCLogic.prototype.setState = function (patch) {
    var next = typeof patch === 'function' ? patch(this.state) : patch;
    Object.assign(this.state, next);
    if (this._update) this._update();
  };

  function pathOf(el, root) {
    var p = [];
    while (el && el !== root) { p.unshift(Array.prototype.indexOf.call(el.parentNode.children, el)); el = el.parentNode; }
    return el === root ? p : null;
  }
  function byPath(p, root) {
    var el = root;
    for (var i = 0; i < p.length && el; i++) el = el.children[p[i]];
    return el;
  }

  function mount(Component, render, el) {
    el = el || document.getElementById('app');
    var inst = new Component({});
    function update() {
      // guarda o foco (campo de busca, botão) para restaurá-lo depois de redesenhar
      var a = document.activeElement, id = null, path = null, s0 = null, s1 = null;
      if (a && a !== document.body && el.contains(a)) {
        id = a.id || null; path = pathOf(a, el);
        try { s0 = a.selectionStart; s1 = a.selectionEnd; } catch (e) {}
      }
      handlers = [];
      el.innerHTML = render(inst.renderVals());
      var sel = el.querySelectorAll('select[value]');
      for (var i = 0; i < sel.length; i++) sel[i].value = sel[i].getAttribute('value');
      var f = id ? document.getElementById(id) : (path ? byPath(path, el) : null);
      if (f && f.focus) {
        f.focus({ preventScroll: true });
        if (s0 !== null && typeof f.setSelectionRange === 'function') { try { f.setSelectionRange(s0, s1); } catch (e) {} }
      }
    }
    inst._update = update;
    ['click', 'input', 'change'].forEach(function (type) {
      el.addEventListener(type, function (e) {
        var t = e.target.closest && e.target.closest('[data-on-' + type + ']');
        if (!t || !el.contains(t)) return;
        var fn = handlers[+t.getAttribute('data-on-' + type)];
        if (typeof fn === 'function') fn(e);
      });
    });
    update();
    return inst;
  }

  global.DC = { h: h, attr: attr, on: on, mount: mount };
  global.DCLogic = DCLogic;
})(typeof window !== 'undefined' ? window : globalThis);
