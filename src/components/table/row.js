import h from 'snabbdom/h';

export default function TableRow({
  className = '',
  onClick,
  style = {}
}, children = '') {

  return h('tr', {
    class: {
      [className]: className,
      clickable: onClick
    },
    style,
    on: {
      click: e => onClick ? onClick(e) : null,
    }
  }, children);
}
