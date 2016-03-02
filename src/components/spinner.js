import h from 'snabbdom/h'
import { getStyle } from '../style'
import Paper from './paper'

export default function Spinner ({
  inline = false,
  isOpen = false,
  primary = false,
  secondary = false,
  size = 30,
  style
}) {
  const styles = getStyle('spinner', style)

  const spinner = h('div', {
    style: Object.assign({
      width: `${size}px`,
      height: `${size}px`
    }, styles.container)
  }, [
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
            ? styles.primaryColor
            : secondary
              ? styles.secondaryColor
              : null,
          cx: 50,
          cy: 50,
          r: 48,
          'stroke-width': styles.strokeWidth,
          'stroke-miterlimit': 10
        },
        style: {
          strokeDasharray: '1,400',
          strokeDashoffset: '0',
          animation: 'spinner-dash 1.5s ease-in-out infinite' +
            (!primary && !secondary ? ', spinner-color 6s ease-in-out infinite' : ''),
          strokeLinecap: 'round'
        }
      })
    ])
  ])

  return inline ? spinner : isOpen ? (
    Paper({
      noPadding: true,
      elevation: 1,
      style: {
        paper: Object.assign({
          marginLeft: `-${(size / 2) + styles.padding}px`,
          width: `${size + (styles.padding * 2)}px`,
          height: `${size + (styles.padding * 2)}px`,
          padding: `${styles.padding}px`
        }, styles.overlay)
      }
    }, [ spinner ])
  ) : h('span')
}
