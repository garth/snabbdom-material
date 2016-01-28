import controller from '../controller'
import set from 'cerebral-addons/set'

controller.addSignals({
  dialogOpened: [
    set(['demos', 'dialog', 'showDialog'], true)
  ],

  dialogClosed: [
    set(['demos', 'dialog', 'showDialog'], false)
  ]
})
