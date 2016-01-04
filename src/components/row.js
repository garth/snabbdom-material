import { html } from 'snabbdom-jsx';
import h from 'snabbdom/h';

export default function Row({
  className = '',
  style = {}
}, children = '') {

  return (
    <div
      classNames={className ? ['row', className] : 'row'}
      style={style}>
      {h('span', children)}
    </div>
  );

}
