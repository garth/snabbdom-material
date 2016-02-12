/** @jsx html */
import { html } from 'snabbdom-jsx'
import '!style!css!../vendor/prism.css'
import '../vendor/prism'

function render (element, code) {
  element.innerHTML = code.trim().replace(/</g, '&lt;').replace(/>/g, '&gt;')
  window.Prism.highlightElement(element, false)
}

export default ({ code = '' }) => (
  <pre>
    <code
      hook-insert={(vnode) => render(vnode.elm, code)}
      hook-postpatch={(oldvnode, vnode) => render(vnode.elm, code)}
      classNames='language-jsx'/>
  </pre>
)
