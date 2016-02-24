import { Component } from 'cerebral-view-snabbdom'
import Example from './example'
import { Checkbox, Col, Row, Spinner } from '../../lib'
const N = '\n'

const style = { container: { margin: '10px auto' } }

export default Component({
  spinner: ['demos', 'spinner']
}, ({
  state: {
    spinner
  },
  signals
}) => (
  <div>
    <Example code="import { Spinner } from 'snabbdom-material';"/>
    <div style={{ margin: '24px 0' }} classNames='paper1 padded'>
      <Row>
        <Col type='sm-4'><Spinner style={style} size={25} inline/></Col>
        <Col type='sm-4'><Spinner style={style} size={25} inline primary/></Col>
        <Col type='sm-4'><Spinner style={style} size={25} inline secondary/></Col>
      </Row>
      <Row>
        <Col type='sm-4'><Spinner style={style} size={50} inline/></Col>
        <Col type='sm-4'><Spinner style={style} size={50} inline primary/></Col>
        <Col type='sm-4'><Spinner style={style} size={50} inline secondary/></Col>
      </Row>
      <Row>
        <Col type='sm-4'><Spinner style={style} size={75} inline/></Col>
        <Col type='sm-4'><Spinner style={style} size={75} inline primary/></Col>
        <Col type='sm-4'><Spinner style={style} size={75} inline secondary/></Col>
      </Row>
    </div>
    <Example code={`${
    N}// inline spinners${
    N}<Spinner size={25} inline/>${
    N}<Spinner size={50} inline primary/>${
    N}<Spinner size={75} inline secondary/>
    `}/>
    <div style={{ margin: '24px 0' }}>
      <Checkbox
        label='Page is loading'
        value={spinner.isLoading}
        onChange={(e) => signals.isLoadingChanged({ value: e.target.value })}/>
    </div>
    <Example code={`${
    N}// page spinner${
    N}<Spinner isOpen={isLoading}/>
    `}/>
    <Spinner isOpen={spinner.isLoading}/>
  </div>
))
