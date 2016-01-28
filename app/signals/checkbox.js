import controller from '../controller'
import copy from 'cerebral-addons/copy'

controller.signal('checkboxChanged', [
  copy('input:/value', ['demos', 'checkbox', 'checked'])
])
