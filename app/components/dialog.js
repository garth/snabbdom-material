import { Component } from 'cerebral-view-snabbdom'
import Example from './example'
import { Button, Dialog } from '../../lib'
const N = '\n'

export default Component({
  dialog: ['demos', 'dialog'],
  screenInfo: ['screen']
}, ({
  state: {
    dialog,
    screenInfo
  },
  signals
}) => (
  <div>
    <Example code="import { Dialog } from 'snabbdom-material';"/>
    <Button
      style={{ margin: '24px 0' }}
      primary
      onClick={() => signals.dialogOpened()}>
      Show Dialog
    </Button>
    <Example code={`${
    N}<Dialog${
    N}  isOpen={showDialog}${
    N}  width={400}${
    N}  height={172}${
    N}  screenInfo={screenInfo}${
    N}  title="Question?"${
    N}  footer={<span>${
    N}    <Dialog.Button onClick={onCancel} flat>Deny</Dialog.Button>${
    N}    <Dialog.Button onClick={onOk} flat primary>Confirm</Dialog.Button>${
    N}  </span>}${
    N}</Dialog>
    `}/>
    <Dialog
      isOpen={dialog.showDialog}
      width={400}
      height={172}
      screenInfo={screenInfo}
      title='Do you confirm or deny?'
      footer={<span>
        <Dialog.Button onClick={() => signals.dialogClosed()} flat>Deny</Dialog.Button>
        <Dialog.Button onClick={() => signals.dialogClosed()} flat primary>Confirm</Dialog.Button>
      </span>}>
      the details of allogation
    </Dialog>
  </div>
))
