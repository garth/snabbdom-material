import controller from '../controller'
import set from 'cerebral-addons/set'
import copy from 'cerebral-addons/copy'

controller.addSignals({
  menuOpened: [
    set(['demos', 'menu', 'showMenu'], true)
  ],

  menuClosed: [
    set(['demos', 'menu', 'showMenu'], false)
  ],

  simpleMenuOpened: [
    set(['demos', 'menu', 'showSimpleMenu'], true)
  ],

  simpleMenuClosed: [
    set(['demos', 'menu', 'showSimpleMenu'], false)
  ],

  selectMenuOption: [
    copy('input:/value', ['demos', 'menu', 'selectedOption'])
  ]
})
