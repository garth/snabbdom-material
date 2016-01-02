import { html } from 'snabbdom-jsx';
import Mask from '../mask';
import Item from './item';
import Separator from './separator';
import screen from '../helpers/screen';

function checkBounds(vnode) {
  const menuElement = vnode.elm;
  if (menuElement) {
    const screenHeight = screen.getSize().height;
    const { top, bottom } = menuElement.getBoundingClientRect();
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
    menuElement.style.top = `${menuElement.offsetTop + offsetTop}px`;
    menuElement.style.height = `${height}px`;
    menuElement.scrollTop += offsetTop;
  }
}

function componentDidMount(isOpen, onClose) {
  return function (vnode) {
    checkBounds(vnode.elm);
    // close the options when resizing the window
    window.addEventListener('resize', vnode._resize = () => {
      if (isOpen) {
        onClose();
      }
    });
  };
}

function componentWillUnmount(vnode) {
  window.removeEventListener('resize', vnode._resize);
}

const Menu = function Menu({
  children = '',
  className,
  isOpen,
  onClose,
  rightAlign,
  style = {}
}) {

  const menuStyle = {
    zIndex: 1001,
    padding: '10px 0',
    backgroundColor: '#fff',
    color: '#000',
    position: 'absolute',
    overflowY: 'auto',
    scrollbar: 'width: 4px',
    top: '-8px',
    opacity: isOpen ? '0' : '1',
    transition: 'opacity .3s',
    delayed: {
      opacity: isOpen ? '1' : '0'
    }
  };
  if (rightAlign) {
    menuStyle.right = '0';
  }

  return (
    <div
      style={{
        zIndex: 1000,
        position: 'absolute',
        width: rightAlign ? null : '100%'
      }}>
      <Mask dark={false} isOpen={isOpen} on-click={onClose}/>
      <div
        hook-insert={componentDidMount(isOpen, onClose)}
        hook-postpatch={checkBounds}
        hook-destroy={componentWillUnmount}
        class={{
          paper1: true,
          [className]: className
        }}
        style={Object.assign(menuStyle, style)}>
        {children}
      </div>
    </div>
  );
};

Menu.Item = Item;
Menu.Separator = Separator;

export default Menu;
