import controller from '../controller'
import inputToState from 'cerebral-addons/inputToState'

controller.signal('checkboxChanged', [
  inputToState(['value'], ['demos', 'checkbox', 'checked'])
])
