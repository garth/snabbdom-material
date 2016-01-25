import { html } from 'snabbdom-jsx' // eslint-disable-line
import defaultMaterial from './defaultMaterial'
import classNames from 'classnames'

export default function Input ({
  className = '',
  inputStyle = {},
  isError = false,
  isSuccess = false,
  label = '',
  message = '',
  onChange,
  onClick,
  onFocus,
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
      classNames={classNames(className, 'input-group')}
      style={style}>
      <input
        on-click={e => onClick ? onClick(e) : null}
        on-focus={e => {
          if (e.target && e.target.parentElement) {
            e.target.parentElement.querySelector('.inputLabel').style.color = secondaryColor
            if (typeof onFocus === 'function') {
              onFocus(e)
            }
          }
        }}
        on-blur={e => {
          if (e.target && e.target.parentElement) {
            e.target.parentElement.querySelector('.inputLabel').style.color = ''
          }
        }}
        type={type}
        classNames={classNames('paper-divider', {
          used: value && value.length
        })}
        style={inputStyle}
        value={value}
        on-change={e => onChange ? onChange(e) : null}
        readOnly={readOnly}
        required/>
      <span
        classNames={classNames('bar', {
          open: isError || isSuccess
        })}
        style={{
          backgroundColor: isError ? errorColor : isSuccess ? successColor : secondaryColor
        }}/>
      <label>
        <span classNames="inputLabel">
          {label}
        </span>
      </label>
      <div
        classNames={classNames('info', {
          color: isError ? errorColor : ''
        })}>
        {message}
      </div>
    </div>
  )
}
