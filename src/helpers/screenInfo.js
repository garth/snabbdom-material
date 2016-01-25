import getScreenSize from './screenSize'

const types = [ 'xs', 'sm', 'md', 'lg' ]

export default function screenInfo () {
  const { width, height } = getScreenSize()
  const size = width >= 1200 ? 4 : width >= 992 ? 3 : width >= 768 ? 2 : 1

  return {
    size,
    type: types[size - 1],
    isLandscape: width >= height,
    isPortrait: width < height
  }
}
