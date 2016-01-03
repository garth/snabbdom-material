import { Component } from 'cerebral-snabbdom';
import Example from './example';
import { Row, Col, Input } from '../../lib';

export default Component({
  input: ['demos', 'input']
}, ({
  state: {
    input
  },
  signals
}) => (
  <div>
    <Example code={`
import { Input } from 'snabbdom-material';
    `}/>
    <Example code={`
<Input label="Email" value={email} onChange={onEmailChange}/>
<Input label="Password" type="password" value={password} onChange={onPasswordChange}/>
<Input label="Success" value={email} isSuccess onChange={onEmailChange}/>
<Input label="Error" value={email} isError message="fix me" onChange={onEmailChange}/>
    `}/>
    <div style={{ margin: '16px 0' }}>
      <Row>
        <Col type="md-6">
          <Input
            label="Email"
            value={input.email}
            onChange={e => signals.emailChanged.sync({ value: e.target.value })}/>
        </Col>
        <Col type="md-6">
          <Input
            label="Password"
            type="password"
            value={input.password}
            onChange={e => signals.passwordChanged.sync({ value: e.target.value })}/>
        </Col>
      </Row>
      <Row>
        <Col type="md-6">
          <Input
            label="Success"
            value={input.email}
            isSuccess
            onChange={e => signals.emailChanged.sync({ value: e.target.value })}/>
        </Col>
        <Col type="md-6">
          <Input
            label="Error"
            value={input.email}
            isError
            message="fix me"
            onChange={e => signals.emailChanged.sync({ value: e.target.value })}/>
        </Col>
      </Row>
    </div>
  </div>
));
