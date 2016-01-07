import { Component } from 'cerebral-snabbdom';
import Example from './example';
import { Icon, Sidenav, Typ } from '../../lib';
const N = '\n';

export default Component(({
  props: {
    material
  }
}) => (
  <div>
    <Example code="import { Sidenav } from 'snabbdom-material';"/>
    <Typ headline material={material}>Sidenav</Typ>
    <p>See the sidenav above.</p>
    <Example code={`${
    N}<Sidenav isOpen={sidenavOpen} onClose={closeSidenavFunc} material={material}>${
    N}  <Sidenav.Title showCloseButton material={material}>Menu</Sidenav.Title>${
    N}  <Sidenav.Item showIcon material={material} icon={<Icon name="user"/>} onClick={itemSelected}>Option A</Sidenav.Item>${
    N}  <Sidenav.Item showIcon material={material} icon={<Icon name="dashboard"/>} onClick={itemSelected} selected>Option B</Sidenav.Item>${
    N}  <Sidenav.Separator material={material}/>${
    N}  <Sidenav.Item showIcon material={material} icon={<Icon name="cog"/>} onClick={itemSelected}>Settings</Sidenav.Item>${
    N}</Sidenav>
    `}/>

    <Typ headline material={material}>Mini Sidenav</Typ>
    <p>It's also possible to have a mini sidenav that is always on display.</p>
    <div classNames="paper1" style={{
      height: '200px',
      margin: '16px 0'
    }}>
      <Sidenav
        mini
        style={{
          float: 'left',
          position: 'relative',
          top: '0',
          height: '200px'
        }}
        material={material}>
        <Sidenav.Item showIcon material={material} icon={<Icon name="person"/>}/>
        <Sidenav.Item showIcon material={material} icon={<Icon name="dashboard"/>} selected/>
        <Sidenav.Separator material={material}/>
        <Sidenav.Item showIcon material={material} icon={<Icon name="settings"/>}/>
      </Sidenav>
      <div style={{
        padding: '16px',
        marginLeft: '60px'
      }}>
        Page Content
      </div>
    </div>
    <Example code={`${
    N}<Sidenav mini material={material}>${
    N}  <Sidenav.Item showIcon material={material} icon={<Icon name="user"/>} onClick={itemSelected}/>${
    N}  <Sidenav.Item showIcon material={material} icon={<Icon name="dashboard"/>} onClick={itemSelected} selected/>${
    N}  <Sidenav.Separator material={material}/>${
    N}  <Sidenav.Item showIcon material={material} icon={<Icon name="settings"/>} onClick={itemSelected}/>${
    N}</Sidenav>${
    N}<div style={{ marginLeft: '60px' }}>${
    N}  Page Content${
    N}</div>
    `}/>
  </div>
));
