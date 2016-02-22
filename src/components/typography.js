import h from 'snabbdom/h'
import getStyle from '../style'

export default function Typography ({
  display3 = false,
  display2 = false,
  display1 = false,
  headline = false,
  title = false,
  subheading = false,
  caption = false,
  primary = false,
  secondary = false,
  style
}, children = '') {
  const styles = []
  if (display3) {
    styles.push('typ.display3')
  }
  if (display2) {
    styles.push('typ.display2')
  }
  if (display1) {
    styles.push('typ.display1')
  }
  if (headline) {
    styles.push('typ.headline')
  }
  if (title) {
    styles.push('typ.title')
  }
  if (subheading) {
    styles.push('typ.subheading')
  }
  if (caption) {
    styles.push('typ.caption')
  }
  if (primary) {
    styles.push('typ.primary')
  }
  if (secondary) {
    styles.push('typ.secondary')
  }

  return (
    h('div.typography', {
      style: Object.assign({}, ...styles.map((name) => getStyle(name)), style)
    }, children)
  )
}
