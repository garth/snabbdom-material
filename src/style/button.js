export default (variables) => {
  return {
    lightWaves: variables.primaryLightWaves,
    primaryLightWaves: variables.primaryLightWaves,
    secondarylightWaves: variables.secondaryLightWaves,
    button: {
      fontSize: '16px',
      lineHeight: '36px',
      padding: '0 24px',
      margin: '8px',
      textAlign: 'center',
      minWidth: '64px',
      textTransform: 'uppercase',
      color: variables.primaryFontColor
    },
    flat: {
      enabled: {
        cursor: 'pointer'
      },
      disabled: {
        color: 'rgba(0, 0, 0, 0.35)'
      },
      primary: {
        color: variables.primaryColor
      },
      secondary: {
        color: variables.secondaryColor
      }
    },
    raised: {
      enabled: {
        cursor: 'pointer'
      },
      disabled: {
        color: 'rgba(0, 0, 0, 0.35)',
        backgroundColor: 'rgba(0, 0, 0, 0.12)'
      },
      primary: {
        color: variables.primaryFontColor,
        backgroundColor: variables.primaryColor
      },
      secondary: {
        color: variables.secondaryFontColor,
        backgroundColor: variables.secondaryColor
      }
    }
  }
}
