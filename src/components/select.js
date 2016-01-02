import { html } from 'snabbdom-jsx';
import Input from './input';
import Menu from './menu';

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
  value
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
        key={option.key || option.label}
        on-click={() => onChange({ target: option })}>
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
        onClose={onClose}>
        {menuItems}
      </Menu>
      <svg
        style={{
          position: 'absolute',
          right: '0px',
          top: '28px'
        }}
        fill="#aaa" height="24" viewBox="0 0 24 24" width="24">
        <path d="M7 10l5 5 5-5z"/>
        <path d="M0 0h24v24H0z" fill="none"/>
      </svg>
      <Input
        inputStyle={{ cursor: 'pointer' }}
        isError={isError}
        isSuccess={isSuccess}
        label={label}
        message={message}
        onClick={onOpen}
        readOnly
        value={`${displayValue}`}/>
    </div>
  );
}
