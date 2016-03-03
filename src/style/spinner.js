import fadeInOut from './fadeInOut'

export default (variables) => {
  return {
    padding: 6,
    strokeWidth: 4,
    primaryColor: variables.spinnerPrimaryColor,
    secondaryColor: variables.spinnerSecodaryColor,
    container: {
      position: 'relative',
      margin: '0 auto'
    },
    overlay: Object.assign({
      zIndex: '1100',
      position: 'fixed',
      top: '100px',
      left: '50%',
      borderRadius: '50%'
    }, fadeInOut(variables))
  }
}
