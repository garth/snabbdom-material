import Button from '../button';

export default function DialogButton(props, children = '') {
  if (!props.style) {
    props.style = {};
  }
  if (!props.style.margin) {
    props.style.margin = '8px 8px 8px 0';
  }
  if (!props.style.padding) {
    props.style.padding = '0 8px';
  }
  return Button(props, children);
}
