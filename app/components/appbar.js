import { Component } from 'cerebral-snabbdom';
import Example from './example';

export default Component(() => (
  <div>
    <Example code={`
import { Appbar } from 'snabbdom-material';
    `}/>
    <Example code={`
<Appbar fixed>
  <Appbar.Button style={{ float: 'left' }}><Icon name="menu"/></Appbar.Button>
  <Appbar.Title>Material Components</Appbar.Title>
  <div style={{ float: 'right' }}>
    <Appbar.Button
      onClick={() => location.href='https://github.com/garth/snabbdom-material'}>
      <Icon name="github"/>
    </Appbar.Button>
    <div style={{ display: 'inline-block' }}>
      <Menu rightAlign isOpen={showMoreMenu} onClose={hideMoreMenuFunc}>
        <Menu.Item>Option A</Menu.Item>
        <Menu.Item>Option B</Menu.Item>
      </Menu>
      <Appbar.Button><Icon name="more_vert"/></Appbar.Button>
    </div>
  </div>
</Appbar>
    `}/>
    <p>See the appbar above.</p>
    <p>
      When using a darker primary color, try
      using <code>{'<Appbar.Button lightWaves>X</Appbar.Button>'}</code>
    </p>
  </div>
));
