import { Component } from 'cerebral-view-snabbdom'
import Example from './example'
import { Checkbox, Col, Row, Spinner } from '../../lib'
const N = '\n'

export default Component({
  spinner: ['demos', 'spinner']
}, ({
  props: {
    material
  },
  state: {
    spinner
  },
  signals
}) => (
  <div>
    <Example code="import { Spinner } from 'snabbdom-material';"/>
    <div style={{ margin: '24px 0' }} classNames='paper1 padded'>
      <Row>
        <Col type='sm-4'><Spinner material={material} style={{ margin: '10px auto' }} size={25} inline/></Col>
        <Col type='sm-4'><Spinner material={material} style={{ margin: '10px auto' }} size={25} inline primary/></Col>
        <Col type='sm-4'><Spinner material={material} style={{ margin: '10px auto' }} size={25} inline secondary/></Col>
      </Row>
      <Row>
        <Col type='sm-4'><Spinner material={material} style={{ margin: '10px auto' }} size={50} inline/></Col>
        <Col type='sm-4'><Spinner material={material} style={{ margin: '10px auto' }} size={50} inline primary/></Col>
        <Col type='sm-4'><Spinner material={material} style={{ margin: '10px auto' }} size={50} inline secondary/></Col>
      </Row>
      <Row>
        <Col type='sm-4'><Spinner material={material} style={{ margin: '10px auto' }} size={75} inline/></Col>
        <Col type='sm-4'><Spinner material={material} style={{ margin: '10px auto' }} size={75} inline primary/></Col>
        <Col type='sm-4'><Spinner material={material} style={{ margin: '10px auto' }} size={75} inline secondary/></Col>
      </Row>
    </div>
    <Example code={`${
    N}// inline spinners${
    N}<Spinner size={25} material={material} inline/>${
    N}<Spinner size={50} material={material} inline primary/>${
    N}<Spinner size={75} material={material} inline secondary/>
    `}/>
    <div style={{ margin: '24px 0' }}>
      <Checkbox
        label='Page is loading'
        value={spinner.isLoading}
        onChange={(e) => signals.isLoadingChanged({ value: e.target.value })}
        material={material}/>
    </div>
    <Example code={`${
    N}// page spinner${
    N}<Spinner isOpen={isLoading} material={material}/>
    `}/>
    <Spinner isOpen={spinner.isLoading} material={material}/>
  </div>
))
