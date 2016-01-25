import { html } from 'snabbdom-jsx';
import h from 'snabbdom/h';
import Waves from '../helpers/waves';
import classNames from 'classnames';

export default function MenuItem({
  className = '',
  icon,
  onClick,
  onClose,
  selected = false,
  showIcon = false,
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
  } else {
    iconContainer = <span/>;
  }

  return (
    <div
      hook-insert={vnode => Waves.attach(vnode.elm)}
      classNames={classNames(className, 'menu-item')}
      style={Object.assign({
        padding: '0 40px 0 24px',
        lineHeight: '32px',
        cursor: 'pointer',
        whiteSpace: 'nowrap',
        display: 'block'
      }, style)}
      on-click={e => {
        if (typeof onClose === 'function') {
          onClose(e);
        }
        if (typeof onClick === 'function') {
          onClick(e);
        }
      }}>
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
