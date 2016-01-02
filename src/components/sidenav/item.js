import { html } from 'snabbdom-jsx';
import MenuItem from '../menu/item';

export default function SidenavItem({ props: {
  children,
  className,
  icon,
  onClick,
  selected,
  showIcon,
  style = {}
}, materialSettings: {
  primaryColor,
  typographyColor
}}) {

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
        color: selected ? primaryColor : typographyColor
      }, style)}>
      {children}
    </MenuItem>
  );
}
