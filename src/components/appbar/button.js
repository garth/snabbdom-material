import h from 'snabbdom/h'
import Waves from '../helpers/waves'
import { getStyle } from '../../style'

export default function AppbarButton ({
  onClick,
  href = '',
  style
}, children = '') {
  const styles = getStyle('appbar.button', style)
  const enabled = onClick || href

  return h('div', {
    style: styles.container
  }, [
    h(`${href ? 'a' : 'div'}.waves-circle`, {
      class: {
        'waves-light': styles.lightWaves
      },
      hook: {
        insert: vnode => enabled ? Waves.attach(vnode.elm) : null
      },
      on: {
        click: e => onClick ? onClick(e) : null
      },
      props: {
        href
      },
      style: Object.assign({}, styles.button, enabled ? styles.enabled : styles.disabled)
    }, children)
  ])
}
