import controller from '../controller'
import copy from 'cerebral-addons/copy'

controller.signal('isLoadingChanged', [
  copy('input:/value', ['demos', 'spinner', 'isLoading'])
])
