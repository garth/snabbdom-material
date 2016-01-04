import { html } from 'snabbdom-jsx';
import defaultMaterial from './defaultMaterial';

export default function Input({
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

  const secondaryColor = material.secondaryColor || defaultMaterial.secondaryColor;
  const errorColor = material.errorColor || defaultMaterial.errorColor;
  const successColor = material.successColor || defaultMaterial.successColor;

  return (
    <div
      classNames={className ? ['input-group', className] : 'input-group'}
      style={style}>
      <input
        on-click={e => onClick ? onClick(e) : null}
        on-focus={e => {
          e.target.parentElement.querySelector('.inputLabel').style.color = secondaryColor;
          if (typeof onFocus === 'function') {
            onFocus(e);
          }
        }}
        on-blur={e => e.target.parentElement.querySelector('.inputLabel').style.color = 'inherit'}
        type={type}
        classNames="paper-divider"
        class={{
          used: value && value.length
        }}
        style={inputStyle}
        value={value}
        on-change={e => onChange ? onChange(e) : null}
        readOnly={readOnly}
        required/>
      <span
        classNames="bar"
        class={{
          open: isError || isSuccess
        }}
        style={{
          backgroundColor: isError ? errorColor : isSuccess ? successColor : secondaryColor
        }}/>
      <label>
        <span classNames="inputLabel">
          {label}
        </span>
      </label>
      <div
        classNames="info"
        style={{
          color: isError ? errorColor : 'inherit'
        }}>
        {message}
      </div>
    </div>
  );
}
