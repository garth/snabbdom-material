import h from 'snabbdom/h'
import { getStyle } from '../style'

export default function Mask ({
  isOpen = false,
  dark = true,
  onClick,
  style
}) {
  const styles = getStyle('mask', style)

  return isOpen ? h('div', {
    style: Object.assign({}, styles.mask, dark ? styles.dark : styles.transparent),
    on: {
      click: (e) => onClick ? onClick(e) : null
    }
  }) : h('span')
}
