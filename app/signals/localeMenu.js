import controller from '../controller'
import set from 'cerebral-addons/set'
import inputToState from 'cerebral-addons/inputToState'

controller.signal('localeMenuOpened', [
  set('showLocaleMenu', true)
])

controller.signal('localeMenuClosed', [
  set('showLocaleMenu', false)
])

controller.signal('localeSelected', [
  inputToState(['locale'], ['locale'])
])
