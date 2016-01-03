import { Component } from 'cerebral-snabbdom';
import Example from './example';
import { Col, Row, Select } from '../../lib';

export default Component({
  select: ['demos', 'select']
}, ({
  state: {
    select
  },
  signals
}) => {

  const options = [
    { value: 0, label: 'Option 1' },
    { value: 1, label: 'Option 2' },
    { value: 2, label: 'Option 3' },
    { value: 3, label: 'Option 4' }
  ];

  return (
    <div>
      <Example code={`
import { Select } from 'snabbdom-material';
      `}/>
      <Example code={`
let options = [
  { value: 0, label: 'Option 1' },
  { value: 1, label: 'Option 2' },
  { value: 2, label: 'Option 3' }
];

<Select
  label="option"
  selected={selectedObject}
  options={options}
  isOpen={isSelectOpen}
  onOpen={setOpenState}
  onChange={optionSelected}
  onClose={setClosedState}/>

<Select
  label="Success option"
  selected={selectedObject}
  options={options}
  isSuccess
  isOpen={isSelectOpen}
  onOpen={setOpenState}
  onChange={optionSelected}
  onClose={setClosedState}/>

// note that this version uses value instead of a selected object
<Select
  label="Error option"
  value={selectedObject.value}
  options={options}
  isError
  message="fix me"
  isOpen={isSelectOpen}
  onOpen={setOpenState}
  onChange={optionSelected}
  onClose={setClosedState}/>
      `}/>
      <div style={{ margin: '16px 0' }}>
        <Row>
          <Col type="md-4">
            <Select
              label="option"
              selected={select.selected}
              options={options}
              isOpen={select.selectOpen}
              onOpen={() => signals.selectOpened()}
              onChange={e => signals.selectChanged({ value: e.target })}
              onClose={() => signals.selectClosed()}/>
          </Col>
          <Col type="md-4">
            <Select
              label="Success option"
              selected={select.selected}
              options={options}
              isSuccess
              isOpen={select.selectSuccessOpen}
              onOpen={() => signals.selectSuccessOpened()}
              onChange={e => signals.selectChanged({ value: e.target })}
              onClose={() => signals.selectSuccessClosed()}/>
          </Col>
          <Col type="md-4">
            <Select
              label="Error option"
              value={select.selected && select.selected.value}
              options={options}
              isError
              message="fix me"
              isOpen={select.selectErrorOpen}
              onOpen={() => signals.selectErrorOpened()}
              onChange={e => signals.selectChanged({ value: e.target })}
              onClose={() => signals.selectErrorClosed()}/>
          </Col>
        </Row>
        <Row>
          <Col type="md-4 md-offset-4">
            <Select
              label="large list of items"
              value={select.largeSelectedValue}
              options={(() => {
                const opts = [];
                for (let i = 0; i < 100; i++) {
                  opts.push({ value: i, label: `Option ${i + 1}` });
                }
                return opts;
              })()}
              isOpen={select.largeSelectOpen}
              onOpen={() => signals.selectLargeOpened()}
              onChange={e => signals.selectLargeChanged({ value: e.target.value })}
              onClose={() => signals.selectLargeClosed()}/>
          </Col>
        </Row>
      </div>
    </div>
  );
});
