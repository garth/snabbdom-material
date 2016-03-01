export default (variables) => {
  return {
    lightWaves: false,
    label: {
      display: 'inline-block',
      cursor: 'pointer',
      margin: '14px 0',
      fontSize: '18px'
    },
    icon: {
      color: 'rgba(0, 0, 0, 0.54)',
      position: 'relative',
      top: '3px',
      display: 'inline-block',
      margin: '-14px -4px -14px -14px',
      paddingTop: '7px',
      width: '48px',
      height: '48px'
    },
    iconSelected: {
      color: variables.secondaryColor
    }
  }
}
