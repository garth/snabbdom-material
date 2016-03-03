export default (variables) => {
  return {
    appbar: {
      container: {
        height: `${variables.appbarHeight}px`
      },
      appbar: {
        width: '100%',
        zIndex: '1',
        height: `${variables.appbarHeight}px`,
        lineHeight: '32px',
        padding: '16px 8px',
        backgroundColor: variables.appbarBackgroundColor,
        color: variables.appbarFontColor
      }
    },
    button: {
      container: {
        float: 'left',
        height: '48px',
        width: '48px',
        display: 'inline-block',
        margin: '-8px 0',
        backgroundColor: 'transparent'
      },
      lightWaves: variables.appbarButtonLightWaves,
      button: {
        fontSize: '24px',
        height: '48px',
        width: '48px',
        lineHeight: '48px',
        display: 'inline-block',
        margin: '0',
        textDecoration: 'none'
      },
      enabled: {
        color: variables.appbarButtonFontColor,
        cursor: 'pointer'
      },
      disabled: {
        color: variables.appbarButtonFontColorDisabled
      }
    },
    title: {
      fontSize: '31.5px',
      fontWeight: 'normal',
      height: '32px',
      lineHeight: '32px',
      whiteSpace: 'nowrap',
      paddingLeft: '8px',
      display: 'inline-block',
      float: 'left'
    }
  }
}
