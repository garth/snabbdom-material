import { html } from 'snabbdom-jsx';
import h from 'snabbdom/h';
import Waves from '../helpers/waves';

export default function MenuItem({
  className,
  closeMenuHandler,
  icon,
  onClick,
  selected,
  showIcon,
  style = {}
}, children = '') {

  let iconContainer = null;
  if (showIcon) {
    const iconElement = selected ? (
      h('svg', {
        attrs: {
          fill: '#000000',
          height: 24,
          viewBox: '0 0 24 24',
          width: 24
        },
        style: {
          position: 'relative',
          top: '4px'
        }
      }, [
        h('path', { attrs: { d: 'M0 0h24v24H0z', fill: 'none' } }),
        h('path', { attrs: { d: 'M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z' } })
      ])
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
        {h('span', children)}
      </div>
    </div>
  );
}
