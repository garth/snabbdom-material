import { html } from 'snabbdom-jsx';
import h from 'snabbdom/h';

export default function TableRow({
  className,
  onClick,
  style = {}
}, children = '') {

  return (
    <tr
      class={{
        [className]: className,
        clickable: onClick
      }}
      style={style}
      on-click={onClick}>
      {h('span', children)}
    </tr>
  );
}
