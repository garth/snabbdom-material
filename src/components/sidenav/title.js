import { html } from 'snabbdom-jsx';
import Button from '../appbar/button';
import defaultMaterial from '../defaultMaterial';

export default function SidenavTitle({
  className,
  closeMenuHandler,
  showCloseButton,
  style = {},
  material = defaultMaterial
}, children = '') {

  return (
    <div
      class={{
        'paper-divider': true,
        [className]: className
      }}
      style={Object.assign({
        height: '64px',
        lineHeight: '32px',
        padding: '16px 8px 0 16px',
        fontSize: '20px'
      }, style)}>
      {showCloseButton ? (
        <Button
          style={{
            float: 'right'
          }}
          className="waves-dark"
          onClick={closeMenuHandler}
          material={material}>
          <svg
            style={{
              position: 'relative',
              top: '4px'
            }}
            fill={material.typographyColor || defaultMaterial.typographyColor}
            height="24"
            viewBox="0 0 24 24"
            width="24">
            <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
            <path d="M0 0h24v24H0z" fill="none"/>
          </svg>
        </Button>
      ) : <span/>}
      {children}
    </div>
  );
}
