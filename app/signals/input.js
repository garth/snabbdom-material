import controller from '../controller'
import copy from 'cerebral-addons/copy'

controller.addSignals({
  emailChanged: [
    copy('input:/value', ['demos', 'input', 'email'])
  ],

  passwordChanged: [
    copy('input:/value', ['demos', 'input', 'password'])
  ],

  focused: [
    ({ input, state }) => state.set(input.path, true)
  ],

  blurred: [
    ({ input, state }) => state.set(input.path, false)
  ]
})
