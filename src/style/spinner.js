import fadeInOut from './fadeInOut'

export default (variables) => {
  return {
    padding: 6,
    strokeWidth: 4,
    primaryColor: variables.primaryColor,
    secondaryColor: variables.secondaryColor,
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
