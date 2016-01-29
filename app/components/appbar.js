import { Component } from 'cerebral-view-snabbdom'
import Example from './example'
const N = '\n'

export default Component(() => (
  <div>
    <Example code="import { Appbar } from 'snabbdom-material';"/>
    <Example code={`${
    N}<Appbar fixed material={material}>${
    N}  <Appbar.Button style={{ float: 'left' }} material={material}><Icon name="menu"/></Appbar.Button>${
    N}  <Appbar.Title material={material}>Material Components</Appbar.Title>${
    N}  <div style={{ float: 'right' }}>${
    N}    <Appbar.Button${
    N}      href="https://github.com/garth/snabbdom-material"${
    N}      material={material}>${
    N}      <Icon name="github"/>${
    N}    </Appbar.Button>${
    N}    <div style={{ display: 'inline-block' }}>${
    N}      <Menu rightAlign isOpen={showMoreMenu} onClose={hideMoreMenuFunc} screenInfo={screenInfo} material={material}>${
    N}        <Menu.Item material={material}>Option A</Menu.Item>${
    N}        <Menu.Item material={material}>Option B</Menu.Item>${
    N}      </Menu>${
    N}      <Appbar.Button onClick={openShowMoreMenu} material={material}><Icon name="more_vert"/></Appbar.Button>${
    N}    </div>${
    N}  </div>${
    N}</Appbar>
    `}/>
    <p>See the appbar above.</p>
  </div>
))
