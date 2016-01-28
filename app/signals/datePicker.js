import controller from '../controller'
import set from 'cerebral-addons/set'
import copy from 'cerebral-addons/copy'

controller.signal('datePickerOpened', [
  copy('input:/value', ['demos', 'datePicker', 'pickingDate']),
  set(['demos', 'datePicker', 'showDatePicker'], true)
])

controller.signal('datePickerChanged', [
  copy('input:/value', ['demos', 'datePicker', 'pickingDate'])
])

controller.signal('datePickerNavigate', [
  copy('input:/value', ['demos', 'datePicker', 'pickedCalendar'])
])

controller.signal('datePickerSelected', [
  copy('input:/value', ['demos', 'datePicker', 'pickedDate']),
  set(['demos', 'datePicker', 'showDatePicker'], false)
])

controller.signal('datePickerCanceled', [
  set(['demos', 'datePicker', 'showDatePicker'], false)
])
