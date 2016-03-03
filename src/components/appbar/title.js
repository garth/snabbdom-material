import h from 'snabbdom/h'
import { getStyle } from '../../style'

export default function AppbarTitle ({
  style
}, children = '') {
  const styles = getStyle('appbar.title', style)

  return h('div', {
    style: styles
  }, children)
}
