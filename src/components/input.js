/* eslint-disable react/no-unknown-property */
import { html } from 'snabbdom-jsx' // eslint-disable-line
import defaultMaterial from './defaultMaterial'

export default function Input ({
  className = '',
  inputStyle = {},
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
  style = {},
  type = 'text',
  value = '',
  material = defaultMaterial
}) {
  const secondaryColor = material.secondaryColor || defaultMaterial.secondaryColor
  const errorColor = material.errorColor || defaultMaterial.errorColor
  const successColor = material.successColor || defaultMaterial.successColor

  return (
    <div
      classNames={`${className} input-group`}
      style={style}>
      <input
        on={{
          click: (e) => onClick ? onClick(e) : null,
          focus: (e) => onFocus ? onFocus(e) : null,
          blur: (e) => onBlur ? setTimeout(() => onBlur(e), 0) : null,
          input: (e) => onChange ? onChange(e) : null
        }}
        type={type}
        classNames='paper-divider'
        class={{
          used: value && value.length
        }}
        style={inputStyle}
        value={value}
        readOnly={readOnly}
        required/>
      <span
        classNames='bar'
        class={{
          open: isError || isSuccess
        }}
        style={{
          backgroundColor: isError ? errorColor : isSuccess ? successColor : secondaryColor
        }}/>
      <label>
        <span style={{
          color: !isFocused
            ? ''
            : isError
              ? errorColor
              : isSuccess
                ? successColor
                : secondaryColor
        }}>
          {label}
        </span>
      </label>
      <div
        classNames='info'
        style={{
          color: isError ? errorColor : ''
        }}>
        {message}
      </div>
    </div>
  )
}
