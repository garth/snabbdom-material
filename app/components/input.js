import { Component } from 'cerebral-snabbdom'
import Example from './example'
import { Row, Col, Input } from '../../lib'
const N = '\n'

export default Component({
  input: ['demos', 'input']
}, ({
  props: {
    material
  },
  state: {
    input
  },
  signals
}) => (
  <div>
    <Example code="import { Input } from 'snabbdom-material';"/>
    <div style={{ margin: '16px 0' }}>
      <Row>
        <Col type='md-6'>
          <Input
            label='Email'
            value={input.email}
            onChange={e => signals.emailChanged.sync({ value: e.target.value })}
            material={material}/>
        </Col>
        <Col type='md-6'>
          <Input
            label='Password'
            type='password'
            value={input.password}
            onChange={e => signals.passwordChanged.sync({ value: e.target.value })}
            material={material}/>
        </Col>
      </Row>
      <Row>
        <Col type='md-6'>
          <Input
            label='Success'
            value={input.email}
            isSuccess
            onChange={e => signals.emailChanged.sync({ value: e.target.value })}
            material={material}/>
        </Col>
        <Col type='md-6'>
          <Input
            label='Error'
            value={input.email}
            isError
            message='fix me'
            onChange={e => signals.emailChanged.sync({ value: e.target.value })}
            material={material}/>
        </Col>
      </Row>
    </div>
    <Example code={`${
    N}<Input label="Email" value={email} onChange={onEmailChange} material={material}/>${
    N}<Input label="Password" type="password" value={password} onChange={onPasswordChange} material={material}/>${
    N}<Input label="Success" value={email} isSuccess onChange={onEmailChange} material={material}/>${
    N}<Input label="Error" value={email} isError message="fix me" onChange={onEmailChange} material={material}/>
    `}/>
  </div>
))
