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

  let labelElement;

  return (
    <div
      class={{
        'input-group': true,
        [className]: className
      }}
      style={style}>
      <input
        on-click={onClick}
        on-focus={e => {
          labelElement.style.color = secondaryColor;
          if (typeof onFocus === 'function') {
            onFocus(e);
          }
        }}
        on-blur={() => labelElement.style.color = 'inherit'}
        type={type}
        class={{
          'paper-divider': true,
          used: value && value.length
        }}
        style={inputStyle}
        value={value}
        on-change={onChange}
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
        <span hook-insert={vnode => labelElement = vnode.elm}>
          {label}
        </span>
      </label>
      <div
        class={{
          info: true
        }}
        style={{
          color: isError ? errorColor : 'inherit'
        }}>
        {message}
      </div>
    </div>
  );
}
