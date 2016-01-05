import { html } from 'snabbdom-jsx';
import classNames from 'classnames';

export default function Paper({
  className = '',
  elevation = 2,
  noPadding = false,
  style = {}
}, children = '') {
  return (
    <div
      classNames={classNames(className, `paper${elevation}`, {
        padded: !noPadding
      })}
      style={Object.assign({
        lineHeight: 'inherit'
      }, style)}>
      {children}
    </div>
  );
}
