import h from 'snabbdom/h'

export default function Row ({
  style = {}
}, children = '') {
  return h('div.row', {
    style
  }, children)
}
