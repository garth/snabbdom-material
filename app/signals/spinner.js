import controller from '../controller'
import copy from 'cerebral-addons/copy'

controller.addSignals({
  isLoadingChanged: [
    copy('input:/value', ['demos', 'spinner', 'isLoading'])
  ]
})
