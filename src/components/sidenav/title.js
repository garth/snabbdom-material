import h from 'snabbdom/h'
import { getStyle } from '../../style'
import Button from '../appbar/button'

export default function SidenavTitle ({
  onClose,
  showCloseButton = false,
  style
}, children = '') {
  const styles = getStyle('sidenav', style)

  return h('div', {
    style: styles.title
  }, [
    ...(showCloseButton ? [
      Button({
        onClick: onClose,
        style: styles.closeButton
      }, [
        h('svg', {
          style: styles.closeIcon,
          attrs: {
            fill: styles.closeIcon.color,
            height: 24,
            viewBox: '0 0 24 24',
            width: 24
          }
        }, [
          h('path', { attrs: { d: 'M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z' } }),
          h('path', { attrs: { d: 'M0 0h24v24H0z', fill: 'none' } })
        ])
      ])
    ] : []),
    ...(Array.isArray(children) ? children : [ children ])
  ])
}
