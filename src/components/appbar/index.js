import { html } from 'snabbdom-jsx';
import h from 'snabbdom/h';
import Button from './button';
import Title from './title';
import defaultMaterial from '../defaultMaterial';

const Appbar = function Appbar({
  className,
  fixed,
  style = {},
  material: {
    primaryColor,
    primaryFontColor
  } = defaultMaterial
}, children = '') {

  return (
    <div style={{ height: '64px' }}>
      <div
        class={{
          paper1: true,
          [className]: className
        }}
        style={Object.assign({
          position: fixed ? 'fixed' : 'inherit',
          width: '100%',
          zIndex: '1',
          height: '64px',
          lineHeight: '32px',
          padding: '16px 8px',
          backgroundColor: primaryColor,
          color: primaryFontColor
        }, style)}>
        {h('span', children)}
      </div>
    </div>
  );
};

Appbar.Button = Button;
Appbar.Title = Title;

export default Appbar;
