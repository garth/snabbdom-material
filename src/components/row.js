import { html } from 'snabbdom-jsx';

export default function Row({ props: {
  children,
  className,
  style = {}
}}) {

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
