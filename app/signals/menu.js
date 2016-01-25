import controller from '../controller'
import set from 'cerebral-addons/set'
import inputToState from 'cerebral-addons/inputToState'

controller.signal('menuOpened', [
  set(['demos', 'menu', 'showMenu'], true)
])

controller.signal('menuClosed', [
  set(['demos', 'menu', 'showMenu'], false)
])

controller.signal('simpleMenuOpened', [
  set(['demos', 'menu', 'showSimpleMenu'], true)
])

controller.signal('simpleMenuClosed', [
  set(['demos', 'menu', 'showSimpleMenu'], false)
])

controller.signal('selectMenuOption', [
  inputToState(['value'], ['demos', 'menu', 'selectedOption'])
])
