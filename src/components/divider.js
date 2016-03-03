import h from 'snabbdom/h'
import { getStyle } from '../style'

export default function Divider ({
  style
}) {
  const styles = getStyle('divider', style)

  return h('hr', {
    style: styles.divider
  })
}
