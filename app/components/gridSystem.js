import { Component } from 'cerebral-view-snabbdom'
import Example from './example'
import { Col, Row, Paper } from '../../lib'
const N = '\n'

export default Component(() => (
  <div>
    <Example code="import { Col, Row } from 'snabbdom-material'"/>
    <p>
      snabbdom-material borrows the reponsive <a href='http://getbootstrap.com/css/#grid'>grid
      system from bootstrap</a>. Simply omit the <code>col-</code> class name prefix and pass all
      parameters via the <code>type</code> attribute.
    </p>
    <div style={{ padding: '16px 0' }}>
      <Row>
        <Col type='md-5 md-offset-1'><Paper>md-5 md-offset-1</Paper></Col>
        <Col type='md-5'><Paper>md-5</Paper></Col>
      </Row>
    </div>
    <Example code={`${
    N}<Row>${
    N}  <Col type="md-5 md-offset-1"></Col>${
    N}  <Col type="md-5"></Col>${
    N}</Row>
    `}/>
  </div>
))
