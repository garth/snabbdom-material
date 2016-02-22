export default (variables) => {
  return {
    width: `${variables.sidenavWidth}px`,
    left: `-${variables.sidenavWidth + 10}px`,
    transition: `left ${variables.transitionTime} ease-out`,
    delayed: {
      left: '0'
    },
    remove: {
      left: `-${variables.sidenavWidth + 10}px`
    }
  }
}
