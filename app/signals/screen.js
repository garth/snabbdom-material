import controller from '../controller'
import copy from 'cerebral-addons/copy'

controller.signal('screenChanged', [
  copy('input:/screen', ['screen'])
])
