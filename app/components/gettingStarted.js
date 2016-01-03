import { Component } from 'cerebral-snabbdom';
import Example from './example';

export default Component(() => (
  <div>
    <p>
      snabbdom-material depends on normalize.css, also some styles and transitions are defined in css and
      must be included in your project. With webpack simply use the <code>css-loader</code> plugin and
      include the following line in your main.js:
    </p>

    <Example code={`
import '!style!css!normalize.css/normalize.css';
import '!style!css!snabbdom-material/lib/index.css';
    `}/>

    <p>
      All snabbdom-material components accept a `material` prop which can be used to cutomise the style
      of the components. Below you can see the default style, which you can copy and modify to customise
      the look of your components. For color choices please
      see <a href="https://www.google.com/design/spec/style/color.html#color-color-palette">
        https://www.google.com/design/spec/style/color.html#color-color-palette
      </a>.
    </p>

    <Example code={`
const material = {
  primaryColor: '#FFC107',
  primaryFontColor: 'rgba(0, 0, 0, 0.7)',
  secondaryColor: '#009688',
  secondaryFontColor: 'rgba(255, 255, 255, 0.9)',
  errorColor: '#C00',
  successColor: '#090',
  typographyColor: '#212121',

  sidenav: {
    width: '280px',
    left: '-290px',
    transition: 'left .3s ease-out',
    delayed: {
      left: '0'
    },
    remove: {
      left: '-290px'
    }
  },

  fadeInOut: {
    opacity: '0',
    transition: 'opacity .3s',
    delayed: {
      opacity: '1'
    },
    remove: {
      opacity: '0'
    }
  }
};
    `}/>

  </div>
));
