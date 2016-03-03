import h from 'snabbdom/h'
import '!style!css!../vendor/prism.css'
import '../vendor/prism'

function render (element, code) {
  element.innerHTML = code.trim().replace(/</g, '&lt;').replace(/>/g, '&gt;')
  window.Prism.highlightElement(element, false)
}

export default ({ code = '' }) => (
  h('pre', {}, [
    h('code.language-jsx', {
      hook: {
        insert: (vnode) => render(vnode.elm, code),
        postpatch: (oldvnode, vnode) => render(vnode.elm, code)
      }
    })
  ])
)
