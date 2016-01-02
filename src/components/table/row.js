import { html } from 'snabbdom-jsx';

export default function TableRow({
  children = '',
  className,
  onClick,
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
