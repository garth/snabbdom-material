import h from 'snabbdom/h'
import Toolbar from './toolbar'
import Row from './row'

const Table = function Table ({
  className = '',
  style = {}
}, children = '') {
  const classNames = {}
  if (className) {
    classNames[className] = true
  }

  return h('table.m-c', {
    style: Object.assign({
      width: '100%'
    }, style),
    class: classNames
  }, children)
}

Table.Toolbar = Toolbar
Table.Row = Row

export default Table
