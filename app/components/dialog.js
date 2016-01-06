import { Component } from 'cerebral-snabbdom';
import Example from './example';
import { Button, Dialog } from '../../lib';
const N = '\n';

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
    <Example code={`${
    N}<Dialog${
    N}  isOpen={showDialog}${
    N}  width={400}${
    N}  height={172}${
    N}  screenInfo={screenInfo}${
    N}  title="Question?"${
    N}  okLabel="OK"${
    N}  onOk={onOk}${
    N}  cancelLabel="Cancel"${
    N}  onCancel={onCancel}>${
    N}</Dialog>
    `}/>
    <Button style={{ margin: '24px 0' }} primary onClick={() => signals.dialogOpened()}>Show Dialog</Button>
    <Dialog
      isOpen={dialog.showDialog}
      width={400}
      height={172}
      screenInfo={screenInfo}
      title="Do you confirm or deny?"
      okLabel="Confirm"
      onOk={() => signals.dialogClosed()}
      cancelLabel="Deny"
      onCancel={() => signals.dialogClosed()}>
      the details of allogation
    </Dialog>
  </div>
));
