import controller from '../controller'
import set from 'cerebral-addons/set'
import copy from 'cerebral-addons/copy'

controller.signal('localeMenuOpened', [
  set('showLocaleMenu', true)
])

controller.signal('localeMenuClosed', [
  set('showLocaleMenu', false)
])

controller.signal('localeSelected', [
  copy('input:/locale', ['locale'])
])
