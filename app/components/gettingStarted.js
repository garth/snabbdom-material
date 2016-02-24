import { Component } from 'cerebral-view-snabbdom'
import { Typ } from '../../lib'
import Example from './example'
const N = '\n'

export default Component(() => (
  <div>
    <Typ headline>Screen Info</Typ>
    <p>
      Many components require a <code>screenInfo</code> object to be passed in via props.
      A <code>getScreenInfo()</code> helper has been provided that will get the required object. However
      it is stongly recommended to use the <a href='#/responsiveEvents'>responsive events</a> system that
      will automatically emit an updated <code>screenInfo</code> whenever it changes (such as when the
      device is rotated).
    </p>
    <Example code={`${
    N}import { getScreenInfo } from 'snabbdom-material';${
    N}const screenInfo = getScreenInfo();
    `}/>

    <Typ headline>Custom Styling</Typ>
    <p>
      All snabbdom-material components accept a <code>style</code> prop which can be used to cutomise
      the style of individual components.
    </p>
    <p>
      To change the global styles add the following to your app init logic:
    </p>

    <Example code={`${
    N}import { style } from 'snabbdom-material'${
    N}${
    N}// optionally modify the style.variables here${
    N}${
    N}style.init(style.variables, {${
    N}${
    N}  // optionally set style overrides here${
    N}${
    N}})
    `}/>

  </div>
))
