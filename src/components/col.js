import { html } from 'snabbdom-jsx';

export default function Col({
  children,
  className,
  style = {},
  type = ''
}) {

  const colClasses = type.split(' ').reduce((classes, col) => {
    classes[`col-${col}`] = true;
    return classes;
  }, {});

  return (
    <div
      class={Object.assign({
        [className]: className
      }, colClasses)}
      style={style}>
      {children}
    </div>
  );

}
