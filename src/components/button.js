import { html } from 'snabbdom-jsx';
import Waves from './helpers/waves';

export default function Button({ props: {
  children,
  className,
  flat,
  onClick,
  primary,
  style: styleOverrides = {},
  type = 'button'
}, materialSettings: {
  secondaryColor,
  secondaryFontColor
}}) {

  const disabled = !onClick && type !== 'submit';

  const style = {
    zIndex: 'inherit',
    fontSize: '16px',
    lineHeight: '36px',
    padding: `0 24px`,
    margin: `8px`,
    textAlign: 'center',
    minWidth: '64px',
    textTransform: 'uppercase',
    cursor: !disabled ? 'pointer' : 'inherit'
  };

  if (disabled) {
    if (flat) {
      style.color = 'rgba(0, 0, 0, 0.26)';
    } else {
      style.color = 'rgba(0, 0, 0, 0.26)';
      style.backgroundColor = 'rgba(0, 0, 0, 0.12)';
    }
  } else if (primary) {
    if (flat) {
      style.color = secondaryColor;
    } else {
      style.color = secondaryFontColor;
      style.backgroundColor = secondaryColor;
    }
  }

  return (
    <button
      hook-insert={vnode => Waves.attach(vnode.elm)}
      type={type}
      on-click={onClick}
      style={Object.assign(style, styleOverrides)}
      class={{
        [className]: className,
        'waves-button': true,
        'waves-float': !flat && onClick,
        'waves-light': primary && !flat
      }}
      disabled={disabled}>
      {children}
    </button>
  );
}
