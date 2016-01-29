import controller from '../controller'
import copy from 'cerebral-addons/copy'

controller.addSignals({
  calendarChanged: [
    copy('input:/value', ['demos', 'calendar', 'selectedDate'])
  ],
  calendarNavigate: [
    copy('input:/value', ['demos', 'calendar', 'calendar'])
  ]
})
