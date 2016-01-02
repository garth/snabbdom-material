import { html } from 'snabbdom-jsx';

export default function Row({
  className,
  style = {}
}, children = '') {

  return (
    <div
      class={{
        row: true,
        [className]: className
      }}
      style={style}>
      {children}
    </div>
  );

}
