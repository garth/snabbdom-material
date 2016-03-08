// load the css
import '!style!css!./vendor/icomoon/style.css'

// load the controller
import controller from './controller'

// load the dev tools
import devtools from 'cerebral-module-devtools'
controller.addModules({
  devtools: devtools()
})

// load signals
import './signals/calendar'
import './signals/checkbox'
import './signals/datePicker'
import './signals/dialog'
import './signals/input'
import './signals/localeMenu'
import './signals/menu'
import './signals/route'
import './signals/screen'
import './signals/select'
import './signals/sidenav'
import './signals/spinner'

// hookup the screen event to the signal
import responsive from '../lib/events/responsive'
const screenChanged = controller.getSignals().screenChanged
responsive.addListener(screen => screenChanged({ screen }))

// start the router
import './router'

// mount the application
import { Component, render } from 'cerebral-view-snabbdom' // eslint-disable-line
import Application from './components/application'
const root = document.body.appendChild(document.createElement('div'))
render(() => Application(), root, controller)
