import { html } from 'snabbdom-jsx' // eslint-disable-line
import h from 'snabbdom/h'
import classNames from 'classnames'

export default function Row ({
  className = '',
  style = {}
}, children = '') {
  return (
    <div
      classNames={classNames(className, 'row')}
      style={style}>
      {h('span', children)}
    </div>
  )
}
