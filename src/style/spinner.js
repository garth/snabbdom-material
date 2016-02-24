import fadeInOut from './fadeInOut'

export default (variables) => {
  return {
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
      borderRadius: '50%',
      padding: '6px'
    }, fadeInOut(variables))
  }
}
