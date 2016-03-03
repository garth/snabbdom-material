import fadeInOut from './fadeInOut'

export default (variables) => {
  return {
    container: {
      zIndex: '1000'
    },
    dialog: Object.assign({
      position: 'fixed',
      zIndex: '1001'
    }, fadeInOut(variables)),
    button: {
      margin: '8px 8px 8px 0',
      padding: '0 8px'
    },
    titleContainer: {
      fontSize: '20px',
      fontWeight: '400',
      marginBottom: '24px'
    },
    titleContainerNoContent: {
      marginBottom: '0'
    },
    bodyContainer: {
      // overflow: 'auto',
      display: 'inline-flex',
      margin: '0 -24px',
      padding: '0 24px'
    },
    divider: {
      margin: '0'
    },
    footerContainer: {
      height: '56px',
      textAlign: 'right'
    }
  }
}
