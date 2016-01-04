import { html } from 'snabbdom-jsx';
import h from 'snabbdom/h';
import defaultMaterial from './defaultMaterial';
import Waves from './helpers/waves';
import moment from 'moment';

function getMoment(date, locale) {
  const value = moment(date);
  value.locale(locale);
  return value;
}

export default function Calendar({
  className = '',
  locale = 'en',
  month = (new Date()).getMonth(),
  onNavigate,
  onChange,
  value,
  style = {},
  titleFormat = 'MMMM YYYY',
  validDays,
  year = (new Date()).getFullYear(),
  material = defaultMaterial
}) {

  const secondaryColor = material.secondaryColor || defaultMaterial.secondaryColor;
  const secondaryFontColor = material.secondaryFontColor || defaultMaterial.secondaryFontColor;
  const typographyColor = material.typographyColor || defaultMaterial.typographyColor;

  const _onChange = function (day, validDay) {
    if (onChange && validDay) {
      onChange({ target: { value: new Date(year, month, day) } });
    }
  };

  const date = getMoment({ year, month, day: 1 }, locale);
  const localeData = moment.localeData(locale);
  const previousMonth = date.clone().subtract(1, 'months');
  const nextMonth = date.clone().add(1, 'months');
  const firstDayOfWeek = localeData.firstDayOfWeek();

  let weekdays = [];
  for (let i = 0; i < 7; i++) {
    weekdays.push(localeData.weekdaysShort({ day: () => i })[0]);
  }
  if (firstDayOfWeek > 0) {
    weekdays = [...weekdays.slice(firstDayOfWeek), ...weekdays.slice(0, firstDayOfWeek)];
  }

  const colWidth = 14.28571428;
  const today = getMoment(new Date(), locale).startOf('day');

  const days = [];
  for (let day = 1; day <= date.daysInMonth(); day++) {
    const dayDate = new Date(year, month, day);
    const validDay = !Array.isArray(validDays) || validDays.includes(day);
    const selectedDay = value && getMoment(value, locale).startOf('day').isSame(dayDate);
    days.push(
      <div
        style={{
          display: 'inline-block',
          width: `${colWidth}%`,
          textAlign: 'center',
          color: selectedDay
            ? secondaryFontColor
            : !validDay
              ? '#3e3e3e'
              : today.isSame(dayDate)
                ? secondaryColor
                : 'inherit',
          cursor: onChange && validDay ? 'pointer' : 'inherit'
        }}
        on-click={() => _onChange(day, validDay)}>
        <div
          style={{
            width: '30px',
            margin: '0 auto',
            backgroundColor: selectedDay ? secondaryColor : 'inherit',
            borderRadius: '50%'
          }}>
          {day}
        </div>
      </div>
    );
  }

  const navigation = onNavigate ? [(
    <div
      hook-insert={vnode => onNavigate ? Waves.attach(vnode.elm) : null}
      classNames="waves-circle"
      style={{
        float: 'left',
        cursor: 'pointer',
        height: '48px',
        width: '48px',
        marginLeft: '-5px'
      }}
      on-click={() => onNavigate({ target: { value: {
        year: previousMonth.get('year'),
        month: previousMonth.get('month')
      }}})}>
      {
        h('svg', {
          attrs: {
            fill: typographyColor,
            height: 24,
            viewBox: '0 0 24 24',
            width: 24
          },
          style: {
            margin: '12px 9px 6px 9px'
          }
        }, [
          h('path', { attrs: { d: 'M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z' } }),
          h('path', { attrs: { d: 'M0 0h24v24H0z', fill: 'none' } })
        ])
      }
    </div>
  ), (
    <div
      hook-insert={vnode => onNavigate ? Waves.attach(vnode.elm) : null}
      classNames="waves-circle"
      style={{
        float: 'right',
        cursor: 'pointer',
        height: '48px',
        width: '48px',
        marginRight: '-5px'
      }}
      on-click={() => onNavigate({ target: { value: {
        year: nextMonth.get('year'),
        month: nextMonth.get('month')
      }}})}>
      {
        h('svg', {
          attrs: {
            fill: typographyColor,
            height: 24,
            viewBox: '0 0 24 24',
            width: 24
          },
          style: {
            margin: '12px 9px 6px 9px'
          }
        }, [
          h('path', { attrs: { d: 'M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z' } }),
          h('path', { attrs: { d: 'M0 0h24v24H0z', fill: 'none' } })
        ])
      }
    </div>
  )] : [];

  navigation.push(
    <div
      style={{
        color: '#3e3e3e',
        textAlign: 'center',
        fontSize: '14px',
        lineHeight: '48px'
      }}>
      {date.format(titleFormat)}
    </div>
  );

  if (date.weekday()) {
    days.unshift(
      <div
        style={{
          display: 'inline-block',
          width: `${colWidth * date.weekday()}%`,
          height: '9px'
        }}
      />
    );
  }

  return (
    <div
      classNames={className}
      style={Object.assign({
        lineHeight: '30px',
        fontSize: '12px',
        width: '280px'
      }, style)}>
      <div>
        {navigation}
      </div>
      <div
        style={{
          color: '#9e9e9e',
          fontWeight: 'bold',
          textAlign: 'center'
        }}>
        {weekdays.map((day) => (
          <div
            style={{
              display: 'inline-block',
              width: `${colWidth}%`,
              textAlign: 'center'
            }}>
            {day}
          </div>
        ))}
      </div>
      <div>
        {days}
      </div>
    </div>
  );
}
