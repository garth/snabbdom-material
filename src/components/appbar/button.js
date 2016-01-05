import { html } from 'snabbdom-jsx';
import h from 'snabbdom/h';
import Waves from '../helpers/waves';
import classNames from 'classnames';

export default function AppbarButton({
  className = '',
  lightWaves = false,
  onClick,
  style = {}
}, children = '') {

  return (
    <div
      classNames={className}
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
        classNames={classNames('waves-circle', {
          'waves-light': lightWaves
        })}>
        {h('span', children)}
      </a>
    </div>
  );
}
