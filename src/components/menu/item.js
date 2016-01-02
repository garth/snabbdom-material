import { html } from 'snabbdom-jsx';
import Waves from '../helpers/waves';

export default function MenuItem({
  children = '',
  className,
  closeMenuHandler,
  icon,
  onClick,
  selected,
  showIcon,
  style = {}
}) {

  let iconContainer = null;
  if (showIcon) {
    const iconElement = selected ? (
      <svg fill="#000000" width="24" height="24" viewBox="0 0 24 24" style={{
        position: 'relative',
        top: '4px'
      }}>
        <path d="M0 0h24v24H0z" fill="none"/>
        <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/>
      </svg>
    ) : icon;
    iconContainer = (
      <div style={{
        display: 'inline-block',
        width: '48px',
        lineHeight: '32px',
        fontSize: '20px'
      }}>
        {iconElement || '\u00A0'}
      </div>
    );
  }

  return (
    <div
      hook-insert={vnode => Waves.attach(vnode.elm)}
      class={{
        'menu-item': true,
        [className]: className
      }}
      style={Object.assign({
        padding: '0 40px 0 24px',
        lineHeight: '32px',
        cursor: 'pointer',
        whiteSpace: 'nowrap',
        display: 'block'
      }, style)}
      on-click={closeMenuHandler || onClick}>
      {iconContainer}
      <div style={{
        display: 'inline-block',
        fontSize: '16px'
      }}>
        {children}
      </div>
    </div>
  );
}
