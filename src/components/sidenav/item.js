import { getStyle } from '../../style'
import MenuItem from '../menu/item'

export default function SidenavItem ({
  icon,
  onClick,
  onClose,
  selected = false,
  showIcon = false,
  style
}, children = '') {
  const styles = getStyle('sidenav', style)

  return MenuItem({
    icon,
    onClick,
    onClose,
    selected: false,
    showIcon,
    style: {
      item: Object.assign({}, styles.item, selected ? styles.itemSelected : {})
    }
  }, children)
}
