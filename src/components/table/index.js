import h from 'snabbdom/h';
import Toolbar from './toolbar';
import Row from './row';

const Table = function Table({
  className,
  style = {}
}, children = '') {

  return h('table', {
    style: Object.assign({
      width: '100%'
    }, style),
    class: {
      'm-c': true,
      [className]: className
    }
  }, children);
};

Table.Toolbar = Toolbar;
Table.Row = Row;

export default Table;
