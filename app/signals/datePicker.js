import controller from '../controller'
import set from 'cerebral-addons/set'
import copy from 'cerebral-addons/copy'

controller.addSignals({
  datePickerOpened: [
    copy('input:/value', ['demos', 'datePicker', 'pickingDate']),
    set(['demos', 'datePicker', 'showDatePicker'], true)
  ],

  datePickerChanged: [
    copy('input:/value', ['demos', 'datePicker', 'pickingDate'])
  ],

  datePickerNavigate: [
    copy('input:/value', ['demos', 'datePicker', 'pickedCalendar'])
  ],

  datePickerSelected: [
    copy('input:/value', ['demos', 'datePicker', 'pickedDate']),
    set(['demos', 'datePicker', 'showDatePicker'], false)
  ],

  datePickerCanceled: [
    set(['demos', 'datePicker', 'showDatePicker'], false)
  ]
})
