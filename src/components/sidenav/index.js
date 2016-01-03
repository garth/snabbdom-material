import { html } from 'snabbdom-jsx';
import Mask from '../mask';
import Item from './item';
import Title from './title';
import Separator from '../menu/separator';
import defaultMaterial from '../defaultMaterial';

const Sidenav = function Sidenav({
  className,
  isOpen,
  mini,
  onClose,
  style = {},
  material = defaultMaterial
}, children = '') {

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
    <div style={{ zIndex: 1000 }}>
      <Mask onClick={onClose} isOpen={isOpen} material={material}/>
      {isOpen ? (
        <div
          class={{
            sidenav: true,
            paper2: true,
            [className]: className
          }}
          style={Object.assign({
            zIndex: 1001,
            position: 'fixed',
            top: 0,
            bottom: 0,
            overflow: 'auto'
          }, style, material.sidenav || defaultMaterial.sidenav)}>
          {children}
        </div>
      ) : <span/>}
    </div>
  );
};

Sidenav.Item = Item;
Sidenav.Separator = Separator;
Sidenav.Title = Title;

export default Sidenav;
