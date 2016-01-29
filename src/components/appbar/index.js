import { html } from 'snabbdom-jsx' // eslint-disable-line
import h from 'snabbdom/h'
import Button from './button'
import Title from './title'
import defaultMaterial from '../defaultMaterial'

const Appbar = function Appbar ({
  className = '',
  fixed = false,
  style = {},
  material = defaultMaterial
}, children = '') {
  const primaryColor = material.primaryColor || defaultMaterial.primaryColor
  const primaryFontColor = material.primaryFontColor || defaultMaterial.primaryFontColor

  return (
    <div style={{ height: '64px' }}>
      <div
        classNames={`${className} paper1`}
        style={Object.assign({
          position: fixed ? 'fixed' : '',
          width: '100%',
          zIndex: '1',
          height: '64px',
          lineHeight: '32px',
          padding: '16px 8px',
          backgroundColor: primaryColor,
          color: primaryFontColor
        }, style)}>
        {h('span', children)}
      </div>
    </div>
  )
}

Appbar.Button = Button
Appbar.Title = Title

export default Appbar
