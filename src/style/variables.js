export const baseVariables = {
  primaryColor: '#FFC107',
  primaryFontColor: 'rgba(0, 0, 0, 0.7)',
  primaryFontColorDisabled: 'rgba(0, 0, 0, 0.45)',
  primaryLightWaves: false,
  secondaryColor: '#009688',
  secondaryFontColor: 'rgba(255, 255, 255, 0.9)',
  secondaryFontColorDisabled: 'rgba(255, 255, 255, 0.6)',
  secondaryLightWaves: true,
  disabledFontColor: 'rgba(0, 0, 0, 0.35)',
  labelColor: '#AAA',
  errorColor: '#C00',
  successColor: '#090',
  typographyColor: '#212121',
  transitionTime: '.3s'
}

export const getComponentVariables = (customBaseVariable) => {
  const variables = Object.assign({}, baseVariables, customBaseVariable)

  return Object.assign({
    // appbar
    appbarHeight: 64,
    appbarBackgroundColor: variables.primaryColor,
    appbarFontColor: variables.primaryFontColor,
    appbarButtonLightWaves: variables.primaryLightWaves,
    appbarButtonFontColor: variables.primaryFontColor,
    appbarButtonFontColorDisabled: variables.primaryFontColorDisabled,

    // button
    buttonLightWaves: false,
    buttonPrimaryLightWaves: variables.primaryLightWaves,
    buttonSecondaryLightWaves: variables.secondaryLightWaves,
    buttonFontColor: variables.typographyColor,
    buttonPrimaryFontColor: variables.primaryFontColor,
    buttonSecondaryFontColor: variables.secondaryFontColor,
    buttonDisabledFontColor: variables.disabledFontColor,
    buttonFlatPrimaryFontColor: variables.primaryColor,
    buttonFlatSecondaryFontColor: variables.secondaryColor,
    buttonFlatDisabledFontColor: variables.disabledFontColor,
    buttonBackgroundColor: 'transparent',
    buttonPrimaryBackgroundColor: variables.primaryColor,
    buttonSecondaryBackgroundColor: variables.secondaryColor,
    buttonDisabledBackgroundColor: 'rgba(0, 0, 0, 0.12)',

    // calendar
    calendarLightWaves: variables.primaryLightWaves,
    calendarSelectedDayFontColor: variables.secondaryFontColor,
    calendarSelectedDayBackgroundColor: variables.secondaryColor,
    calendarTodayFontColor: variables.secondaryColor,
    calendarNavIconColor: variables.typographyColor,
    calendarTitleFontColor: '#3e3e3e',
    calendarHeadingFontColor: '#9e9e9e',

    // checkbox
    checkboxLightWaves: false,
    checkboxIconColor: 'rgba(0, 0, 0, 0.54)',
    checkboxIconSelectedColor: variables.secondaryColor,

    // datepicker
    datepickerTitleBackgroundColor: variables.secondaryColor,
    datepickerTitleColor: variables.secondaryFontColor,

    // input
    inputBackgroundColor: 'transparent',
    inputLabelColor: variables.labelColor,
    inputLabelFocusedColor: variables.secondaryColor,
    inputErrorColor: variables.errorColor,
    inputSuccessColor: variables.successColor,

    // mask
    maskBackgroundColor: 'rgba(0, 0, 0, 0.15)',

    // menu
    menuTopOffset: 10,
    menuTopPadding: 10,
    menuItemHeight: 32,
    menuBackgroundColor: '#fff',
    menuFontColor: variables.typographyColor,

    // paper
    paperBackgroundColor: '#fdfdfd',

    // select
    selectSelectedItemBackgroundColor: '#dcdcdc',
    selectDropDownIconColor: variables.labelColor,

    // sidenav
    sidenavWidth: 280,
    sidenavCloseLightWaves: false,
    sidenavCloseIconColor: variables.typographyColor,
    sidenavItemColor: variables.typographyColor,
    sidenavItemSelectedColor: variables.primaryColor,

    // spinner
    spinnerPrimaryColor: variables.primaryColor,
    spinnerSecodaryColor: variables.secondaryColor,

    // typography
    typographyPrimaryColor: variables.primaryColor,
    typographySecodaryColor: variables.secondaryColor
  }, variables)
}
