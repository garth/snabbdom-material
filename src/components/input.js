import h from 'snabbdom/h'
import { getStyle } from '../style'

export default function Input ({
  isFocused = false,
  isError = false,
  isSuccess = false,
  label = '',
  message = '',
  onChange,
  onClick,
  onFocus,
  onBlur,
  readOnly = false,
  style,
  type = 'text',
  value = ''
}) {
  const styles = getStyle('input', style)
  const labelColor = isError ? styles.errorColor : isSuccess ? styles.successColor : styles.labelColor

  return (
    h('div', {
      style: styles.container
    }, [
      h('input.paper-divider', {
        on: {
          click: (e) => onClick ? onClick(e) : null,
          focus: (e) => onFocus ? onFocus(e) : null,
          blur: (e) => onBlur ? setTimeout(() => onBlur(e), 0) : null,
          input: (e) => onChange ? onChange(e) : null
        },
        style: styles.input,
        props: {
          type,
          value,
          readOnly,
          required: true
        }
      }),
      h('span', {
        style: Object.assign({
          backgroundColor: labelColor
        }, styles.bar, isError || isSuccess || isFocused ? styles.barFocused : {})
      }),
      h('label', {
        style: Object.assign({}, styles.label, {
          color: !isFocused ? '' : labelColor
        }, isFocused || value ? styles.labelFocused : {})
      }, label),
      h('div', {
        style: Object.assign({}, styles.message, {
          color: isError ? styles.errorColor : ''
        })
      }, message)
    ])
  )
}
