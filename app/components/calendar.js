import { Component } from 'cerebral-view-snabbdom'
import Example from './example'
import { Calendar, Col, Row, Paper } from '../../lib'
const N = '\n'

export default Component({
  locale: ['locale'],
  calendar: ['demos', 'calendar']
}, ({
  state: {
    locale,
    calendar
  },
  signals
}) => (
  <div>
    <Example code="import { Calendar } from 'snabbdom-material';"/>
    <p>
      The locale will default to <code>en</code>, to use any other locale you must ensure that you have
      first <a href='http://momentjs.com/docs/#/i18n/loading-into-browser/'>loaded the locale</a> into
      moment.js.
    </p>
    <Row>
      <Col type='sm-6'>
        <Paper style={{ paper: { margin: '24px auto', padding: '12px', width: '328px' } }}>
          <Calendar locale={locale}/>
        </Paper>
      </Col>
      <Col type='sm-6'>
        <Paper style={{ paper: { margin: '24px auto', padding: '12px', width: '328px' } }}>
          <Calendar
            locale={locale}
            titleFormat='MMM'
            year={2010}
            month={0}
            value={new Date(2010, 0, 5)}/>
        </Paper>
      </Col>
    </Row>
    <Example code={`${
    N}// Non interactive calendar of the current month${
    N}<Calendar locale={locale}/>${
    N}${
    N}// Non interactive calendar of given month${
    N}<Calendar locale={locale} titleFormat="MMM" year={2010} month={0} value={new Date(2010, 0, 5)}/>
    `}/>
    <Paper style={{ paper: { margin: '24px auto', padding: '12px', width: '328px' } }}>
      <Calendar
        locale={locale}
        year={calendar.calendar.year}
        month={calendar.calendar.month}
        value={calendar.selectedDate}
        onChange={(e) => signals.calendarChanged({ value: e.target.value })}
        onNavigate={(e) => signals.calendarNavigate({ value: e.target.value })}/>
    </Paper>
    <Example code={`${
    N}// Interactive calendar${
    N}<Calendar${
    N}  locale={locale}${
    N}  year={year}${
    N}  month={month}${
    N}  value={selectedDate}${
    N}  onChange={setDate}${
    N}  onNavigate={updateCalendar}/>
    `}/>
  </div>
))
