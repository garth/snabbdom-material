import { Component } from 'cerebral-snabbdom';
import Example from './example';
import { Checkbox } from '../../lib';

export default Component({
  checkbox: ['demos', 'checkbox']
}, ({
  state: {
    checkbox
  },
  signals
}) => (
  <div>
    <Example code={`
import { Checkbox } from 'snabbdom-material';
    `}/>
    <Example code={`
<Checkbox label="Checkbox" value={checked} onChange={setChecked}/>
    `}/>
    <div>
      <Checkbox label="Checkbox" value={checkbox.checked} onChange={(e) => signals.checkboxChanged({ value: e.target.value })}/>
    </div>
    <div>
      <Checkbox label="Opposite" value={!checkbox.checked} onChange={(e) => signals.checkboxChanged({ value: !e.target.value })}/>
    </div>
  </div>
));
