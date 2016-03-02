import paper from './paper'

export default (variables) => {
  return {
    container: {
      zIndex: '1000'
    },
    sidenav: {
      zIndex: '1001',
      position: 'fixed',
      top: '0',
      bottom: '0',
      overflow: 'auto',
      width: `${variables.sidenavWidth}px`,
      left: `-${variables.sidenavWidth + 10}px`,
      transition: `left ${variables.transitionTime} ease-out`,
      delayed: {
        left: '0'
      },
      remove: {
        left: `-${variables.sidenavWidth + 10}px`
      }
    },
    mini: {
      position: 'absolute',
      top: '64px',
      left: '0',
      bottom: '0',
      width: '62px',
      marginLeft: '-2px',
      overflow: 'hidden'
    },
    title: Object.assign({
      height: '64px',
      lineHeight: '32px',
      padding: '16px 8px 0 16px',
      fontSize: '20px',
      marginBottom: '8px'
    }, paper(variables).divider),
    closeButton: {
      container: {
        float: 'right'
      },
      lightWaves: false
    },
    closeIcon: {
      color: variables.typographyColor,
      position: 'relative',
      top: '4px'
    },
    item: {
      padding: '8px 40px 8px 24px',
      color: variables.typographyColor
    },
    itemSelected: {
      color: variables.primaryColor
    }
  }
}
