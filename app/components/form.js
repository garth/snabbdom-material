import { Component } from 'cerebral-snabbdom';
import Example from './example';

export default Component(() => (
  <div>
    <Example code={`
import { Form } from 'snabbdom-material';
    `}/>
    <p>
      The <code>Form</code> component will prevent the default form submit behaviour and pass
      the submit event on to the given onSubmit handler.
    </p>
    <Example code={`
<Form onSubmit={onSubmit}/>
  <Button type="submit">Submit</Button>
</Form>
    `}/>
  </div>
));
