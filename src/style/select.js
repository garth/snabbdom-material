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
        backgroundColor: variables.selectSelectedItemBackgroundColor
      }
    },
    dropDownIcon: {
      position: 'absolute',
      right: '0px',
      top: '28px',
      color: variables.selectDropDownIconColor
    },
    input: {
      input: {
        cursor: 'pointer'
      }
    }
  }
}
