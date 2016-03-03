import h from 'snabbdom/h'
import { getStyle } from '../../style'
import Toolbar from './toolbar'
import Row from './row'

const Table = function Table ({
  style
}, children = '') {
  const styles = getStyle('table', style)

  return h('table.material-table', {
    style: styles.table
  }, children)
}

Table.Toolbar = Toolbar
Table.Row = Row

export default Table
