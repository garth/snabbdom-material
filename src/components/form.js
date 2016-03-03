import h from 'snabbdom/h'
import { getStyle } from '../style'

export default function Form ({
  onSubmit,
  style
}, children = '') {
  const styles = getStyle('form', style)
  return h('form', {
    style: styles,
    on: {
      submit: (e) => {
        e.preventDefault()
        if (typeof onSubmit === 'function') {
          onSubmit(e)
        }
      }
    },
    props: {
      noValidate: true
    }
  }, children)
}
