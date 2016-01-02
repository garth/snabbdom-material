import { html } from 'snabbdom-jsx';
import Button from '../appbar/button';

export default function SidenavTitle({ props: {
  children,
  className,
  closeMenuHandler,
  showCloseButton,
  style = {}
}, materialSettings: {
  typographyColor
}}) {

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
          class={{
            'waves-dark': true
          }}
          on-click={closeMenuHandler}>
          <svg
            style={{
              position: 'relative',
              top: '4px'
            }}
            fill={typographyColor}
            height="24"
            viewBox="0 0 24 24"
            width="24">
            <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
            <path d="M0 0h24v24H0z" fill="none"/>
          </svg>
        </Button>
      ) : null}
      {children}
    </div>
  );
}
