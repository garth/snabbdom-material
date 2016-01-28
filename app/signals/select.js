import controller from '../controller'
import set from 'cerebral-addons/set'
import copy from 'cerebral-addons/copy'

controller.addSignals({
  selectChanged: [
    copy('input:/value', ['demos', 'select', 'selected'])
  ],

  selectOpened: [
    set(['demos', 'select', 'selectOpen'], true)
  ],

  selectClosed: [
    set(['demos', 'select', 'selectOpen'], false)
  ],

  selectSuccessOpened: [
    set(['demos', 'select', 'selectSuccessOpen'], true)
  ],

  selectSuccessClosed: [
    set(['demos', 'select', 'selectSuccessOpen'], false)
  ],

  selectErrorOpened: [
    set(['demos', 'select', 'selectErrorOpen'], true)
  ],

  selectErrorClosed: [
    set(['demos', 'select', 'selectErrorOpen'], false)
  ],

  selectLargeChanged: [
    copy('input:/value', ['demos', 'select', 'largeSelectedValue'])
  ],

  selectLargeOpened: [
    set(['demos', 'select', 'largeSelectOpen'], true)
  ],

  selectLargeClosed: [
    set(['demos', 'select', 'largeSelectOpen'], false)
  ]
})
