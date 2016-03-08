export default (variables) => {
  return {
    lightWaves: variables.buttonLightWaves,
    primaryLightWaves: variables.buttonPrimaryLightWaves,
    secondaryLightWaves: variables.buttonSecondaryLightWaves,
    button: {
      fontSize: '16px',
      lineHeight: '36px',
      padding: '0 24px',
      margin: '8px',
      textAlign: 'center',
      minWidth: '64px',
      textTransform: 'uppercase',
      color: variables.buttonFontColor,
      backgroundColor: variables.buttonBackgroundColor
    },
    flat: {
      enabled: {
        cursor: 'pointer'
      },
      disabled: {
        color: variables.buttonFlatDisabledFontColor
      },
      primary: {
        color: variables.buttonFlatPrimaryFontColor
      },
      secondary: {
        color: variables.buttonFlatSecondaryFontColor
      }
    },
    raised: {
      enabled: {
        cursor: 'pointer'
      },
      disabled: {
        color: variables.buttonDisabledFontColor,
        backgroundColor: variables.buttonDisabledBackgroundColor
      },
      primary: {
        color: variables.buttonPrimaryFontColor,
        backgroundColor: variables.buttonPrimaryBackgroundColor
      },
      secondary: {
        color: variables.buttonSecondaryFontColor,
        backgroundColor: variables.buttonSecondaryBackgroundColor
      }
    }
  }
}
