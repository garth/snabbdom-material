import { canUseDOM } from 'exenv'
import getScreenInfo from '../helpers/screenInfo'

let screenInfo = null
const subscribers = {}

function resize () {
  const screen = getScreenInfo()

  if (!screenInfo || screen.size !== screenInfo.size || screen.isLandscape !== screenInfo.isLandscape) {
    screenInfo = screen
    Object.keys(subscribers).forEach((eventHandler) => {
      subscribers[eventHandler](screenInfo)
    })
  }
}

export default {
  addListener (eventHandler) {
    if (typeof eventHandler !== 'function') {
      return
    }
    if (!screenInfo) {
      if (canUseDOM) {
        window.addEventListener('resize', resize)
      }
      resize()
    }
    subscribers[eventHandler] = eventHandler
    eventHandler(screenInfo)
  },

  removeListener (eventHandler) {
    delete subscribers[eventHandler]
  }
}
