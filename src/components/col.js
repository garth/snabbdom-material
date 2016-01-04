import { html } from 'snabbdom-jsx';
import h from 'snabbdom/h';

export default function Col({
  className = '',
  style = {},
  type = ''
}, children = '') {

  const colClasses = type.split(' ').map(col => `col-${col}`);

  return (
    <div
      classNames={className ? [className, ...colClasses] : colClasses}
      style={style}>
      {h('span', children)}
    </div>
  );

}
