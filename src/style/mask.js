import fadeInOut from './fadeInOut'

export default (variables) => {
  return {
    mask: {
      position: 'fixed',
      zIndex: '1000',
      top: '0',
      right: '0',
      bottom: '0',
      left: '0',
      backgroundColor: variables.maskBackgroundColor
    },
    transparent: {
      opacity: '0'
    },
    dark: fadeInOut(variables)
  }
}
