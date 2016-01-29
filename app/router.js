import router from 'cerebral-module-router'
import controller from './controller'

controller.addModules({
  router: router({
    '/': 'introductionPageOpened',
    '/gettingStarted': 'gettingStartedPageOpened',
    '/paper': 'paperPageOpened',
    '/typography': 'typographyPageOpened',
    '/appbar': 'appbarPageOpened',
    '/sidenav': 'sidenavPageOpened',
    '/form': 'formPageOpened',
    '/button': 'buttonPageOpened',
    '/input': 'inputPageOpened',
    '/select': 'selectPageOpened',
    '/checkbox': 'checkboxPageOpened',
    '/gridSystem': 'gridSystemPageOpened',
    '/icon': 'iconPageOpened',
    '/menu': 'menuPageOpened',
    '/dialog': 'dialogPageOpened',
    '/datePicker': 'datePickerPageOpened',
    '/table': 'tablePageOpened',
    '/spinner': 'spinnerPageOpened',
    '/calendar': 'calendarPageOpened',
    '/responsiveEvents': 'responsiveEventsPageOpened',
    '/*': 'notFoundPageOpened'
  }, {
    onlyHash: true
  })
})
