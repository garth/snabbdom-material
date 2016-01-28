import controller from '../controller'
import set from 'cerebral-addons/set'
import copy from 'cerebral-addons/copy'

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
  copy('input:/value', ['demos', 'menu', 'selectedOption'])
])
