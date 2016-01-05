import { Component } from 'cerebral-snabbdom';
import Example from './example';
import { Button } from '../../lib';
const N = '\n';

export default Component(() => (
  <div>
    <Example code="import { Button } from 'snabbdom-material';"/>
    <Example code={`${
    N}// enabled buttons${
    N}<Button onClick={onClick}>Normal</Button>${
    N}<Button onClick={onClick} primary>Primary</Button>${
    N}<Button onClick={onClick} flat>Flat</Button>${
    N}<Button onClick={onClick} primary flat>Primary Flat</Button>
    `}/>
    <p>
      <Button onClick={() => {}}>Normal</Button>
      <Button onClick={() => {}} primary>Primary</Button>
      <Button onClick={() => {}} flat>Flat</Button>
      <Button onClick={() => {}} primary flat>Primary Flat</Button>
    </p>
    <Example code={`${
    N}// disabled buttons${
    N}<Button>Normal</Button>${
    N}<Button primary>Primary</Button>${
    N}<Button flat>Flat</Button>${
    N}<Button primary flat>Primary Flat</Button>
    `}/>
    <p>
      <Button>Normal</Button>
      <Button primary>Primary</Button>
      <Button flat>Flat</Button>
      <Button primary flat>Primary Flat</Button>
    </p>
  </div>
));
