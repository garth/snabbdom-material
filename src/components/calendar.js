import h from 'snabbdom/h'
import { getStyle } from '../style'
import Waves from './helpers/waves'
import moment from 'moment'

function getMoment (date, locale) {
  const value = moment(date)
  value.locale(locale)
  return value
}

export default function Calendar ({
  locale = 'en',
  month = (new Date()).getMonth(),
  onChange,
  onNavigate,
  style,
  titleFormat = 'MMMM YYYY',
  validDays,
  value,
  year = (new Date()).getFullYear()
}) {
  const styles = getStyle('calendar', style)

  const _onChange = function (day, validDay) {
    if (onChange && validDay) {
      onChange({ target: { value: new Date(year, month, day) } })
    }
  }

  const date = getMoment({ year, month, day: 1 }, locale)
  const localeData = moment.localeData(locale)
  const previousMonth = date.clone().subtract(1, 'months')
  const nextMonth = date.clone().add(1, 'months')
  const firstDayOfWeek = localeData.firstDayOfWeek()

  let weekdays = []
  for (let i = 0; i < 7; i++) {
    weekdays.push(localeData.weekdaysShort({ day: () => i })[0])
  }
  if (firstDayOfWeek > 0) {
    weekdays = [...weekdays.slice(firstDayOfWeek), ...weekdays.slice(0, firstDayOfWeek)]
  }

  const colWidth = 14.28571428
  const today = getMoment(new Date(), locale).startOf('day')

  const days = []
  for (let day = 1; day <= date.daysInMonth(); day++) {
    const dayDate = new Date(year, month, day)
    const validDay = !Array.isArray(validDays) || validDays.includes(day)
    const selectedDay = value && getMoment(value, locale).startOf('day').isSame(dayDate)
    days.push(h('div', {
      style: Object.assign(
        { width: `${colWidth}%` },
        styles.dayContainer,
        selectedDay
          ? styles.dayContainerSelected
          : !validDay
            ? styles.dayContainerInvalid
            : today.isSame(dayDate)
              ? Object.assign({}, styles.dayContainerToday, styles.dayContainerSelectable)
              : styles.dayContainerSelectable
      ),
      on: {
        click: () => _onChange(day, validDay)
      }
    }, [
      h('div', {
        style: Object.assign({}, styles.day, selectedDay ? styles.daySelected : {})
      }, `${day}`)
    ]))
  }

  const navigation = onNavigate ? [
    h('div.waves-circle', {
      hook: {
        insert: (vnode) => onNavigate ? Waves.attach(vnode.elm) : null
      },
      style: styles.previous,
      on: {
        click: () => onNavigate({
          target: {
            value: {
              year: previousMonth.get('year'),
              month: previousMonth.get('month')
            }
          }
        })
      }
    }, [
      h('svg', {
        attrs: {
          fill: styles.navIcon.color,
          height: 24,
          viewBox: '0 0 24 24',
          width: 24
        },
        style: styles.navIcon
      }, [
        h('path', { attrs: { d: 'M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z' } }),
        h('path', { attrs: { d: 'M0 0h24v24H0z', fill: 'none' } })
      ])
    ]),
    h('div.waves-circle', {
      hook: {
        insert: (vnode) => onNavigate ? Waves.attach(vnode.elm) : null
      },
      style: styles.next,
      on: {
        click: () => onNavigate({
          target: {
            value: {
              year: nextMonth.get('year'),
              month: nextMonth.get('month')
            }
          }
        })
      }
    }, [
      h('svg', {
        attrs: {
          fill: styles.navIcon.color,
          height: 24,
          viewBox: '0 0 24 24',
          width: 24
        },
        style: styles.navIcon
      }, [
        h('path', { attrs: { d: 'M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z' } }),
        h('path', { attrs: { d: 'M0 0h24v24H0z', fill: 'none' } })
      ])
    ])
  ] : []

  navigation.push(h('div', {
    style: styles.title
  }, date.format(titleFormat)))

  if (date.weekday()) {
    days.unshift(h('div', {
      style: Object.assign({
        width: `${colWidth * date.weekday()}%`
      }, styles.padding)
    }))
  }

  return h('div', {
    style: styles.container
  }, [
    h('div', {}, navigation),
    h('div', {
      style: styles.colHeadings
    }, weekdays.map((day) => h('div', {
      style: Object.assign({
        width: `${colWidth}%`
      }, styles.dayContainer)
    }, [ day ]))),
    h('div', {}, days)
  ])
}
