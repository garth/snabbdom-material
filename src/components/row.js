import { html } from 'snabbdom-jsx' // eslint-disable-line
import h from 'snabbdom/h'

export default function Row ({
  className = '',
  style = {}
}, children = '') {
  return (
    <div
      classNames={`${className} row`}
      style={style}>
      {h('span', children)}
    </div>
  )
}
