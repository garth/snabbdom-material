import { html } from 'snabbdom-jsx';

export default function TableRow({
  className,
  onClick,
  style = {}
}, children = '') {

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
