import { html } from 'snabbdom-jsx';

export default function ({ props: {
  className,
  inline,
  isOpen,
  primary,
  secondary,
  size = 30,
  style = {}
}, materialSettings: {
  primaryColor,
  secondaryColor
}}) {

  const spinner = (
    <div
      class={{
        [className]: className
      }}
      style={Object.assign({
        position: 'relative',
        margin: '0 auto',
        width: `${size}px`,
        height: `${size}px`
      }, style)}>
      <svg
        style={{
          animation: 'spinner-rotate 2s linear infinite',
          position: 'relative',
          zoom: size / 100,
          width: '100px',
          height: '100px'
        }}>
        <circle
          style={{
            strokeDasharray: '1,400',
            strokeDashoffset: 0,
            animation: 'spinner-dash 1.5s ease-in-out infinite' +
              (!primary && !secondary ? ', spinner-color 6s ease-in-out infinite' : ''),
            strokeLinecap: 'round'
          }}
          fill="none"
          stroke={primary ? primaryColor : secondary ? secondaryColor : null}
          cx="50"
          cy="50"
          r="48"
          strokeWidth="4"
          strokeMiterlimit="10"/>
      </svg>
    </div>
  );

  return inline ? spinner : (
    <div
      class={{
        paper1: true
      }}
      style={{
        zIndex: 1100,
        position: 'fixed',
        top: '100px',
        left: '50%',
        marginLeft: `-${(size / 2) + 6}px`,
        width: `${size + 12}px`,
        height: `${size + 12}px`,
        borderRadius: '50%',
        padding: '6px',
        opacity: isOpen ? '0' : '1',
        transition: 'opacity .3s',
        delayed: {
          opacity: isOpen ? '1' : '0'
        }
      }}>
      {spinner}
    </div>
  );
}
