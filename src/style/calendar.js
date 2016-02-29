export default (variables) => {
  return {
    lightWaves: variables.primaryLightWaves,
    container: {
      lineHeight: '30px',
      fontSize: '12px',
      width: '280px'
    },
    dayContainer: {
      display: 'inline-block',
      textAlign: 'center'
    },
    dayContainerSelectable: {
      cursor: 'pointer'
    },
    dayContainerSelected: {
      color: variables.secondaryFontColor
    },
    dayContainerInvalid: {
      color: '#3e3e3e'
    },
    dayContainerToday: {
      color: variables.secondaryColor
    },
    day: {
      width: '30px',
      margin: '0 auto',
      borderRadius: '50%'
    },
    daySelected: {
      backgroundColor: variables.secondaryColor
    },
    previous: {
      float: 'left',
      cursor: 'pointer',
      height: '48px',
      width: '48px',
      marginLeft: '-5px'
    },
    next: {
      float: 'right',
      cursor: 'pointer',
      height: '48px',
      width: '48px',
      marginRight: '-5px'
    },
    navIcon: {
      color: variables.typographyColor,
      margin: '12px 9px 6px 9px'
    },
    title: {
      color: '#3e3e3e',
      textAlign: 'center',
      fontSize: '14px',
      lineHeight: '48px'
    },
    colHeadings: {
      color: '#9e9e9e',
      fontWeight: 'bold',
      textAlign: 'center'
    },
    padding: {
      display: 'inline-block',
      height: '9px'
    }
  }
}
