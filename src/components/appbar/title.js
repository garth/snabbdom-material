import { html } from 'snabbdom-jsx';
import h from 'snabbdom/h';

export default function AppbarTitle({
  className,
  style = {}
}, children = '') {

  return (
    <div
      class={{
        [className]: className
      }}
      style={Object.assign({
        fontSize: '31.5px',
        fontWeight: 'normal',
        height: '32px',
        lineHeight: '32px',
        whiteSpace: 'nowrap',
        paddingLeft: '8px',
        display: 'inline-block',
        float: 'left'
      }, style)}>
      {h('span', children)}
    </div>
  );

}
