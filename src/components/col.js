import { html } from 'snabbdom-jsx';

export default function Col({
  className,
  style = {},
  type = ''
}, children = '') {

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
