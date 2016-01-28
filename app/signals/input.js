import controller from '../controller'
import copy from 'cerebral-addons/copy'

controller.signal('emailChanged', [
  copy('input:/value', ['demos', 'input', 'email'])
])

controller.signal('passwordChanged', [
  copy('input:/value', ['demos', 'input', 'password'])
])

controller.signal('focused', [
  ({ input, state }) => state.set(input.path, true)
])

controller.signal('blurred', [
  ({ input, state }) => state.set(input.path, false)
])
