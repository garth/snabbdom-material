import { html } from 'snabbdom-jsx';
import Button from './button';
import Title from './title';
import defaultSettings from '../defaultSettings';

const Appbar = function Appbar({
  children,
  className,
  fixed,
  style = {},
  materialSettings: {
    primaryColor,
    primaryFontColor
  } = defaultSettings
}) {

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
        {children}
      </div>
    </div>
  );
};

Appbar.Button = Button;
Appbar.Title = Title;

export default Appbar;
