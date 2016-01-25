import { Component } from 'cerebral-snabbdom'
import Example from './example'
import { Col, Row, Typ } from '../../lib'

export default Component(({
  props: {
    material
  }
}) => (
  <div>
    <Example code="import { Typ } from 'snabbdom-material';"/>
    <Row>
      <Col type='sm-7'>
        <Example code='<Typ display3 material={material}>Display 3</Typ>'/>
      </Col>
      <Col type='sm-5'><Typ display3 material={material}>Display 3</Typ></Col>
    </Row>
    <Row>
      <Col type='sm-7'>
        <Example code='<Typ display2 material={material}>Display 2</Typ>'/>
      </Col>
      <Col type='sm-5'><Typ display2 material={material}>Display 2</Typ></Col>
    </Row>
    <Row>
      <Col type='sm-7'>
        <Example code='<Typ display1 material={material}>Display 1</Typ>'/>
      </Col>
      <Col type='sm-5'><Typ display1 material={material}>Display 1</Typ></Col>
    </Row>
    <Row>
      <Col type='sm-7'>
        <Example code='<Typ headline material={material}>Headline</Typ>'/>
      </Col>
      <Col type='sm-5'><Typ headline material={material}>Headline</Typ></Col>
    </Row>
    <Row>
      <Col type='sm-7'>
        <Example code='<Typ title material={material}>Title</Typ>'/>
      </Col>
      <Col type='sm-5'><Typ title material={material}>Title</Typ></Col>
    </Row>
    <Row>
      <Col type='sm-7'>
        <Example code='<Typ subheading material={material}>Subheading</Typ>'/>
      </Col>
      <Col type='sm-5'><Typ subheading material={material}>Subheading</Typ></Col>
    </Row>
    <p>
      By adding an optional <code>primary</code> or <code>secondary</code> flag to
      any <code>&lt;Typ&gt;</code> the color is set to the primary or secondary colors.
    </p>
    <Row>
      <Col type='sm-7'>
        <Example code='<Typ primary display2 material={material}>Primary</Typ>'/>
      </Col>
      <Col type='sm-5'><Typ primary display2 material={material}>Primay</Typ></Col>
    </Row>
    <Row>
      <Col type='sm-7'>
        <Example code='<Typ secondary display2 material={material}>Secondary</Typ>'/>
      </Col>
      <Col type='sm-5'><Typ secondary display2 material={material}>Secondary</Typ></Col>
    </Row>
  </div>
))
