import { Component } from 'cerebral-snabbdom'
import { Typ } from '../../lib'

export default Component(({
  props: {
    material
  }
}) => (
  <div>
    <Typ headline material={material}>snabbdom-material</Typ>
    <p>
      snabbdom-material is a library of <a href='https://github.com/paldepind/snabbdom'>snabbdom</a> user
      interface components based on <a href='https://www.google.com/design/spec/'>material design</a>.
    </p>
    <p>
      snabbdom-material components are completely stateless making them an ideal companion to libraries such
      as <a href='http://www.cerebraljs.com'>Cerebral</a>.
    </p>
    <p>
      For source code please see
      the <a href='https://github.com/garth/snabbdom-material'>GitHub Repository</a>.
    </p>
    <p>
      The development of snabbdom-material has been sponsored
      by <a href='http://www.elastictime.com/'>Elastic Time</a>.
    </p>
  </div>
))
