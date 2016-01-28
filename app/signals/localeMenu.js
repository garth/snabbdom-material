import controller from '../controller'
import set from 'cerebral-addons/set'
import copy from 'cerebral-addons/copy'

controller.addSignals({
  localeMenuOpened: [
    set('showLocaleMenu', true)
  ],

  localeMenuClosed: [
    set('showLocaleMenu', false)
  ],

  localeSelected: [
    copy('input:/locale', ['locale'])
  ]
})
