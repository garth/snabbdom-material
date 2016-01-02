import { html } from 'snabbdom-jsx';

import Toolbar from './toolbar';
import Row from './row';

const Table = function Table({
  children = null,
  className = '',
  style = {}
}) {

  return (
    <table
      style={Object.assign({
        width: '100%'
      }, style)}
      class={{
        'm-c': true,
        [className]: className
      }}>
      {children}
    </table>
  );

};

Table.Toolbar = Toolbar;
Table.Row = Row;

export default Table;
