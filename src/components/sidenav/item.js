import { html } from 'snabbdom-jsx';
import h from 'snabbdom/h';
import MenuItem from '../menu/item';
import defaultMaterial from '../defaultMaterial';

export default function SidenavItem({
  className,
  icon,
  onClick,
  selected,
  showIcon,
  style = {},
  material = defaultMaterial
}, children = '') {

  return (
    <MenuItem
      icon={icon}
      onClick={onClick}
      selected={false}
      showIcon={showIcon}
      class={{
        [className]: className
      }}
      style={Object.assign({
        padding: '8px 40px 8px 24px',
        color: selected
          ? material.primaryColor || defaultMaterial.primaryColor
          : material.typographyColor || defaultMaterial.typographyColor
      }, style)}
      material={material}>
      {h('span', children)}
    </MenuItem>
  );
}
