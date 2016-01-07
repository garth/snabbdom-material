import { Component } from 'cerebral-snabbdom';
import { Typ } from '../../lib';
import Example from './example';
const N = '\n';

export default Component(({
  props: {
    material
  }
}) => (
  <div>
    <Typ headline material={material}>Import Require CSS</Typ>
    <p>
      snabbdom-material depends on normalize.css, also some styles and transitions are defined in css and
      must be included in your project. With webpack simply use the <code>css-loader</code> plugin and
      include the following line in your main.js:
    </p>

    <Example code={`${
    N}import '!style!css!normalize.css/normalize.css';${
    N}import '!style!css!snabbdom-material/lib/index.css';
    `}/>

    <Typ headline material={material}>Screen Info</Typ>
    <p>
      Many components require a <code>screenInfo</code> object to be passed in via props.
      A <code>getScreenInfo()</code> helper has been provided that will get the required object. However
      it is stongly recommended to use the <a href="#/responsiveEvents">responsive events</a> system that
      will automatically emit an updated <code>screenInfo</code> whenever it changes (such as when the
      device is rotated).
    </p>
    <Example code={`${
    N}import { getScreenInfo } from 'snabbdom-material';${
    N}const screenInfo = getScreenInfo();
    `}/>

    <Typ headline material={material}>Custom Styling</Typ>
    <p>
      All snabbdom-material components accept a <code>material</code> prop which can be used to cutomise
      the style of the components. Below you can see the default style, which you can copy and modify to
      customise the look of your components. For color choices please
      see <a href="https://www.google.com/design/spec/style/color.html#color-color-palette">
        https://www.google.com/design/spec/style/color.html#color-color-palette
      </a>.
    </p>

    <Example code={`${
    N}const material = {${
    N}  primaryColor: '#FFC107',${
    N}  primaryFontColor: 'rgba(0, 0, 0, 0.7)',${
    N}  primaryFontColorDisabled: 'rgba(0, 0, 0, 0.45)',${
    N}  primaryLightWaves: false,${
    N}  secondaryColor: '#009688',${
    N}  secondaryFontColor: 'rgba(255, 255, 255, 0.9)',${
    N}  secondaryFontColorDisabled: 'rgba(255, 255, 255, 0.6)',${
    N}  secondaryLightWaves: true,${
    N}  errorColor: '#C00',${
    N}  successColor: '#090',${
    N}  typographyColor: '#212121',${
    N}${
    N}  sidenav: {${
    N}    width: '280px',${
    N}    left: '-290px',${
    N}    transition: 'left .3s ease-out',${
    N}    delayed: {${
    N}      left: '0'${
    N}    },${
    N}    remove: {${
    N}      left: '-290px'${
    N}    }${
    N}  },${
    N}${
    N}  fadeInOut: {${
    N}    opacity: '0',${
    N}    transition: 'opacity .3s',${
    N}    delayed: {${
    N}      opacity: '1'${
    N}    },${
    N}    remove: {${
    N}      opacity: '0'${
    N}    }${
    N}  }${
    N}};
    `}/>

  </div>
));
