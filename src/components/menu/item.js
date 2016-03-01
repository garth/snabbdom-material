import h from 'snabbdom/h'
import { getStyle } from '../../style'
import Waves from '../helpers/waves'

export default function MenuItem ({
  icon,
  onClick,
  onClose,
  selected = false,
  showIcon = false,
  style
}, children = '') {
  const styles = getStyle('menu', style)
  let iconContainer = null
  if (showIcon) {
    const iconElement = selected ? (
      h('svg', {
        attrs: {
          fill: styles.icon.color,
          height: 24,
          viewBox: '0 0 24 24',
          width: 24
        },
        style: styles.icon
      }, [
        h('path', { attrs: { d: 'M0 0h24v24H0z', fill: 'none' } }),
        h('path', { attrs: { d: 'M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z' } })
      ])
    ) : icon
    iconContainer = [
      h('div', {
        style: styles.iconContainer
      }, [ iconElement || '\u00A0' ])
    ]
  } else {
    iconContainer = []
  }

  return h('div.menu-item', {
    hook: {
      insert: (vnode) => Waves.attach(vnode.elm)
    },
    style: styles.item,
    on: {
      click: (e) => {
        if (typeof onClose === 'function') {
          onClose(e)
        }
        if (typeof onClick === 'function') {
          onClick(e)
        }
      }
    }
  }, [
    ...iconContainer,
    h('div', {
      style: styles.itemText
    }, children)
  ])
}
