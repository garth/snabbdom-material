/* eslint-disable react/no-unknown-property */
import { html } from 'snabbdom-jsx' // eslint-disable-line
import h from 'snabbdom/h'
import Input from './input'
import Menu from './menu'
import defaultMaterial from './defaultMaterial'

export default function Select ({
  className = '',
  isError = false,
  isOpen = false,
  isSuccess = false,
  label = '',
  message = '',
  onChange,
  onClose,
  onOpen,
  options = [],
  readOnly = false,
  screenInfo,
  selected = false,
  style = {},
  value,
  material = defaultMaterial
}) {
  let selectedIndex = 0
  let displayValue = ''
  const menuItems = options.map((option, index) => {
    const isSelected = (selected && option.label === selected.label) || (value !== null && option.value === value)
    if (!selectedIndex && isSelected) {
      selectedIndex = index
      displayValue = option.label
    }
    return (
      <Menu.Item
        style={{
          backgroundColor: isSelected ? '#dcdcdc' : ''
        }}
        onClick={() => onChange({ target: option })}
        onClose={onClose}>
        {option.label}
      </Menu.Item>
    )
  })

  const top = 10 - (selectedIndex * 32)

  return (
    <div
      classNames={className}
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
        screenInfo={screenInfo}
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
        isFocused={isOpen}
        label={label}
        message={message}
        onClick={onOpen}
        readOnly
        value={`${displayValue}`}
        material={material}/>
    </div>
  )
}
