/* eslint-disable react/no-unknown-property */
import { html } from 'snabbdom-jsx' // eslint-disable-line
import defaultMaterial from './defaultMaterial'

export default function Mask ({
  className = '',
  isOpen = false,
  dark = true,
  onClick,
  style: styleOverrides = {},
  material = defaultMaterial
}) {
  let style = {
    position: 'fixed',
    zIndex: '1000',
    top: '0',
    right: '0',
    bottom: '0',
    left: '0',
    backgroundColor: 'rgba(0, 0, 0, 0.15)'
  }

  if (dark) {
    style = Object.assign(style, material.fadeInOut || defaultMaterial.fadeInOut)
  } else {
    style.opacity = '0'
  }

  return isOpen ? (
    <div
      classNames={`${className} mask`}
      class={{
        dark
      }}
      style={Object.assign(style, styleOverrides)}
      on-click={(e) => onClick ? onClick(e) : null}/>
  ) : <span/>
}
