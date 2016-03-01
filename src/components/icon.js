import h from 'snabbdom/h'
import { getStyle } from '../style'

export default function Icon ({
  name,
  style
}) {
  const styles = getStyle('icon', style)
  return h(`i.icon-${name}`, {
    style: styles
  })
}
