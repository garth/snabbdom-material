import controller from '../controller'
import inputToState from 'cerebral-addons/inputToState'

controller.signal('emailChanged', [
  inputToState(['value'], ['demos', 'input', 'email'])
])

controller.signal('passwordChanged', [
  inputToState(['value'], ['demos', 'input', 'password'])
])

controller.signal('focused', [
  ({ input, state }) => state.set(input.path, true)
])

controller.signal('blurred', [
  ({ input, state }) => state.set(input.path, false)
])
