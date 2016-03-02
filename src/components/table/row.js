import h from 'snabbdom/h'
import { getStyle } from '../../style'

export default function TableRow ({
  onClick,
  style
}, children = '') {
  const styles = getStyle('table', style)

  return h('tr', {
    class: {
      clickable: onClick
    },
    style: Object.assign({}, styles.row, onClick ? styles.rowClickable : {}),
    on: {
      click: e => onClick ? onClick(e) : null
    }
  }, children)
}
