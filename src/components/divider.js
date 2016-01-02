import { html } from 'snabbdom-jsx';

export default function Form({ props: {
  className,
  style = {}
}}) {

  return (
    <hr
      class={{
        'paper-divider': true,
        [className]: className
      }}
      style={Object.assign({
        border: 0,
        height: '1px',
        margin: '16px 0'
      }, style)}/>
  );
}
