import { html } from 'snabbdom-jsx';
import h from 'snabbdom/h';

export default function TableToolbar({
  className,
  colSpan = 1,
  style = {}
}, children = '') {

  return (
    <tr class={{
      'toolbar': true,
      [className]: className
    }}>
      <th
        colSpan={colSpan}
        style={Object.assign({
          paddingLeft: 0
        }, style)}>
        {h('span', children)}
      </th>
    </tr>
  );

}
