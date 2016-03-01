import h from 'snabbdom/h'
import { getStyle } from '../../style'
import Mask from '../mask'
import Item from './item'
import Separator from './separator'
import getScreenSize from '../../helpers/screenSize'

const insert = function (vnode) {
  const { height: screenHeight } = getScreenSize()
  const { top, bottom } = vnode.elm.getBoundingClientRect()
  const originalHeight = bottom - top
  const minHeight = (32 * 8) + 20

  let offsetTop = top < 6 ? Math.ceil((top - 16) / -32) * 32 : 0
  const offsetBottom = bottom > screenHeight - 6 ? Math.ceil((bottom - screenHeight + 16) / 32) * 32 : 0
  let height = bottom - top - offsetTop - offsetBottom
  if (height < minHeight) {
    height = minHeight > originalHeight ? originalHeight : minHeight
    if (top + offsetTop + height + 16 > screenHeight) {
      offsetTop -= top + offsetTop + height + 16 - screenHeight
    }
  }
  vnode.elm.style.top = `${vnode.elm.offsetTop + offsetTop}px`
  vnode.elm.style.height = `${height}px`
  vnode.elm.scrollTop += offsetTop
}

const Menu = function Menu ({
  isOpen = false,
  onClose: onClick,
  rightAlign = false,
  screenInfo,
  style
}, children = '') {
  const styles = getStyle('menu', style)
  const menuStyle = rightAlign ? {
    right: '0'
  } : {}

  return h('div', {
    style: styles.container
  }, [
    Mask({
      dark: false,
      isOpen,
      onClick
    }),
    ...(isOpen
      ? [
        h('div.paper1', {
          hook: {
            insert
          },
          style: Object.assign(menuStyle, styles.menu)
        }, children)
      ]
      : [])
  ])
}

Menu.Item = Item
Menu.Separator = Separator

export default Menu
