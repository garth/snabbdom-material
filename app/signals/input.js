import controller from '../controller';
import inputToState from 'cerebral-addons/inputToState';

controller.signal('emailChanged', [
  inputToState(['value'], ['demos', 'input', 'email'])
]);

controller.signal('passwordChanged', [
  inputToState(['value'], ['demos', 'input', 'password'])
]);
