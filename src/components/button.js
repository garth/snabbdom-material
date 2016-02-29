import h from 'snabbdom/h'
import { getStyle } from '../style'
import Waves from './helpers/waves'

export default function Button ({
  flat = false,
  onClick,
  primary = false,
  secondary = false,
  style,
  type = 'button'
}, children = '') {
  const styles = getStyle('button', style)
  const enabled = onClick || type === 'submit'

  const key = flat ? 'flat' : 'raised'
  const allStyles = [
    styles.button,
    enabled ? styles[key].enabled : styles[key].disabled
  ]
  if (enabled && primary) {
    allStyles.push(styles[key].primary)
  } else if (enabled && secondary) {
    allStyles.push(styles[key].secondary)
  }

  return h('button.waves-button', {
    hook: {
      insert: (vnode) => Waves.attach(vnode.elm)
    },
    on: {
      click: (e) => onClick ? onClick(e) : null
    },
    style: Object.assign({}, ...allStyles),
    class: {
      'waves-float': !flat && enabled,
      'waves-light': !flat && (
        (!primary && !secondary && styles.lightWaves) ||
        (primary && styles.primaryLightWaves) ||
        (secondary && styles.secondaryLightWaves)
      )
    },
    type,
    disabled: !enabled
  }, children)
}
