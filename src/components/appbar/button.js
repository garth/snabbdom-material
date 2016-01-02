import { html } from 'snabbdom-jsx';
import Waves from '../helpers/waves';

export default function Appbar({
  children,
  className,
  lightWaves,
  onClick,
  style = {}
}) {

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
        on-click={onClick}
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
        {children}
      </a>
    </div>
  );
}
