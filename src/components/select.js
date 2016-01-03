import { html } from 'snabbdom-jsx';
import h from 'snabbdom/h';
import Input from './input';
import Menu from './menu';
import defaultMaterial from './defaultMaterial';

export default function Select({
  className,
  isError,
  isOpen,
  isSuccess,
  label = '',
  message = '',
  onChange,
  onClose,
  onOpen,
  options = [],
  readOnly,
  selected,
  style = {},
  value,
  material = defaultMaterial
}) {

  let selectedIndex = 0;
  let displayValue = '';
  const menuItems = options.map((option, index) => {
    const isSelected = (selected && option.label === selected.label)
     || (value !== null && option.value === value);
    if (!selectedIndex && isSelected) {
      selectedIndex = index;
      displayValue = option.label;
    }
    return (
      <Menu.Item
        class={{
          selected: isSelected
        }}
        onClick={() => onChange({ target: option })}
        onClose={onClose}>
        {option.label}
      </Menu.Item>
    );
  });

  const top = 10 - (selectedIndex * 32);

  return (
    <div
      class={{
        [className]: className
      }}
      style={Object.assign({
        position: 'relative'
      }, style)}>
      <Menu
        style={{
          position: 'relative',
          top: `${top}px`,
          width: '100%'
        }}
        isOpen={isOpen && !readOnly && !!menuItems}
        onClose={onClose}
        material={material}>
        {menuItems}
      </Menu>
      {
        h('svg', {
          attrs: {
            fill: '#aaa',
            height: 24,
            viewBox: '0 0 24 24',
            width: 24
          },
          style: {
            position: 'absolute',
            right: '0px',
            top: '28px'
          }
        }, [
          h('path', { attrs: { d: 'M7 10l5 5 5-5z' } }),
          h('path', { attrs: { d: 'M0 0h24v24H0z', fill: 'none' } })
        ])
      }
      <Input
        inputStyle={{ cursor: 'pointer' }}
        isError={isError}
        isSuccess={isSuccess}
        label={label}
        message={message}
        onClick={onOpen}
        readOnly
        value={`${displayValue}`}
        material={material}/>
    </div>
  );
}
