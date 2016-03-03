import paper from './paper'

export default (variables) => {
  return {
    divider: Object.assign({
      border: '0',
      height: '1px',
      margin: '16px 0'
    }, paper(variables).divider)
  }
}
