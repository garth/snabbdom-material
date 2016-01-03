import { html } from 'snabbdom-jsx';
import h from 'snabbdom/h';
import Waves from '../helpers/waves';

export default function AppbarButton({
  className,
  lightWaves,
  onClick,
  style = {}
}, children = '') {

  return (
    <div
      class={{
        [className]: className
      }}
      style={Object.assign({
        height: '48px',
        width: '48px',
        display: 'inline-block',
        margin: '-8px 0',
        backgroundColor: 'transparent'
      }, style)}>
      <a
        hook-insert={vnode => Waves.attach(vnode.elm)}
        on-click={e => onClick ? onClick(e) : null}
        style={{
          fontSize: '24px',
          height: '48px',
          width: '48px',
          lineHeight: '48px',
          display: 'inline-block',
          margin: '0',
          cursor: 'pointer'
        }}
        class={{
          'waves-circle': true,
          'waves-light': lightWaves
        }}>
        {h('span', children)}
      </a>
    </div>
  );
}
