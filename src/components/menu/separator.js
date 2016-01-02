import { html } from 'snabbdom-jsx';
import Divider from '../divider';

export default function MenuSeparator({
  className,
  style = {}
}) {

  return (
    <Divider
      className={className}
      style={Object.assign({
        height: '8px',
        margin: '0 0 8px 0'
      }, style)}/>
  );

}
