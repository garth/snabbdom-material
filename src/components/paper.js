import h from 'snabbdom/h'
import { getStyle } from '../style'

export default function Paper ({
  elevation = 1,
  hook = {},
  noPadding = false,
  style
}, children = '') {
  const styles = getStyle('paper', style)

  return h('div', {
    hook,
    style: Object.assign({}, styles.paper, styles.elevation[elevation], noPadding ? {} : styles.padded)
  }, children)
}
