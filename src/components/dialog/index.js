import h from 'snabbdom/h'
import { getStyle } from '../../style'
import Mask from '../mask'
import Paper from '../paper'
import Divider from '../divider'
import getScreenSize from '../../helpers/screenSize'
import Button from './button'

const Dialog = function ({
  footer,
  height = 130,
  hideDivider = false,
  isOpen = false,
  noPadding = false,
  screenInfo,
  style,
  title,
  width = 280
}, children = '') {
  const styles = getStyle('dialog', style)
  const screenSize = getScreenSize()

  let top = (screenSize.height / 2) - (height / 2)
  top = top < 24 ? 24 : top
  const maxWidth = width > screenSize.width - 80 ? screenSize.width - 80 : width
  const left = (screenSize.width - maxWidth) / 2
  const maxHeight = screenSize.height - 48
  let maxContentHeight = maxHeight - 48

  let footerContainer = null
  if (footer) {
    footerContainer = h('div', {
      style: styles.footerContainer
    }, [
      ...(hideDivider ? [] : [
        Divider({
          style: {
            divider: styles.divider
          }
        })
      ]),
      footer
    ])
    maxContentHeight -= 56
  } else {
    footerContainer = h('span')
  }

  let titleContainer
  if (title) {
    titleContainer = [
      h('div', {
        style: Object.assign({}, styles.titleContainer, children ? {} : styles.titleContainerNoContent)
      }, typeof title === 'string' ? title : [ title ])
    ]
    maxContentHeight -= 49
  } else {
    titleContainer = []
  }

  return h('div', {
    style: styles.container
  }, [
    Mask({ isOpen }),
    ...(isOpen ? [
      Paper({
        elevation: 2,
        noPadding: true,
        style: {
          paper: Object.assign({
            top: `${top}px`,
            left: `${left}px`,
            width: `${maxWidth}px`,
            maxHeight: `${maxHeight}px`
          }, styles.dialog)
        }
      }, [
        h('div', {
          style: { padding: noPadding ? '0' : '24px' }
        }, [
          ...titleContainer,
          h('div', {
            style: Object.assign({
              maxHeight: `${maxContentHeight}px`
            }, styles.bodyContainer)
          }, children)
        ]),
        footerContainer
      ])
    ] : [])
  ])
}

Dialog.Button = Button

export default Dialog
