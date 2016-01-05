import { Component } from 'cerebral-snabbdom';
import Example from './example';
import { Col, Row, Divider } from '../../lib';
const N = '\n';

export default Component(() => (
  <div>
    <Example code="import { Divider } from 'snabbdom-material';"/>
    <p>
      Add a paper class to an element to lift it from the page. The optional <code>padded</code> class
      gives the paper a default padding. A divider component provides seperation.
    </p>
    <Example code={`${
    N}<div classNames="paper1 padded">Paper 1</div>${
    N}<div classNames="paper2 padded">Paper 2</div>${
    N}<div classNames="paper3 padded">Paper 3</div>${
    N}<div classNames="paper4 padded">Paper 4</div>${
    N}<div classNames="paper5 padded">Paper 5</div>${
    N}<Divider/>
    `}/>
    <div style={{ margin: '16px 0' }}>
      <Row>
        <Col type="sm-offset-1 sm-2">
          <div classNames="paper1 padded" style={{ margin: '16px 0' }}>Paper 1</div>
        </Col>
        <Col type="sm-2">
          <div classNames="paper2 padded" style={{ margin: '16px 0' }}>Paper 2</div>
        </Col>
        <Col type="sm-2">
          <div classNames="paper3 padded" style={{ margin: '16px 0' }}>Paper 3</div>
        </Col>
        <Col type="sm-2">
          <div classNames="paper4 padded" style={{ margin: '16px 0' }}>Paper 4</div>
        </Col>
        <Col type="sm-2">
          <div classNames="paper5 padded" style={{ margin: '16px 0' }}>Paper 5</div>
        </Col>
      </Row>

      <div classNames="paper1 padded" style={{ margin: '16px 0' }}>
        Before divider
        <Divider/>
        After divider
      </div>
    </div>
  </div>
));
