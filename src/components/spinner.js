import { html } from 'snabbdom-jsx';
import h from 'snabbdom/h';
import defaultMaterial from './defaultMaterial';

export default function Spinner({
  className = '',
  inline = false,
  isOpen = false,
  primary = false,
  secondary = false,
  size = 30,
  style = {},
  material = defaultMaterial
}) {

  const spinner = (
    <div
      classNames={className}
      style={Object.assign({
        position: 'relative',
        margin: '0 auto',
        width: `${size}px`,
        height: `${size}px`
      }, style)}>
      {
        h('svg', {
          style: {
            animation: 'spinner-rotate 2s linear infinite',
            position: 'relative',
            zoom: `${size / 100}`,
            width: '100px',
            height: '100px'
          }
        }, [
          h('circle', {
            attrs: {
              fill: 'none',
              stroke: primary
                ? material.primaryColor || defaultMaterial.primaryColor
                : secondary
                  ? material.secondaryColor || defaultMaterial.secondaryColor
                  : null,
              cx: 50,
              cy: 50,
              r: 48,
              strokeWidth: 4,
              strokeMiterlimit: 10
            },
            style: {
              strokeDasharray: '1,400',
              strokeDashoffset: 0,
              animation: 'spinner-dash 1.5s ease-in-out infinite' +
                (!primary && !secondary ? ', spinner-color 6s ease-in-out infinite' : ''),
              strokeLinecap: 'round'
            }
          })
        ])
      }
    </div>
  );

  return inline ? spinner : isOpen ? (
    <div
      classNames="paper1"
      style={Object.assign({
        zIndex: '1100',
        position: 'fixed',
        top: '100px',
        left: '50%',
        marginLeft: `-${(size / 2) + 6}px`,
        width: `${size + 12}px`,
        height: `${size + 12}px`,
        borderRadius: '50%',
        padding: '6px'
      }, material.fadeInOut || defaultMaterial.fadeInOut)}>
      {spinner}
    </div>
  ) : <span/>;
}
