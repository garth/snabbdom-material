import { Component } from 'cerebral-snabbdom';
import Example from './example';
const N = '\n';

export default Component(() => (
  <div>
    <Example code="import { Appbar } from 'snabbdom-material';"/>
    <Example code={`${
    N}<Appbar fixed>${
    N}  <Appbar.Button style={{ float: 'left' }}><Icon name="menu"/></Appbar.Button>${
    N}  <Appbar.Title>Material Components</Appbar.Title>${
    N}  <div style={{ float: 'right' }}>${
    N}    <Appbar.Button${
    N}      href="https://github.com/garth/snabbdom-material">${
    N}      <Icon name="github"/>${
    N}    </Appbar.Button>${
    N}    <div style={{ display: 'inline-block' }}>${
    N}      <Menu rightAlign isOpen={showMoreMenu} onClose={hideMoreMenuFunc}>${
    N}        <Menu.Item>Option A</Menu.Item>${
    N}        <Menu.Item>Option B</Menu.Item>${
    N}      </Menu>${
    N}      <Appbar.Button onClick={openShowMoreMenu}><Icon name="more_vert"/></Appbar.Button>${
    N}    </div>${
    N}  </div>${
    N}</Appbar>
    `}/>
    <p>See the appbar above.</p>
  </div>
));
