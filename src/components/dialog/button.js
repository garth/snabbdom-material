import { getStyle } from '../../style'
import Button from '../button'

export default function DialogButton (props, children = '') {
  const styles = getStyle('dialog')

  if (!props.style) {
    props.style = {}
  }
  if (!props.style.button) {
    props.style.button = styles.button
  } else {
    props.style.button = Object.assign({}, styles.button, props.style.button)
  }

  return Button(props, children)
}
