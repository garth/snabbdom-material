import h from 'snabbdom/h'
import { getStyle } from '../../style'
import Mask from '../mask'
import Item from './item'
import Title from './title'
import Paper from '../paper'
import Separator from '../menu/separator'

const Sidenav = function Sidenav ({
  isOpen = false,
  mini = false,
  onClose,
  style
}, children = '') {
  const styles = getStyle('sidenav', style)

  return mini ? Paper({
    noPadding: true,
    style: {
      paper: styles.mini
    }
  }, children) : h('div', {
    style: styles.container
  }, [
    Mask({
      onClick: onClose,
      isOpen
    }),
    ...(isOpen ? [
      Paper({
        noPadding: true,
        elevation: 2,
        style: {
          paper: styles.sidenav
        }
      }, children)
    ] : [])
  ])
}

Sidenav.Item = Item
Sidenav.Separator = Separator
Sidenav.Title = Title

export default Sidenav
