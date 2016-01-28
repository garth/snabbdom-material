import controller from '../controller'
import copy from 'cerebral-addons/copy'

controller.signal('calendarChanged', [
  copy('input:/value', ['demos', 'calendar', 'selectedDate'])
])

controller.signal('calendarNavigate', [
  copy('input:/value', ['demos', 'calendar', 'calendar'])
])
