import { Component } from 'cerebral-snabbdom';
import Example from './example';
import { Button, Menu } from '../../lib';
import Icon from './icon';
const N = '\n';

export default Component({
  menu: ['demos', 'menu']
}, ({
  state: {
    menu
  },
  signals
}) => (
  <div>
    <Example code="import { Menu } from 'snabbdom-material';"/>
    <Example code={`${
    N}<Menu isOpen={showSimpleMenuProp} onClose={hideSimpleMenuFunc}>${
    N}  <Menu.Item onClick={itemClicked} onClose={hideSimpleMenuFunc}>Simple Menu Item</Menu.Item>${
    N}  <Menu.Item onClick={itemClicked} onClose={hideSimpleMenuFunc}>Other Option</Menu.Item>${
    N}</Menu>${
    N}${
    N}<Menu rightAlign isOpen={showMenuProp} onClose={hideMenuFunc}>${
    N}  <Menu.Item showIcon onClose={hideMenuFunc} icon={<Icon name="settings"/>} onClick={itemClicked}>Settings</Menu.Item>${
    N}  <Menu.Item showIcon onClose={hideMenuFunc} onClick={itemClicked}>No Icon</Menu.Item>${
    N}  <Menu.Separator/>${
    N}  <Menu.Item showIcon onClose={hideMenuFunc} selected={selectedOption===1} onClick={() => setSelectedOption(1)}>Option 1</Menu.Item>${
    N}  <Menu.Item showIcon onClose={hideMenuFunc} selected={selectedOption===2} onClick={() => setSelectedOption(2)}>Option 2</Menu.Item>${
    N}</Menu>
    `}/>
    <div style={{ margin: '24px 0' }}>
      <Menu isOpen={menu.showSimpleMenu} onClose={() => signals.simpleMenuClosed()}>
        <Menu.Item onClose={() => signals.simpleMenuClosed()}>Simple Menu Item</Menu.Item>
        <Menu.Item onClose={() => signals.simpleMenuClosed()}>Other Option</Menu.Item>
      </Menu>
      <Button style={{ margin: '0' }} primary onClick={() => signals.simpleMenuOpened()}>Simple Menu</Button>

      <div style={{ display: 'inline-block' }}>
        <Menu rightAlign isOpen={menu.showMenu} onClose={() => signals.menuClosed()}>
          <Menu.Item showIcon icon={<Icon name="settings"/>} onClose={() => signals.menuClosed()}>Settings</Menu.Item>
          <Menu.Item showIcon onClose={() => signals.menuClosed()}>No Icon</Menu.Item>
          <Menu.Separator/>
          <Menu.Item showIcon selected={menu.selectedOption === 1} onClick={() => signals.selectMenuOption({ value: 1 })} onClose={() => signals.menuClosed()}>Option 1</Menu.Item>
          <Menu.Item showIcon selected={menu.selectedOption === 2} onClick={() => signals.selectMenuOption({ value: 2 })} onClose={() => signals.menuClosed()}>Option 2</Menu.Item>
        </Menu>
        <Button style={{ margin: '0 16px' }} primary onClick={() => signals.menuOpened()}>Menu</Button>
      </div>
    </div>
  </div>
));
