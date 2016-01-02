import { html } from 'snabbdom-jsx';

export default function Calendar({
  children = '',
  className,
  style = {}
}) {

  return (
    <div
      class={{
        [className]: className
      }}
      style={Object.assign({
        fontSize: '31.5px',
        fontWeight: 'normal',
        height: '32px',
        lineHeight: '32px',
        whiteSpace: 'nowrap',
        paddingLeft: '8px',
        display: 'inline-block',
        float: 'left'
      }, style)}>
      {children}
    </div>
  );

}
