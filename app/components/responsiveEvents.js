import { Component } from 'cerebral-snabbdom';
import Example from './example';
const N = '\n';

export default Component({
  screen: ['screen']
}, ({
  state: {
    screen
  }
}) => (
  <div>
    <Example code="import { events } from 'snabbdom-material';"/>
    <p>
      Responsive Events are emitted whenever the screen type or orientation changes. This can be used to
      modify the UI to suite the device. Unlike CSS media queries which change the style of always present
      elements, this feature can be used to completely change what the application renders. Meaning that your
      app should only render the elements needed on mobile and not just hide the desktop elements.
    </p>
    <p>
      How you use this feature depends on what framework you use for your application. With Cerebral you would
      send a signal and store the <code>screenInfo</code> in the state tree, which would cause your application
      components which observe the <code>/screenInfo</code> object in your store to re-render.
    </p>
    <p>
      This <code>screenInfo</code> object is the same as required by some snabbdom-material components.
    </p>
    <Example code={`${
    N}// example cerebral setup${
    N}controller.signal('screenChanged', [${
    N}  inputToState(['screenInfo'], ['screenInfo'])${
    N}]);${
    N}events.responsive.addListener(screenInfo => controller.signals.screenInfoChanged({ screenInfo }));
    `}/>
    <p>
      Event listeners receive a screen object which looks like:
    </p>
    <Example code={`${
    N}{${
    N}  type: 'xs',${
    N}  size: 1,${
    N}  isLandscape: true,${
    N}  isPortrait: false${
    N}}
    `}/>
    <p>
      following the same reponsive configuration as bootstrap, <code>type</code> can be one
      of <code>'xs'</code>, <code>'sm'</code>, <code>'md'</code> or <code>'lg'</code>. <code>size</code> is
      the same as <code>type</code> (<code>xs=1, sm=2, md=3, lg=4</code>), but allows you to
      filter by range (<code>if (screen.size > 2) {}</code>).
    </p>
    <div classNames={`paper${screen.size} padded`}>
      As the screen gets larger this paper will rise.<br/>
      The screen is {screen.type}.
    </div>
    <p>
      The event is only triggered when these values change and not on every window resize event, so updating
      the UI every time this event is triggered should be ok.
    </p>
  </div>
));
