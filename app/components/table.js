import { Component } from 'cerebral-snabbdom';
import Example from './example';
import { Button, Table } from '../../lib';
const N = '\n';

export default Component(() => (
  <div>
    <Example code="import { Table } from 'snabbdom-material';"/>
    <p>
      Only <code>Table</code>, <code>Table.Toolbar</code> and <code>Table.Row</code> are necessary, for other
      element types use the default html
      elements <code>thead</code>, <code>tbody</code>, <code>th</code> and <code>td</code>.
    </p>
    <Example code={`${
    N}<Table className="paper1">${
    N}  <thead>${
    N}    <Table.Toolbar colSpan={3}>${
    N}      <Button style={{ margin: '0 8px', padding: '0 8px' }} primary flat>Add</Button>${
    N}    </Table.Toolbar>${
    N}    <Table.Row>${
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
    N}      <Table.Row key={index} onClick={select(user)}>${
    N}        <td>{user.firstName}</td>${
    N}        <td>{user.lastName}</td>${
    N}        <td>{user.role}</td>${
    N}      </Table.Row>${
    N}    ))}${
    N}  </tbody>${
    N}</Table>
    `}/>
    <Table style={{ margin: '24px 0' }} className="paper1">
      <thead>
        <Table.Toolbar colSpan={3}>
          <Button style={{ margin: '0 8px', padding: '0 8px' }} primary flat onClick={() => {}}>Add</Button>
        </Table.Toolbar>
        <Table.Row>
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
        ].map((user, index) => (
          <Table.Row key={index} onClick={() => console.log('clicked', user)}>
            <td>{user.firstName}</td>
            <td>{user.lastName}</td>
            <td>{user.role}</td>
          </Table.Row>
        ))}
      </tbody>
    </Table>
  </div>
));
