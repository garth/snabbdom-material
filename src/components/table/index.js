import { html } from 'snabbdom-jsx';
import h from 'snabbdom/h';
import Toolbar from './toolbar';
import Row from './row';

const Table = function Table({
  className,
  style = {}
}, children = '') {

  return (
    <table
      style={Object.assign({
        width: '100%'
      }, style)}
      class={{
        'm-c': true,
        [className]: className
      }}>
      {h('span', children)}
    </table>
  );

};

Table.Toolbar = Toolbar;
Table.Row = Row;

export default Table;
