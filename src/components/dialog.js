import { html } from 'snabbdom-jsx';
import h from 'snabbdom/h';
import Mask from './mask';
import Divider from './divider';
import Button from './button';
import screen from './helpers/screen';
import defaultMaterial from './defaultMaterial';
import classNames from 'classnames';

function button(label, onClick) {
  if (!label) { return null; }
  return (
    <Button
      style={{
        margin: '8px 8px 8px 0',
        padding: '0 8px'
      }}
      primary
      flat
      onClick={onClick}>
      {label}
    </Button>
  );
}

export default function Dialog({
  cancelLabel,
  className = '',
  height = 130,
  hideDivider = false,
  isOpen = false,
  noPadding = false,
  okLabel,
  onCancel,
  onOk,
  style = {},
  title,
  width = 280,
  material = defaultMaterial
}, children = '') {

  // componentDidMount() {
  //   if (!this.props.ignoreResizeEvents) {
  //     window.addEventListener('resize', this._resize = () => this.forceUpdate());
  //   }
  // }

  // componentWillUnmount() {
  //   if (!this.props.ignoreResizeEvents) {
  //     window.removeEventListener('resize', this._resize);
  //   }
  // }

  const screenSize = screen.getSize();

  let top = (screenSize.height / 2) - (height / 2);
  top = top < 24 ? 24 : top;
  const maxWidth = width > screenSize.width - 80 ? screenSize.width - 80 : width;
  const left = (screenSize.width - maxWidth) / 2;
  const maxHeight = screenSize.height - 48;
  let maxContentHeight = maxHeight - 48;

  let footer = null;
  if (okLabel || cancelLabel) {
    footer = (
      <div style={{
        height: '56px',
        textAlign: 'right'
      }}>
        {hideDivider ? <span/> : (
          <Divider style={{ margin: '0' }}/>
        )}
        {button(cancelLabel, onCancel)}
        {button(okLabel, onOk)}
      </div>
    );
    maxContentHeight -= 56;
  } else {
    footer = <span/>;
  }

  let titleElement = null;
  if (title) {
    titleElement = (
      <div style={{
        fontSize: '20px',
        fontWeight: '400',
        marginBottom: children ? '24px' : '0'
      }}>{title}</div>
    );
    maxContentHeight -= 49;
  } else {
    titleElement = <span/>;
  }

  return (
    <div style={{ zIndex: '1000' }}>
      <Mask isOpen={isOpen} material={material}/>
      {isOpen ? (
        <div
          classNames={classNames(className, 'paper2')}
          style={Object.assign({
            position: 'fixed',
            zIndex: '1001',
            top: `${top}px`,
            left: `${left}px`,
            width: `${maxWidth}px`,
            maxHeight: `${maxHeight}px`,
          }, style, material.fadeInOut || defaultMaterial.fadeInOut)}>
          <div style={{ padding: noPadding ? '0' : '24px' }}>
            {titleElement}
            <div
              style={{
                maxHeight: `${maxContentHeight}px`,
                overflow: 'auto',
                margin: '0 -24px',
                padding: '0 24px'
              }}>
              {h('span', children)}
            </div>
          </div>
          {footer}
        </div>
      ) : <span/>}
    </div>
  );

}
