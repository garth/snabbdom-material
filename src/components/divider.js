import { html } from 'snabbdom-jsx' // eslint-disable-line
import classNames from 'classnames'

export default function Divider ({
  className = '',
  style = {}
}) {
  return (
    <hr
      classNames={classNames(className, 'paper-divider')}
      style={Object.assign({
        border: '0',
        height: '1px',
        margin: '16px 0'
      }, style)}/>
  )
}
