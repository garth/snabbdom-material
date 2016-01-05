import { html } from 'snabbdom-jsx';

export default function Icon({
  name,
  style = {}
}) {
  return (
    <i
      style={Object.assign({
        lineHeight: 'inherit'
      }, style)}
      classNames={`icon-${name}`}/>
  );
}
