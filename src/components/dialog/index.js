import { html } from 'snabbdom-jsx' // eslint-disable-line
import h from 'snabbdom/h'
import Mask from '../mask'
import Divider from '../divider'
import getScreenSize from '../../helpers/screenSize'
import defaultMaterial from '../defaultMaterial'
import Button from './button'

const Dialog = function ({
  className = '',
  footer,
  height = 130,
  hideDivider = false,
  isOpen = false,
  noPadding = false,
  screenInfo,
  style = {},
  title,
  width = 280,
  material = defaultMaterial
}, children = '') {
  const screenSize = getScreenSize()

  let top = (screenSize.height / 2) - (height / 2)
  top = top < 24 ? 24 : top
  const maxWidth = width > screenSize.width - 80 ? screenSize.width - 80 : width
  const left = (screenSize.width - maxWidth) / 2
  const maxHeight = screenSize.height - 48
  let maxContentHeight = maxHeight - 48

  let footerContainer = null
  if (footer) {
    footerContainer = (
      <div style={{
        height: '56px',
        textAlign: 'right'
      }}>
        {hideDivider ? <span/> : (
          <Divider style={{ margin: '0' }}/>
        )}
        {footer}
      </div>
    )
    maxContentHeight -= 56
  } else {
    footerContainer = <span/>
  }

  let titleContainer = null
  if (title) {
    titleContainer = (
      <div style={{
        fontSize: '20px',
        fontWeight: '400',
        marginBottom: children ? '24px' : '0'
      }}>{title}</div>
    )
    maxContentHeight -= 49
  } else {
    titleContainer = <span/>
  }

  return (
    <div style={{ zIndex: '1000' }}>
      <Mask isOpen={isOpen} material={material}/>
      {isOpen ? (
        <div
          classNames={`${className} paper2`}
          style={Object.assign({
            position: 'fixed',
            zIndex: '1001',
            top: `${top}px`,
            left: `${left}px`,
            width: `${maxWidth}px`,
            maxHeight: `${maxHeight}px`
          }, style, material.fadeInOut || defaultMaterial.fadeInOut)}>
          <div style={{ padding: noPadding ? '0' : '24px' }}>
            {titleContainer}
            <div
              style={{
                maxHeight: `${maxContentHeight}px`,
                overflow: 'auto',
                margin: '0 -24px',
                padding: '0 24px'
              }}>
              {h('span', children)}
            </div>
          </div>
          {footerContainer}
        </div>
      ) : <span/>}
    </div>
  )
}

Dialog.Button = Button

export default Dialog
