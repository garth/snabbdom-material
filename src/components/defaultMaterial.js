const transitionTime = '.3s'
const sidenavWidth = 280

export default {
  primaryColor: '#FFC107',
  primaryFontColor: 'rgba(0, 0, 0, 0.7)',
  primaryFontColorDisabled: 'rgba(0, 0, 0, 0.45)',
  primaryLightWaves: false,
  secondaryColor: '#009688',
  secondaryFontColor: 'rgba(255, 255, 255, 0.9)',
  secondaryFontColorDisabled: 'rgba(255, 255, 255, 0.6)',
  secondaryLightWaves: true,
  errorColor: '#C00',
  successColor: '#090',
  typographyColor: '#212121',

  sidenav: {
    width: `${sidenavWidth}px`,
    left: `-${sidenavWidth + 10}px`,
    transition: `left ${transitionTime} ease-out`,
    delayed: {
      left: '0'
    },
    remove: {
      left: `-${sidenavWidth + 10}px`
    }
  },

  fadeInOut: {
    opacity: '0',
    transition: `opacity ${transitionTime}`,
    delayed: {
      opacity: '1'
    },
    remove: {
      opacity: '0'
    }
  }
}
