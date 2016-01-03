export default {
  primaryColor: '#FFC107',
  primaryFontColor: 'rgba(0, 0, 0, 0.7)',
  secondaryColor: '#009688',
  secondaryFontColor: 'rgba(255, 255, 255, 0.9)',
  errorColor: '#C00',
  successColor: '#090',
  typographyColor: '#212121',

  sidenav: {
    width: '280px',
    left: '-280px',
    transition: 'left .3s ease-out',
    delayed: {
      left: '0'
    },
    remove: {
      left: '-280px'
    }
  },

  fadeInOut: {
    opacity: '0',
    transition: 'opacity .3s',
    delayed: {
      opacity: '1'
    },
    remove: {
      opacity: '0'
    }
  }
};
