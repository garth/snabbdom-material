import h from 'snabbdom/h'
import { getStyle } from '../../style'
import Button from './button'
import Title from './title'
import Paper from '../paper'

const Appbar = function Appbar ({
  fixed = false,
  style
}, children = '') {
  const styles = getStyle('appbar.appbar', style)

  return h('div', {
    style: styles.container
  }, [
    Paper({
      noPadding: true,
      elevation: 1,
      style: {
        paper: Object.assign({
          position: fixed ? 'fixed' : ''
        }, styles.appbar)
      }
    }, children)
  ])
}

Appbar.Button = Button
Appbar.Title = Title

export default Appbar
