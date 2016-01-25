import controller from '../controller'
import inputToState from 'cerebral-addons/inputToState'

controller.signal('calendarChanged', [
  inputToState(['value'], ['demos', 'calendar', 'selectedDate'])
])

controller.signal('calendarNavigate', [
  inputToState(['value'], ['demos', 'calendar', 'calendar'])
])
