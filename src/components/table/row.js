import h from 'snabbdom/h'

export default function TableRow ({
  className = '',
  onClick,
  style = {}
}, children = '') {
  const classNames = {
    clickable: onClick
  }
  if (className) {
    classNames[className] = true
  }

  return h('tr', {
    class: classNames,
    style,
    on: {
      click: e => onClick ? onClick(e) : null
    }
  }, children)
}
