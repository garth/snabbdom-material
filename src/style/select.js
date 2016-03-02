export default (variables) => {
  return {
    menuTopOffset: variables.menuTopOffset,
    menuItemHeight: variables.menuItemHeight,
    container: {
      position: 'relative'
    },
    menu: {
      menu: {
        position: 'relative',
        width: '100%'
      }
    },
    selected: {
      item: {
        backgroundColor: '#dcdcdc'
      }
    },
    dropDownIcon: {
      position: 'absolute',
      right: '0px',
      top: '28px',
      color: '#aaa'
    },
    input: {
      input: {
        cursor: 'pointer'
      }
    }
  }
}
