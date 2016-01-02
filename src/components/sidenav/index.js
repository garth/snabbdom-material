import { html } from 'snabbdom-jsx';
import Mask from '../mask';
import Item from './item';
import Title from './title';
import Separator from '../menu/separator';

const Sidenav = function Sidenav({
  children = '',
  className,
  isOpen,
  mini,
  onClose,
  style = {}
}) {

  return mini ? (
    <div
      class={{
        paper: true,
        [className]: className
      }}
      style={Object.assign({
        position: 'absolute',
        top: '64px',
        left: 0,
        bottom: 0,
        width: '62px',
        marginLeft: '-2px',
        overflow: 'hidden'
      }, style)}>
      {children}
    </div>
  ) : (
    <div>
      <Mask on-click={onClose} isOpen={isOpen}/>
      <div
        class={{
          sidenav: true,
          paper2: true,
          [className]: className
        }}
        style={Object.assign({
          position: 'fixed',
          top: 0,
          bottom: 0,
          overflow: 'auto',
          width: '280px',
          zIndex: 1001,
          left: isOpen ? '-280px' : '0',
          transition: 'left .3s ease-out',
          delayed: {
            left: isOpen ? '0' : '-280px'
          }
        }, style)}>
        {children}
      </div>
    </div>
  );
};

Sidenav.Item = Item;
Sidenav.Separator = Separator;
Sidenav.Title = Title;

export default Sidenav;
