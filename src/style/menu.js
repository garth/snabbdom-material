import fadeInOut from './fadeInOut'

export default (variables) => {
  return {
    menuTopPadding: variables.menuTopPadding,
    menuItemHeight: variables.menuItemHeight,
    container: {
      zIndex: '1000',
      position: 'relative',
      height: '0',
      overflow: 'visible'
    },
    menu: Object.assign({
      zIndex: '1001',
      padding: `${variables.menuTopPadding}px 0`,
      backgroundColor: '#fff',
      color: '#000',
      position: 'absolute',
      overflowY: 'auto',
      scrollbar: 'width: 4px',
      top: '-8px'
    }, fadeInOut(variables)),
    iconContainer: {
      display: 'inline-block',
      width: '48px',
      lineHeight: `${variables.menuItemHeight}px`,
      fontSize: '20px'
    },
    icon: {
      color: '#000000',
      position: 'relative',
      top: '4px'
    },
    item: {
      padding: '0 40px 0 24px',
      lineHeight: `${variables.menuItemHeight}px`,
      cursor: 'pointer',
      whiteSpace: 'nowrap',
      display: 'block'
    },
    itemText: {
      display: 'inline-block',
      fontSize: '16px'
    },
    separator: {
      height: '8px',
      margin: '0 0 8px 0'
    }
  }
}
