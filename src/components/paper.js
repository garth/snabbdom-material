/* eslint-disable react/no-unknown-property */
import { html } from 'snabbdom-jsx' // eslint-disable-line

export default function Paper ({
  className = '',
  elevation = 2,
  noPadding = false,
  style = {}
}, children = '') {
  return (
    <div
      classNames={`${className} paper${elevation}`}
      class={{
        padded: !noPadding
      }}
      style={Object.assign({
        lineHeight: 'inherit'
      }, style)}>
      {children}
    </div>
  )
}
