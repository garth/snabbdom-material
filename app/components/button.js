import { Component } from 'cerebral-snabbdom';
import Example from './example';
import { Button } from '../../lib';

export default Component(() => (
  <div>
    <Example code={`
import { Button } from 'snabbdom-material';
    `}/>
    <Example code={`
// enabled buttons
<Button onClick={onClick}>Normal</Button>
<Button onClick={onClick} primary>Primary</Button>
<Button onClick={onClick} flat>Flat</Button>
<Button onClick={onClick} primary flat>Primary Flat</Button>
    `}/>
    <p>
      <Button onClick={() => {}}>Normal</Button>
      <Button onClick={() => {}} primary>Primary</Button>
      <Button onClick={() => {}} flat>Flat</Button>
      <Button onClick={() => {}} primary flat>Primary Flat</Button>
    </p>
    <Example code={`
// disabled buttons
<Button>Normal</Button>
<Button primary>Primary</Button>
<Button flat>Flat</Button>
<Button primary flat>Primary Flat</Button>
    `}/>
    <p>
      <Button>Normal</Button>
      <Button primary>Primary</Button>
      <Button flat>Flat</Button>
      <Button primary flat>Primary Flat</Button>
    </p>
  </div>
));
