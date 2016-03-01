import { Component } from 'cerebral-view-snabbdom'
import Example from './example'
import { Button, Menu, Icon } from '../../lib'
const N = '\n'

export default Component({
  menu: ['demos', 'menu'],
  screenInfo: ['screen']
}, ({
  state: {
    menu,
    screenInfo
  },
  signals
}) => (
  <div>
    <Example code="import { Menu } from 'snabbdom-material';"/>

    <div style={{ margin: '24px 0' }}>
      <Menu isOpen={menu.showSimpleMenu} onClose={() => signals.simpleMenuClosed()} screenInfo={screenInfo} >
        <Menu.Item onClose={() => signals.simpleMenuClosed()}>Simple Menu Item</Menu.Item>
        <Menu.Item onClose={() => signals.simpleMenuClosed()}>Other Option</Menu.Item>
      </Menu>
      <Button style={{ margin: '0' }} primary onClick={() => signals.simpleMenuOpened()}>Simple Menu</Button>

      <div style={{ display: 'inline-block' }}>
        <Menu rightAlign isOpen={menu.showMenu} onClose={() => signals.menuClosed()} screenInfo={screenInfo}>
          <Menu.Item showIcon icon={<Icon name='settings'/>} onClose={() => signals.menuClosed()}>Settings</Menu.Item>
          <Menu.Item showIcon onClose={() => signals.menuClosed()}>No Icon</Menu.Item>
          <Menu.Separator/>
          <Menu.Item showIcon selected={menu.selectedOption === 1} onClick={() => signals.selectMenuOption({ value: 1 })} onClose={() => signals.menuClosed()}>Option 1</Menu.Item>
          <Menu.Item showIcon selected={menu.selectedOption === 2} onClick={() => signals.selectMenuOption({ value: 2 })} onClose={() => signals.menuClosed()}>Option 2</Menu.Item>
        </Menu>
        <Button style={{ margin: '0 16px' }} primary onClick={() => signals.menuOpened()}>Menu</Button>
      </div>
    </div>

    <Example code={`${
    N}<Menu${
    N}  isOpen={showSimpleMenuProp}${
    N}  onClose={hideSimpleMenuFunc}${
    N}  screenInfo={screenInfo}>${
    N}  <Menu.Item${
    N}    onClick={itemClicked}${
    N}    onClose={hideSimpleMenuFunc}>${
    N}    Simple Menu Item${
    N}  </Menu.Item>${
    N}  <Menu.Item${
    N}    onClick={itemClicked}${
    N}    onClose={hideSimpleMenuFunc}>${
    N}    Other Option${
    N}  </Menu.Item>${
    N}</Menu>${
    N}${
    N}<Menu${
    N}  rightAlign${
    N}  isOpen={showMenuProp}${
    N}  onClose={hideMenuFunc}${
    N}  screenInfo={screenInfo}>${
    N}  <Menu.Item${
    N}    showIcon${
    N}    onClose={hideMenuFunc}${
    N}    icon={<Icon name="settings"/>}${
    N}    onClick={itemClicked}>${
    N}    Settings${
    N}  </Menu.Item>${
    N}  <Menu.Item${
    N}    showIcon${
    N}    onClose={hideMenuFunc}${
    N}    onClick={itemClicked}>${
    N}    No Icon${
    N}  </Menu.Item>${
    N}  <Menu.Separator/>${
    N}  <Menu.Item${
    N}    showIcon${
    N}    onClose={hideMenuFunc}${
    N}    selected={selectedOption===1}${
    N}    onClick={() => setSelectedOption(1)}>${
    N}    Option 1${
    N}  </Menu.Item>${
    N}  <Menu.Item${
    N}    showIcon${
    N}    onClose={hideMenuFunc}${
    N}    selected={selectedOption===2}${
    N}    onClick={() => setSelectedOption(2)}>${
    N}    Option 2${
    N}  </Menu.Item>${
    N}</Menu>
    `}/>
  </div>
))
