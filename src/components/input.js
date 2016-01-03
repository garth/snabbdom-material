import { html } from 'snabbdom-jsx';
import defaultMaterial from './defaultMaterial';

export default function Input({
  className,
  inputStyle = {},
  isError,
  isSuccess,
  label = '',
  message = '',
  onChange,
  onClick,
  onFocus,
  readOnly,
  style = {},
  type = 'text',
  value = '',
  material: {
    secondaryColor,
    errorColor,
    successColor
  } = defaultMaterial
}) {

  return (
    <div
      class={{
        'input-group': true,
        [className]: className
      }}
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
        class={{
          'paper-divider': true,
          used: value && value.length
        }}
        style={inputStyle}
        value={value}
        on-change={e => onChange ? onChange(e) : null}
        readOnly={readOnly}
        required/>
      <span
        class={{
          'bar': true,
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
