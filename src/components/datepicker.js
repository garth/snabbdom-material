import { html } from 'snabbdom-jsx';
import moment from 'moment';
import Dialog from './dialog';
import Calendar from './calendar';
import screen from './helpers/screen';

export default function DatePicker({ props: {
  className,
  isOpen,
  locale = 'en',
  month = (new Date()).getMonth(),
  onCancel,
  onChange,
  onNavigate,
  onOk,
  pickingValue,
  style = {},
  validDays,
  year = (new Date()).getFullYear()
}, materialSettings: {
  secondaryColor,
  secondaryFontColor
}}) {

  // componentDidMount() {
  //   window.addEventListener('resize', this._resize = () => this.forceUpdate());
  // }

  // componentWillUnmount() {
  //   window.removeEventListener('resize', this._resize);
  // }

  const { width, height } = screen.getSize();
  const isPortrait = height > width;
  const displayDate = pickingValue ? moment(pickingValue) : moment({ year, month, day: 1 });
  displayDate.locale(locale);

  let dateLines = null;
  if (!pickingValue) {
    dateLines = [displayDate.format('MMM')];
  } else if (isPortrait) {
    dateLines = [displayDate.format('ddd MMM D')];
  } else {
    dateLines = [
      displayDate.format('ddd'),
      displayDate.format('MMM D')
    ];
  }

  return (
    <Dialog
      isOpen={isOpen}
      onOk={pickingValue ? () => onOk({ target: { value: this.props.pickingValue } }) : null}
      okLabel="OK"
      onCancel={onCancel}
      cancelLabel="Cancel"
      width={isPortrait ? 328 : 496}
      height={isPortrait ? 388 : 292}
      hideDivider
      noPadding
      ignoreResizeEvents
      className={className}
      style={Object.assign({ overflow: 'hidden' }, style)}>
      <div
        style={{
          width: isPortrait ? '100%' : '168px',
          height: isPortrait ? '96px' : '322px',
          marginBottom: isPortrait ? 0 : '-56px',
          backgroundColor: secondaryColor,
          color: secondaryFontColor,
          padding: isPortrait ? '16px 24px' : '16px',
          position: 'absolute'
        }}>
        <div style={{ fontSize: '15px', marginBottom: '2px' }}>
          {displayDate.get('year')}
        </div>
        <div style={{ fontSize: '36px', fontWeight: 600, lineHeight: '40px' }}>
          {dateLines.map((line, index) => (
            <div key={index}>{line}</div>
          ))}
        </div>
      </div>
      <Calendar
        locale={locale}
        month={month}
        onChange={onChange}
        onNavigate={onNavigate}
        validDays={validDays}
        value={pickingValue}
        year={year}
        style={{
          margin: isPortrait ? '104px 24px 0' : '8px 24px 0 192px'
        }}/>
    </Dialog>
  );
}
