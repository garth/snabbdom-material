import h from 'snabbdom/h'
import { getStyle } from '../style'

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
          'stroke-width': 4,
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
    h('div.paper1', {
      style: Object.assign({
        marginLeft: `-${(size / 2) + 6}px`,
        width: `${size + 12}px`,
        height: `${size + 12}px`
      }, styles.overlay)
    }, [ spinner ])
  ) : h('span')
}
