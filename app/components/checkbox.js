import { Component } from 'cerebral-snabbdom'
import Example from './example'
import { Checkbox } from '../../lib'

export default Component({
  checkbox: ['demos', 'checkbox']
}, ({
  props: {
    material
  },
  state: {
    checkbox
  },
  signals
}) => (
  <div>
    <Example code="import { Checkbox } from 'snabbdom-material';"/>
    <div>
      <Checkbox
        label='Checkbox'
        value={checkbox.checked}
        onChange={(e) => signals.checkboxChanged({ value: e.target.value })}
        material={material}/>
    </div>
    <div>
      <Checkbox
        label='Opposite'
        value={!checkbox.checked}
        onChange={(e) => signals.checkboxChanged({ value: !e.target.value })}
        material={material}/>
    </div>
    <Example code='<Checkbox label="Checkbox" value={checked} onChange={setChecked} material={material}/>'/>
  </div>
))
