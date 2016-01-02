import { html } from 'snabbdom-jsx';

export default function TableRow({
  children = null,
  className = '',
  onClick = null,
  style = {}
}) {

  return (
    <tr
      class={{
        [className]: className,
        clickable: onClick
      }}
      style={style}
      on-click={onClick}>
      {children}
    </tr>
  );
}
