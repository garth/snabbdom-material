import controller from '../controller';
import set from 'cerebral-addons/set';
import inputToState from 'cerebral-addons/inputToState';

controller.signal('selectChanged', [
  inputToState(['value'], ['demos', 'select', 'selected'])
]);

controller.signal('selectOpened', [
  set(['demos', 'select', 'selectOpen'], true)
]);

controller.signal('selectClosed', [
  set(['demos', 'select', 'selectOpen'], false)
]);

controller.signal('selectSuccessOpened', [
  set(['demos', 'select', 'selectSuccessOpen'], true)
]);

controller.signal('selectSuccessClosed', [
  set(['demos', 'select', 'selectSuccessOpen'], false)
]);

controller.signal('selectErrorOpened', [
  set(['demos', 'select', 'selectErrorOpen'], true)
]);

controller.signal('selectErrorClosed', [
  set(['demos', 'select', 'selectErrorOpen'], false)
]);

controller.signal('selectLargeChanged', [
  inputToState(['value'], ['demos', 'select', 'largeSelectedValue'])
]);

controller.signal('selectLargeOpened', [
  set(['demos', 'select', 'largeSelectOpen'], true)
]);

controller.signal('selectLargeClosed', [
  set(['demos', 'select', 'largeSelectOpen'], false)
]);
