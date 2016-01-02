import controller from '../controller';
import set from 'cerebral-addons/set';
import inputToState from 'cerebral-addons/inputToState';

controller.signal('datePickerOpened', [
  inputToState(['value'], ['demos', 'datePicker', 'pickingDate']),
  set(['demos', 'datePicker', 'showDatePicker'], true)
]);

controller.signal('datePickerChanged', [
  inputToState(['value'], ['demos', 'datePicker', 'pickingDate'])
]);

controller.signal('datePickerNavigate', [
  inputToState(['value'], ['demos', 'datePicker', 'pickedCalendar'])
]);

controller.signal('datePickerSelected', [
  inputToState(['value'], ['demos', 'datePicker', 'pickedDate']),
  set(['demos', 'datePicker', 'showDatePicker'], false)
]);

controller.signal('datePickerCanceled', [
  set(['demos', 'datePicker', 'showDatePicker'], false)
]);
