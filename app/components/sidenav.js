import { Component } from 'cerebral-view-snabbdom'
import Example from './example'
import { Icon, Sidenav, Typ, Paper } from '../../lib'
const N = '\n'

export default Component(() => (
  <div>
    <Example code="import { Sidenav } from 'snabbdom-material'"/>
    <Typ headline>Sidenav</Typ>
    <p>See the sidenav above.</p>
    <Example code={`${
    N}<Sidenav isOpen={sidenavOpen} onClose={closeSidenavFunc}>${
    N}  <Sidenav.Title showCloseButton>Menu</Sidenav.Title>${
    N}  <Sidenav.Item showIcon icon={<Icon name="user"/>} onClick={itemSelected}>Option A</Sidenav.Item>${
    N}  <Sidenav.Item showIcon icon={<Icon name="dashboard"/>} onClick={itemSelected} selected>Option B</Sidenav.Item>${
    N}  <Sidenav.Separator/>${
    N}  <Sidenav.Item showIcon icon={<Icon name="cog"/>} onClick={itemSelected}>Settings</Sidenav.Item>${
    N}</Sidenav>
    `}/>

    <Typ headline>Mini Sidenav</Typ>
    <p>It's also possible to have a mini sidenav that is always on display.</p>
    <Paper
      noPadding
      elevation={0}
      style={{
        paper: {
          height: '200px',
          margin: '16px 0'
        }
      }}>
      <Sidenav
        mini
        style={{
          mini: {
            float: 'left',
            position: 'relative',
            top: '0',
            height: '200px'
          }
        }}>
        <Sidenav.Item showIcon icon={<Icon name='person'/>}/>
        <Sidenav.Item showIcon icon={<Icon name='dashboard'/>} selected/>
        <Sidenav.Separator/>
        <Sidenav.Item showIcon icon={<Icon name='settings'/>}/>
      </Sidenav>
      <div style={{
        padding: '16px',
        marginLeft: '60px'
      }}>
        Page Content
      </div>
    </Paper>
    <Example code={`${
    N}<Sidenav mini}>${
    N}  <Sidenav.Item showIcon icon={<Icon name="user"/>} onClick={itemSelected}/>${
    N}  <Sidenav.Item showIcon icon={<Icon name="dashboard"/>} onClick={itemSelected} selected/>${
    N}  <Sidenav.Separator/>${
    N}  <Sidenav.Item showIcon icon={<Icon name="settings"/>} onClick={itemSelected}/>${
    N}</Sidenav>${
    N}<div style={{ marginLeft: '60px' }}>${
    N}  Page Content${
    N}</div>
    `}/>
  </div>
))
