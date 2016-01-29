import controller from '../controller'
import setRoute from '../actions/setRoute'

controller.addSignals({
  introductionPageOpened: [
    setRoute('introduction', 'Introduction')
  ],

  gettingStartedPageOpened: [
    setRoute('gettingStarted', 'Getting Started')
  ],

  paperPageOpened: [
    setRoute('paper', 'Paper')
  ],

  typographyPageOpened: [
    setRoute('typography', 'Typography')
  ],

  appbarPageOpened: [
    setRoute('appbar', 'Appbar')
  ],

  sidenavPageOpened: [
    setRoute('sidenav', 'Sidenav')
  ],

  formPageOpened: [
    setRoute('form', 'Form')
  ],

  buttonPageOpened: [
    setRoute('button', 'Button')
  ],

  inputPageOpened: [
    setRoute('input', 'Input')
  ],

  selectPageOpened: [
    setRoute('select', 'Select')
  ],

  checkboxPageOpened: [
    setRoute('checkbox', 'Checkbox')
  ],

  gridSystemPageOpened: [
    setRoute('gridSystem', 'Grid System')
  ],

  iconPageOpened: [
    setRoute('icon', 'Icon')
  ],

  menuPageOpened: [
    setRoute('menu', 'Menu')
  ],

  dialogPageOpened: [
    setRoute('dialog', 'Dialog')
  ],

  datePickerPageOpened: [
    setRoute('datePicker', 'Date Picker')
  ],

  tablePageOpened: [
    setRoute('table', 'Table')
  ],

  spinnerPageOpened: [
    setRoute('spinner', 'Spinner')
  ],

  calendarPageOpened: [
    setRoute('calendar', 'Calendar')
  ],

  responsiveEventsPageOpened: [
    setRoute('responsiveEvents', 'Responsive Events')
  ],

  notFoundPageOpened: [
    setRoute('notFound', 'Page Not Found')
  ]
})
