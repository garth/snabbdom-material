import { html } from 'snabbdom-jsx';
import h from 'snabbdom/h';
import Mask from '../mask';
import Item from './item';
import Separator from './separator';
// import screen from '../helpers/screen';
import defaultMaterial from '../defaultMaterial';

// function checkBounds(vnode) {
//   const menuElement = vnode.elm;
//   if (menuElement) {
//     const screenHeight = screen.getSize().height;
//     const { top, bottom } = menuElement.getBoundingClientRect();
//     const originalHeight = bottom - top;
//     const minHeight = (32 * 8) + 20;

//     let offsetTop = top < 6 ? Math.ceil((top - 16) / -32) * 32 : 0;
//     const offsetBottom = bottom > screenHeight - 6 ? Math.ceil((bottom - screenHeight + 16) / 32) * 32 : 0;
//     let height = bottom - top - offsetTop - offsetBottom;
//     if (height < minHeight) {
//       height = minHeight > originalHeight ? originalHeight : minHeight;
//       if (top + offsetTop + height + 16 > screenHeight) {
//         offsetTop -= top + offsetTop + height + 16 - screenHeight;
//       }
//     }
//     menuElement.style.top = `${menuElement.offsetTop + offsetTop}px`;
//     menuElement.style.height = `${height}px`;
//     menuElement.scrollTop += offsetTop;
//   }
// }

// function componentDidMount(isOpen, onClose) {
//   return function (vnode) {
//     checkBounds(vnode.elm);
//     // close the options when resizing the window
//     window.addEventListener('resize', vnode._resize = () => {
//       if (isOpen) {
//         onClose();
//       }
//     });
//   };
// }

// function componentWillUnmount(vnode) {
//   window.removeEventListener('resize', vnode._resize);
// }

const Menu = function Menu({
  className = '',
  isOpen = false,
  onClose,
  rightAlign = false,
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
      {isOpen ? (
        <div
          classNames={className ? ['paper1', className] : 'paper1'}
          style={Object.assign(menuStyle, style, material.fadeInOut || defaultMaterial.fadeInOut)}>
          {h('span', children)}
        </div>
      ) : <span/>}
    </div>
  );
};

Menu.Item = Item;
Menu.Separator = Separator;

export default Menu;
