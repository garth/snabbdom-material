import controller from '../controller'
import copy from 'cerebral-addons/copy'

controller.addSignals({
  checkboxChanged: [
    copy('input:/value', ['demos', 'checkbox', 'checked'])
  ]
})
