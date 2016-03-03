import h from 'snabbdom/h'

export default function Col ({
  style = {},
  type = ''
}, children = '') {
  return h(`div.${type.split(' ').map((col) => `col-${col}`).join('.')}`, {
    style
  }, children)
}
