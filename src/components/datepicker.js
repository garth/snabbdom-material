import h from 'snabbdom/h'
import { getStyle } from '../style'
import moment from 'moment'
import Dialog from './dialog'
import Calendar from './calendar'

export default function DatePicker ({
  isOpen = false,
  locale = 'en',
  month = (new Date()).getMonth(),
  onCancel,
  onChange,
  onNavigate,
  onOk,
  pickingValue,
  screenInfo,
  style,
  validDays,
  year = (new Date()).getFullYear()
}) {
  const styles = getStyle('datepicker', style)
  const { isPortrait } = screenInfo
  const displayDate = pickingValue ? moment(pickingValue) : moment({ year, month, day: 1 })
  displayDate.locale(locale)

  const dateLines = !pickingValue
    ? [ displayDate.format('MMM') ]
    : isPortrait
      ? [ displayDate.format('ddd MMM D') ]
      : [
        displayDate.format('ddd'),
        displayDate.format('MMM D')
      ]

  return Dialog({
    isOpen,
    footer: h('span', {}, [
      Dialog.Button({
        flat: true,
        onClick: onCancel
      }, 'Cancel'),
      Dialog.Button({
        flat: true,
        primary: true,
        onClick: pickingValue ? () => onOk({ target: { value: pickingValue } }) : null
      }, 'OK')
    ]),
    width: isPortrait ? styles.portraitWidth : styles.landscapeWidth,
    height: isPortrait ? styles.portraitHeight : styles.landscapeHeight,
    hideDivider: true,
    noPadding: true,
    screenInfo,
    style: styles.datepicker
  }, [
    h('div', {
      style: Object.assign({}, styles.title, isPortrait ? styles.titlePortrait : styles.titleLandscape)
    }, [
      h('div', { style: styles.titleYear }, displayDate.get('year')),
      h('div', { style: styles.titleDate }, dateLines.map((line) => h('div', {}, line)))
    ]),
    Calendar({
      locale,
      month,
      onChange,
      onNavigate,
      validDays,
      value: pickingValue,
      year,
      style: isPortrait ? styles.calendarPortrait : styles.calendarLandscape
    })
  ])
}
