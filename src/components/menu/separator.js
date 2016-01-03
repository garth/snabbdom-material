import { html } from 'snabbdom-jsx';
import Divider from '../divider';
import defaultMaterial from '../defaultMaterial';

export default function MenuSeparator({
  className,
  style = {},
  material = defaultMaterial
}) {

  return (
    <Divider
      className={className}
      style={Object.assign({
        height: '8px',
        margin: '0 0 8px 0'
      }, style)}
      material={material}/>
  );

}
