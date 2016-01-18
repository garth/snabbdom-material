import { html } from 'snabbdom-jsx';
import h from 'raskdom/h';
import Mask from '../mask';
import Item from './item';
import Separator from './separator';
import getScreenSize from '../../helpers/screenSize';
import defaultMaterial from '../defaultMaterial';
import classNames from 'classnames';

const inserted = function (vnode) {
  const { height: screenHeight } = getScreenSize();
  const { top, bottom } = vnode.elm.getBoundingClientRect();
  const originalHeight = bottom - top;
  const minHeight = (32 * 8) + 20;

  let offsetTop = top < 6 ? Math.ceil((top - 16) / -32) * 32 : 0;
  const offsetBottom = bottom > screenHeight - 6 ? Math.ceil((bottom - screenHeight + 16) / 32) * 32 : 0;
  let height = bottom - top - offsetTop - offsetBottom;
  if (height < minHeight) {
    height = minHeight > originalHeight ? originalHeight : minHeight;
    if (top + offsetTop + height + 16 > screenHeight) {
      offsetTop -= top + offsetTop + height + 16 - screenHeight;
    }
  }
  vnode.elm.style.top = `${vnode.elm.offsetTop + offsetTop}px`;
  vnode.elm.style.height = `${height}px`;
  vnode.elm.scrollTop += offsetTop;
};

const Menu = function Menu({
  className = '',
  isOpen = false,
  onClose,
  rightAlign = false,
  screenInfo,
  style = {},
  material = defaultMaterial
}, children = '') {

  const menuStyle = {
    zIndex: '1001',
    padding: '10px 0',
    backgroundColor: '#fff',
    color: '#000',
    position: 'absolute',
    overflowY: 'auto',
    scrollbar: 'width: 4px',
    top: '-8px'
  };
  if (rightAlign) {
    menuStyle.right = '0';
  }

  // hook-insert={componentDidMount(isOpen, onClose)}
  // hook-postpatch={checkBounds}
  // hook-destroy={componentWillUnmount}

  return (
    <div
      style={{
        zIndex: '1000',
        position: 'relative',
        height: '0',
        overflow: 'visible'
      }}>
      <Mask dark={false} isOpen={isOpen} onClick={onClose} material={material}/>
      {
        isOpen ?
          h(`div.${classNames(className, 'paper1').replace(/ /g, '.')}`, {
            hook: { insert: inserted },
            style: Object.assign(menuStyle, style, material.fadeInOut || defaultMaterial.fadeInOut)
          }, children) : ''
      }
    </div>
  );
};

Menu.Item = Item;
Menu.Separator = Separator;

export default Menu;
