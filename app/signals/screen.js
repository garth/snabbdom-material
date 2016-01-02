import controller from '../controller';
import inputToState from 'cerebral-addons/inputToState';

controller.signal('screenChanged', [
  inputToState(['screen'], ['screen'])
]);
