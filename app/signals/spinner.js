import controller from '../controller';
import inputToState from 'cerebral-addons/inputToState';

controller.signal('isLoadingChanged', [
  inputToState(['value'], ['demos', 'spinner', 'isLoading'])
]);
