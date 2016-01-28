// load the css
import '!style!css!normalize.css/normalize.css'
import '!style!css!../lib/index.css'
import '!style!css!./vendor/icomoon/style.css'

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
import controller from './controller'
import responsive from '../lib/events/responsive'
const screenChanged = controller.getSignals().screenChanged
responsive.addListener(screen => screenChanged({ screen }))

// start the router
import './router'

// mount the application
import { Component, render } from 'cerebral-view-snabbdom' // eslint-disable-line
import Application from './components/application'
const root = document.body.appendChild(document.createElement('div'))
render(() => <Application/>, root, controller)
