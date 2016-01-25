import { Component } from 'cerebral-snabbdom'
import Example from './example'
import { Button } from '../../lib'
const N = '\n'

export default Component(({ props: { material } }) => (
  <div>
    <Example code="import { Button } from 'snabbdom-material';"/>
    <p>
      <Button onClick={() => {}} material={material}>Normal</Button>
      <Button onClick={() => {}} material={material} primary>Primary</Button>
      <Button onClick={() => {}} material={material} flat>Flat</Button>
      <Button onClick={() => {}} material={material} primary flat>Primary Flat</Button>
    </p>
    <Example code={`${
    N}// enabled buttons${
    N}<Button onClick={onClick} material={material}>Normal</Button>${
    N}<Button onClick={onClick} material={material} primary>Primary</Button>${
    N}<Button onClick={onClick} material={material} flat>Flat</Button>${
    N}<Button onClick={onClick} material={material} primary flat>Primary Flat</Button>
    `}/>
    <p>
      <Button material={material}>Normal</Button>
      <Button material={material} primary>Primary</Button>
      <Button material={material} flat>Flat</Button>
      <Button material={material} primary flat>Primary Flat</Button>
    </p>
    <Example code={`${
    N}// disabled buttons${
    N}<Button material={material}>Normal</Button>${
    N}<Button material={material} primary>Primary</Button>${
    N}<Button material={material} flat>Flat</Button>${
    N}<Button material={material} primary flat>Primary Flat</Button>
    `}/>
  </div>
))
