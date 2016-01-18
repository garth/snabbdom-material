import { html } from 'snabbdom-jsx';
import h from 'raskdom/h';
import Mask from '../mask';
import Item from './item';
import Title from './title';
import Separator from '../menu/separator';
import defaultMaterial from '../defaultMaterial';

const Sidenav = function Sidenav({
  className = '',
  isOpen = false,
  mini = false,
  onClose,
  style = {},
  material = defaultMaterial
}, children = '') {

  return mini ? (
    <div
      classNames={className ? ['paper', className] : 'paper'}
      style={Object.assign({
        position: 'absolute',
        top: '64px',
        left: '0',
        bottom: '0',
        width: '62px',
        marginLeft: '-2px',
        overflow: 'hidden'
      }, style)}>
      {h('span', children)}
    </div>
  ) : (
    <div style={{ zIndex: '1000' }}>
      <Mask onClick={onClose} isOpen={isOpen} material={material}/>
      {isOpen ? (
        <div
          classNames={className ? ['sidenav', 'paper2', className] : ['sidenav', 'paper2']}
          style={Object.assign({
            zIndex: '1001',
            position: 'fixed',
            top: '0',
            bottom: '0',
            overflow: 'auto'
          }, style, material.sidenav || defaultMaterial.sidenav)}>
          {h('span', children)}
        </div>
      ) : <span/>}
    </div>
  );
};

Sidenav.Item = Item;
Sidenav.Separator = Separator;
Sidenav.Title = Title;

export default Sidenav;
