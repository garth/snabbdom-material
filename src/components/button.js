import { html } from 'snabbdom-jsx' // eslint-disable-line
import h from 'snabbdom/h'
import Waves from './helpers/waves'
import defaultMaterial from './defaultMaterial'
import classNames from 'classnames'

export default function Button ({
  className = '',
  flat = false,
  onClick,
  primary = false,
  style: styleOverrides = {},
  type = 'button',
  material = defaultMaterial
}, children = '') {
  const primaryFontColor = material.primaryFontColor || defaultMaterial.primaryFontColor
  const secondaryColor = material.secondaryColor || defaultMaterial.secondaryColor
  const secondaryFontColor = material.secondaryFontColor || defaultMaterial.secondaryFontColor
  const disabled = !onClick && type !== 'submit'

  const style = {
    fontSize: '16px',
    lineHeight: '36px',
    padding: `0 24px`,
    margin: `8px`,
    textAlign: 'center',
    minWidth: '64px',
    textTransform: 'uppercase',
    cursor: !disabled ? 'pointer' : '',
    backgroundColor: ''
  }

  if (disabled) {
    if (flat) {
      style.color = 'rgba(0, 0, 0, 0.35)'
    } else {
      style.color = 'rgba(0, 0, 0, 0.35)'
      style.backgroundColor = 'rgba(0, 0, 0, 0.12)'
    }
  } else if (primary) {
    if (flat) {
      style.color = secondaryColor
    } else {
      style.color = secondaryFontColor
      style.backgroundColor = secondaryColor
    }
  } else {
    style.color = primaryFontColor
  }

  return (
    <button
      hook-insert={vnode => Waves.attach(vnode.elm)}
      type={type}
      on-click={e => onClick ? onClick(e) : null}
      style={Object.assign(style, styleOverrides)}
      classNames={classNames(className, 'waves-button', {
        'waves-float': !flat && onClick,
        'waves-light': primary && !flat
      })}
      disabled={disabled}>
      {h('span', children)}
    </button>
  )
}
