import { html } from 'snabbdom-jsx' // eslint-disable-line
import h from 'snabbdom/h'
import classNames from 'classnames'

export default function Col ({
  className = '',
  style = {},
  type = ''
}, children = '') {
  const colClasses = type.split(' ').map(col => `col-${col}`)

  return (
    <div
      classNames={classNames(className, colClasses)}
      style={style}>
      {h('span', children)}
    </div>
  )
}
