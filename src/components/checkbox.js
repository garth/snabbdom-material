import { html } from 'snabbdom-jsx';
import defaultMaterial from './defaultMaterial';
import Waves from './helpers/waves';

export default function Checkbox({
  className,
  label = '',
  onChange,
  readOnly,
  style = {},
  value = false,
  material: {
    secondaryColor
  } = defaultMaterial
}) {

  const icon = value ? (
    <svg fill={secondaryColor} height="24" viewBox="0 0 24 24" width="24">
      <path d="M0 0h24v24H0z" fill="none"/>
      <path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
    </svg>
  ) : (
    <svg fill="rgba(0, 0, 0, 0.54)" height="24" viewBox="0 0 24 24" width="24">
      <path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"/>
      <path d="M0 0h24v24H0z" fill="none"/>
    </svg>
  );

  return (
    <label
      class={{
        [className]: className
      }}
      style={Object.assign({
        display: 'inline-block',
        cursor: 'pointer',
        margin: '14px 0',
        fontSize: '18px'
      }, style)}>
      <input
        style={{ display: 'none' }}
        type="checkbox"
        value="on"
        on-change={e => onChange({ target: { value: e.target.checked } })}
        readOnly={readOnly}
        checked={!!value}/>
      <div
        hook-insert={vnode => Waves.attach(vnode.elm)}
        class={{
          'waves-circle': true
        }}
        style={{
          position: 'relative',
          top: '3px',
          display: 'inline-block',
          margin: '-14px -4px -14px -14px',
          paddingTop: '7px',
          width: '48px',
          height: '48px'
        }}>
        {icon}
      </div>
      {label}
    </label>
  );
}
