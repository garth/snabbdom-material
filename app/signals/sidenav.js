import controller from '../controller'
import set from 'cerebral-addons/set'

controller.addSignals({
  sidenavOpened: [
    set('sidenavOpen', true)
  ],

  sidenavClosed: [
    set('sidenavOpen', false)
  ]
})
