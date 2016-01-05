import { Component } from 'cerebral-snabbdom';
import Example from './example';
import { Col, Row, Divider, Paper } from '../../lib';
const N = '\n';

export default Component(() => (
  <div>
    <Example code="import { Paper, Divider } from 'snabbdom-material';"/>
    <p>
      Add a paper class to an element to lift it from the page. The <code>noPadding</code> option
      removes default padding. A divider component provides seperation.
    </p>
    <Example code={`${
    N}<Paper elevation={1}>Paper 1</Paper>${
    N}<Paper elevation={2}>Paper 2</Paper>${
    N}<Paper elevation={3} noPadding>Paper 3</Paper>${
    N}<Paper elevation={4}>Paper 4</Paper>${
    N}<Paper elevation={5}>Paper 5</Paper>${
    N}<Divider/>
    `}/>
    <div style={{ margin: '16px 0' }}>
      <Row>
        <Col type="sm-offset-1 sm-2">
          <Paper elevation={1} style={{ margin: '16px 0' }}>Paper 1</Paper>
        </Col>
        <Col type="sm-2">
          <Paper elevation={2} style={{ margin: '16px 0' }}>Paper 2</Paper>
        </Col>
        <Col type="sm-2">
          <Paper elevation={3} noPadding style={{ margin: '16px 0' }}>Paper 3</Paper>
        </Col>
        <Col type="sm-2">
          <Paper elevation={4} style={{ margin: '16px 0' }}>Paper 4</Paper>
        </Col>
        <Col type="sm-2">
          <Paper elevation={5} style={{ margin: '16px 0' }}>Paper 5</Paper>
        </Col>
      </Row>

      <Paper elevation={1} style={{ margin: '16px 0' }}>
        Before divider
        <Divider/>
        After divider
      </Paper>
      <p>
        Alternatively you can use the following class
        names <code>paper1</code>, <code>paper2</code>, <code>paper3</code>, <code>paper4</code>, <code>paper5</code> and <code>padded</code> to
        apply the paper styling to other elements.
      </p>
    </div>
  </div>
));
