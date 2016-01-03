import { html } from 'snabbdom-jsx';
import h from 'snabbdom/h';

export default function Row({
  className,
  style = {}
}, children = '') {

  return (
    <div
      class={{
        row: true,
        [className]: className
      }}
      style={style}>
      {h('span', children)}
    </div>
  );

}
