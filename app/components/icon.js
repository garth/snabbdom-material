import { Component } from 'cerebral-snabbdom';
import Example from './example';
import { Icon } from '../../lib';

export default Component(() => (
  <div>
    <Example code="import { Icon } from 'snabbdom-material';"/>
    <p>
      The <code>Icon</code> component is configured for icomoon icon fonts. Create your icon
      set on the <a href="https://icomoon.io/">icomoon</a> website, download the files and
      add them to your project. Then import the icomoon/style.css.
    </p>
    <Example code="import '!style!css!./vendor/icomoon/style.css';"/>
    <p>
      After that you can use any of your icons with the following code
      (the <code>icon-</code> prefix is not needed).
    </p>
    <Example code='<Icon name="person"/>'/>
    <p><Icon name="person"/></p>
  </div>
));
