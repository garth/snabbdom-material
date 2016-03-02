import h from 'snabbdom/h'

export default function TableToolbar ({
  colSpan = 1,
  style
}, children = '') {
  return h('tr.toobar', {}, [
    h('th', {
      props: {
        colSpan
      },
      style: Object.assign({
        paddingLeft: '0'
      }, style)
    }, children)
  ])
}
