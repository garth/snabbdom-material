import { Component } from 'cerebral-view-snabbdom'
import Example from './example'
import { Button, Table, Paper } from '../../lib'
const N = '\n'

export default Component(({
  props: {
    material
  }
}) => (
  <div>
    <Example code="import { Table } from 'snabbdom-material';"/>
    <p>
      Only <code>Table</code>, <code>Table.Toolbar</code> and <code>Table.Row</code> are necessary, for other
      element types use the default html
      elements <code>thead</code>, <code>tbody</code>, <code>th</code> and <code>td</code>.
    </p>
    <Paper noPadding>
      <Table style={{ margin: '24px 0' }} material={material}>
        <thead>
          <Table.Toolbar colSpan={3} material={material}>
            <Button style={{ margin: '0 8px', padding: '0 8px' }} primary flat onClick={() => {}} material={material}>Add</Button>
          </Table.Toolbar>
          <Table.Row material={material}>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Role</th>
          </Table.Row>
        </thead>
        <tbody>
          {[
            { firstName: 'Brian', lastName: 'Wilson', role: 'user' },
            { firstName: 'Geoff', lastName: 'Hayes', role: 'user' },
            { firstName: 'John', lastName: 'Doe', role: 'admin' }
          ].map((user) => (
            <Table.Row onClick={() => console.log('clicked', user)} material={material}>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.role}</td>
            </Table.Row>
          ))}
        </tbody>
      </Table>
    </Paper>
    <Example code={`${
    N}<Table className="paper1" material={material}>${
    N}  <thead>${
    N}    <Table.Toolbar colSpan={3} material={material}>${
    N}      <Button style={{ margin: '0 8px', padding: '0 8px' }} primary flat material={material}>Add</Button>${
    N}    </Table.Toolbar>${
    N}    <Table.Row material={material}>${
    N}      <th>First Name</th>${
    N}      <th>Last Name</th>${
    N}      <th>Role</th>${
    N}    </Table.Row>${
    N}  </thead>${
    N}  <tbody>${
    N}    {[${
    N}      { firstName: 'Brian', lastName: 'Wilson', role: 'user' },${
    N}      { firstName: 'Geoff', lastName: 'Hayes', role: 'user' },${
    N}      { firstName: 'John', lastName: 'Doe', role: 'admin' }${
    N}    ].map((user, index) => (${
    N}      <Table.Row key={index} onClick={select(user)} material={material}>${
    N}        <td>{user.firstName}</td>${
    N}        <td>{user.lastName}</td>${
    N}        <td>{user.role}</td>${
    N}      </Table.Row>${
    N}    ))}${
    N}  </tbody>${
    N}</Table>
    `}/>
  </div>
))
