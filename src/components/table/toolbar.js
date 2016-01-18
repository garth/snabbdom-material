import { html } from 'snabbdom-jsx';
import h from 'raskdom/h';

export default function TableToolbar({
  className = '',
  colSpan = 1,
  style = {}
}, children = '') {

  return (
    <tr classNames={className ? ['toolbar', className] : 'toolbar'}>
      {
        h('th', {
          props: {
            colSpan
          },
          style: Object.assign({
            paddingLeft: 0
          }, style)
        }, children)
      }
    </tr>
  );

}
