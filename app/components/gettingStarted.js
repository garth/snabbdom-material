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
    N}import { getScreenInfo } from 'snabbdom-material'${
    N}const screenInfo = getScreenInfo()
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
    N}style.init(style.getComponentVariables({${
    N}${
    N}  // optionally set custom style base variables here${
    N}${
    N}}), {${
    N}${
    N}  // optionally set style overrides here${
    N}${
    N}})
    `}/>

    <Typ headline>Default Variables</Typ>

    <Example code={`${
    N}export const baseVariables = {${
    N}  primaryColor: '#FFC107',${
    N}  primaryFontColor: 'rgba(0, 0, 0, 0.7)',${
    N}  primaryFontColorDisabled: 'rgba(0, 0, 0, 0.45)',${
    N}  primaryLightWaves: false,${
    N}  secondaryColor: '#009688',${
    N}  secondaryFontColor: 'rgba(255, 255, 255, 0.9)',${
    N}  secondaryFontColorDisabled: 'rgba(255, 255, 255, 0.6)',${
    N}  secondaryLightWaves: true,${
    N}  disabledFontColor: 'rgba(0, 0, 0, 0.35)',${
    N}  labelColor: '#AAA',${
    N}  errorColor: '#C00',${
    N}  successColor: '#090',${
    N}  typographyColor: '#212121',${
    N}  transitionTime: '.3s'${
    N}}${
    N}${
    N}export const getComponentVariables = (customBaseVariable) => {${
    N}  const variables = Object.assign({}, baseVariables, customBaseVariable)${
    N}${
    N}  return Object.assign({${
    N}    // appbar${
    N}    appbarHeight: 64,${
    N}    appbarBackgroundColor: variables.primaryColor,${
    N}    appbarFontColor: variables.primaryFontColor,${
    N}    appbarButtonLightWaves: variables.primaryLightWaves,${
    N}    appbarButtonFontColor: variables.primaryFontColor,${
    N}    appbarButtonFontColorDisabled: variables.primaryFontColorDisabled,${
    N}  ${
    N}    // button${
    N}    buttonLightWaves: variables.primaryLightWaves,${
    N}    buttonPrimaryLightWaves: variables.primaryLightWaves,${
    N}    buttonSecondarylightWaves: variables.secondaryLightWaves,${
    N}    buttonFontColor: variables.primaryFontColor,${
    N}    buttonPrimaryFontColor: variables.primaryFontColor,${
    N}    buttonSecondaryFontColor: variables.secondaryFontColor,${
    N}    buttonDisabledFontColor: variables.disabledFontColor,${
    N}    buttonFlatPrimaryFontColor: variables.primaryColor,${
    N}    buttonFlatSecondaryFontColor: variables.secondaryColor,${
    N}    buttonFlatDisabledFontColor: variables.disabledFontColor,${
    N}    buttonBackgroundColor: 'transparent',${
    N}    buttonPrimaryBackgroundColor: variables.primaryColor,${
    N}    buttonSecondaryBackgroundColor: variables.secondaryColor,${
    N}    buttonDisabledBackgroundColor: 'rgba(0, 0, 0, 0.12)',${
    N}  ${
    N}    // calendar${
    N}    calendarLightWaves: variables.primaryLightWaves,${
    N}    calendarSelectedDayFontColor: variables.secondaryFontColor,${
    N}    calendarSelectedDayBackgroundColor: variables.secondaryColor,${
    N}    calendarTodayFontColor: variables.secondaryColor,${
    N}    calendarNavIconColor: variables.typographyColor,${
    N}    calendarTitleFontColor: '#3e3e3e',${
    N}    calendarHeadingFontColor: '#9e9e9e',${
    N}  ${
    N}    // checkbox${
    N}    checkboxLightWaves: false,${
    N}    checkboxIconColor: 'rgba(0, 0, 0, 0.54)',${
    N}    checkboxIconSelectedColor: variables.secondaryColor,${
    N}  ${
    N}    // datepicker${
    N}    datepickerTitleBackgroundColor: variables.secondaryColor,${
    N}    datepickerTitleColor: variables.secondaryFontColor,${
    N}  ${
    N}    // input${
    N}    inputBackgroundColor: 'transparent',${
    N}    inputLabelColor: variables.labelColor,${
    N}    inputLabelFocusedColor: variables.secondaryColor,${
    N}    inputErrorColor: variables.errorColor,${
    N}    inputSuccessColor: variables.successColor,${
    N}  ${
    N}    // mask${
    N}    maskBackgroundColor: 'rgba(0, 0, 0, 0.15)',${
    N}  ${
    N}    // menu${
    N}    menuTopOffset: 10,${
    N}    menuTopPadding: 10,${
    N}    menuItemHeight: 32,${
    N}    menuBackgroundColor: '#fff',${
    N}    menuFontColor: variables.typographyColor,${
    N}  ${
    N}    // paper${
    N}    paperBackgroundColor: '#fdfdfd',${
    N}  ${
    N}    // select${
    N}    selectSelectedItemBackgroundColor: '#dcdcdc',${
    N}    selectDropDownIconColor: variables.labelColor,${
    N}  ${
    N}    // sidenav${
    N}    sidenavWidth: 280,${
    N}    sidenavCloseLightWaves: false,${
    N}    sidenavCloseIconColor: variables.typographyColor,${
    N}    sidenavItemColor: variables.typographyColor,${
    N}    sidenavItemSelectedColor: variables.primaryColor,${
    N}  ${
    N}    // spinner${
    N}    spinnerPrimaryColor: variables.primaryColor,${
    N}    spinnerSecodaryColor: variables.secondaryColor,${
    N}  ${
    N}    // typography${
    N}    typographyPrimaryColor: variables.primaryColor,${
    N}    typographySecodaryColor: variables.secondaryColor${
    N}  }, variables)${
    N}}
    `}/>

  </div>
))
