import { html } from 'snabbdom-jsx';

export default function TableToolbar({ props: {
  children = null,
  className = '',
  colSpan = 1,
  style = {}
}}) {

  return (
    <tr class={{
      'toolbar': true,
      [className]: className
    }}>
      <th
        colSpan={colSpan}
        style={Object.assign({
          paddingLeft: 0
        }, style)}>
        {children}
      </th>
    </tr>
  );

}
