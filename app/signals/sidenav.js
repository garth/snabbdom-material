import controller from '../controller';
import set from 'cerebral-addons/set';

controller.signal('sidenavOpened', [
  set('sidenavOpen', true)
]);

controller.signal('sidenavClosed', [
  set('sidenavOpen', false)
]);
