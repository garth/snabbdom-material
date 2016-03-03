import { getStyle } from '../../style'
import Divider from '../divider'

export default function MenuSeparator ({
  style
}) {
  const styles = getStyle('menu', style)
  return Divider({
    style: {
      divider: styles.separator
    }
  })
}
