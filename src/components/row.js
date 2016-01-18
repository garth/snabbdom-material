import { html } from 'snabbdom-jsx';
import h from 'raskdom/h';
import classNames from 'classnames';

export default function Row({
  className = '',
  style = {}
}, children = '') {

  return (
    <div
      classNames={classNames(className, 'row')}
      style={style}>
      {h('span', children)}
    </div>
  );

}
