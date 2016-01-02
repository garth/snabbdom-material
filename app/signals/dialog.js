import controller from '../controller';
import set from 'cerebral-addons/set';

controller.signal('dialogOpened', [
  set(['demos', 'dialog', 'showDialog'], true)
]);

controller.signal('dialogClosed', [
  set(['demos', 'dialog', 'showDialog'], false)
]);
