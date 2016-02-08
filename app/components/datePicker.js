import { Component } from 'cerebral-view-snabbdom'
import Example from './example'
import { Button, DatePicker } from '../../lib'
const N = '\n'

export default Component({
  locale: ['locale'],
  datePicker: ['demos', 'datePicker'],
  screenInfo: ['screen']
}, ({
  props: {
    material
  },
  state: {
    locale,
    datePicker,
    screenInfo
  },
  signals
}) => (
  <div>
    <Example code="import { DatePicker } from 'snabbdom-material';"/>
    <Button
      primary
      onClick={() => signals.datePickerOpened({ value: datePicker.pickedDate })}
      material={material}>
      Pick Date
    </Button>
    Picked Date: {datePicker.pickedDate ? datePicker.pickedDate.toDateString() : 'none'}
    <Example code={`${
    N}<DatePicker${
    N}  locale={locale}${
    N}  isOpen={showDatePicker}${
    N}  screenInfo={screenInfo}${
    N}  year={year}${
    N}  month={month}${
    N}  pickingValue={pickingDate}${
    N}  onChange={onChange}${
    N}  onNavigate={onNavigate}${
    N}  onOk={onOk}${
    N}  onCancel={onCancel}${
    N}  material={material}/>
    `}/>
    <p>
      The locale will default to <code>en</code>, to use any other locale you must ensure that you have
      first <a href='http://momentjs.com/docs/#/i18n/loading-into-browser/'>loaded the locale</a> into
      moment.js.
    </p>
    <DatePicker
      locale={locale}
      isOpen={datePicker.showDatePicker}
      screenInfo={screenInfo}
      year={datePicker.pickedCalendar.year}
      month={datePicker.pickedCalendar.month}
      pickingValue={datePicker.pickingDate}
      onChange={(e) => signals.datePickerChanged({ value: e.target.value })}
      onNavigate={(e) => signals.datePickerNavigate({ value: e.target.value })}
      onOk={(e) => signals.datePickerSelected({ value: e.target.value })}
      onCancel={() => signals.datePickerCanceled()}
      material={material}/>
  </div>
))
