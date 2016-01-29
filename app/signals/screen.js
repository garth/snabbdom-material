import controller from '../controller'
import copy from 'cerebral-addons/copy'

controller.addSignals({
  screenChanged: [
    copy('input:/screen', ['screen'])
  ]
})
