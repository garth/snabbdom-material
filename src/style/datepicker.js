export default (variables) => {
  return {
    portraitWidth: 328,
    portraitHeight: 388,
    landscapeWidth: 496,
    landscapeHeight: 292,
    datepicker: {
      dialog: {
        overflow: 'hidden'
      }
    },
    title: {
      backgroundColor: variables.secondaryColor,
      color: variables.secondaryFontColor,
      position: 'absolute'
    },
    titlePortrait: {
      width: '100%',
      height: '96px',
      marginBottom: '0',
      padding: '16px 24px'
    },
    titleLandscape: {
      width: '168px',
      height: '322px',
      marginBottom: '-56px',
      padding: '16px'
    },
    titleYear: {
      fontSize: '15px',
      marginBottom: '2px'
    },
    titleDate: {
      fontSize: '36px',
      fontWeight: '600',
      lineHeight: '40px'
    },
    calendarPortrait: {
      container: {
        margin: '104px 24px 0'
      }
    },
    calendarLandscape: {
      container: {
        margin: '8px 24px 0 192px'
      }
    }
  }
}
