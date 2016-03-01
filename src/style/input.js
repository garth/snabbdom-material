export default (variables) => {
  return {
    container: {
      position: 'relative',
      margin: '0',
      padding: '15px 0 26px 0'
    },
    input: {
      fontSize: '18px',
      padding: '10px 0',
      display: 'block',
      width: '100%',
      border: 'none',
      backgroundColor: 'transparent'
    },
    label: {
      color: '#aaa',
      fontSize: '18px',
      fontweight: 'normal',
      position: 'absolute',
      pointerEvents: 'none',
      left: '1px',
      top: '25px',
      transition: '0.2s ease all'
    },
    labelFocused: {
      top: '1px',
      fontSize: '13px',
      outline: 'none'
    },
    message: {
      fontSize: '13px',
      margin: '4px 0 -20px 0'
    },
    bar: {
      position: 'relative',
      display: 'block',
      width: '0',
      left: '50%',
      height: '2px',
      transition: '0.2s ease all'
    },
    barFocused: {
      left: '0',
      width: '100%'
    },
    errorColor: variables.errorColor,
    successColor: variables.successColor,
    labelColor: variables.secondaryColor
  }
}
