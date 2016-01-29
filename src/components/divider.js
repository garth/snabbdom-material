import { html } from 'snabbdom-jsx' // eslint-disable-line

export default function Divider ({
  className = '',
  style = {}
}) {
  return (
    <hr
      classNames={`${className} paper-divider`}
      style={Object.assign({
        border: '0',
        height: '1px',
        margin: '16px 0'
      }, style)}/>
  )
}
