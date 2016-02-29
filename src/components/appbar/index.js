import h from 'snabbdom/h'
import { getStyle } from '../../style'
import Button from './button'
import Title from './title'

const Appbar = function Appbar ({
  fixed = false,
  style
}, children = '') {
  const styles = getStyle('appbar.appbar', style)

  return h('div', {
    style: styles.container
  }, [
    h('div.paper1', {
      style: Object.assign({
        position: fixed ? 'fixed' : ''
      }, styles.appbar)
    }, children)
  ])
}

Appbar.Button = Button
Appbar.Title = Title

export default Appbar
