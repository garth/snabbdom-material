import { Component } from 'cerebral-view-snabbdom'
import Example from './example'
import { Col, Row, Select } from '../../lib'
const N = '\n'

export default Component({
  screenInfo: ['screen'],
  select: ['demos', 'select']
}, ({
  props: {
    material
  },
  state: {
    screenInfo,
    select
  },
  signals
}) => {
  const options = [
    { value: 0, label: 'Option 1' },
    { value: 1, label: 'Option 2' },
    { value: 2, label: 'Option 3' },
    { value: 3, label: 'Option 4' }
  ]

  return (
    <div>
      <Example code="import { Select } from 'snabbdom-material';"/>
      <div style={{ margin: '16px 0' }}>
        <Row>
          <Col type='md-4'>
            <Select
              label='option'
              selected={select.selected}
              options={options}
              isOpen={select.selectOpen}
              screenInfo={screenInfo}
              onOpen={() => signals.selectOpened()}
              onChange={(e) => signals.selectChanged({ value: e.target })}
              onClose={() => signals.selectClosed()}
              material={material}/>
          </Col>
          <Col type='md-4'>
            <Select
              label='Success option'
              selected={select.selected}
              options={options}
              isSuccess
              isOpen={select.selectSuccessOpen}
              screenInfo={screenInfo}
              onOpen={() => signals.selectSuccessOpened()}
              onChange={(e) => signals.selectChanged({ value: e.target })}
              onClose={() => signals.selectSuccessClosed()}
              material={material}/>
          </Col>
          <Col type='md-4'>
            <Select
              label='Error option'
              value={select.selected && select.selected.value}
              options={options}
              isError
              message='fix me'
              isOpen={select.selectErrorOpen}
              screenInfo={screenInfo}
              onOpen={() => signals.selectErrorOpened()}
              onChange={(e) => signals.selectChanged({ value: e.target })}
              onClose={() => signals.selectErrorClosed()}
              material={material}/>
          </Col>
        </Row>
        <Row>
          <Col type='md-4 md-offset-4'>
            <Select
              label='large list of items'
              value={select.largeSelectedValue}
              options={(() => {
                const opts = []
                for (let i = 0; i < 100; i++) {
                  opts.push({ value: i, label: `Option ${i + 1}` })
                }
                return opts
              })()}
              isOpen={select.largeSelectOpen}
              screenInfo={screenInfo}
              onOpen={() => signals.selectLargeOpened()}
              onChange={(e) => signals.selectLargeChanged({ value: e.target.value })}
              onClose={() => signals.selectLargeClosed()}
              material={material}/>
          </Col>
        </Row>
      </div>
      <Example code={`${
      N}let options = [${
      N}  { value: 0, label: 'Option 1' },${
      N}  { value: 1, label: 'Option 2' },${
      N}  { value: 2, label: 'Option 3' }${
      N}];${
      N}${
      N}<Select${
      N}  label="option"${
      N}  selected={selectedObject}${
      N}  options={options}${
      N}  isOpen={isSelectOpen}${
      N}  screenInfo={screenInfo}${
      N}  onOpen={setOpenState}${
      N}  onChange={optionSelected}${
      N}  onClose={setClosedState}${
      N}  material={material}/>${
      N}${
      N}<Select${
      N}  label="Success option"${
      N}  selected={selectedObject}${
      N}  options={options}${
      N}  isSuccess${
      N}  isOpen={isSelectOpen}${
      N}  screenInfo={screenInfo}${
      N}  onOpen={setOpenState}${
      N}  onChange={optionSelected}${
      N}  onClose={setClosedState}${
      N}  material={material}/>${
      N}${
      N}// note that this version uses value instead of a selected object${
      N}<Select${
      N}  label="Error option"${
      N}  value={selectedObject.value}${
      N}  options={options}${
      N}  isError${
      N}  message="fix me"${
      N}  isOpen={isSelectOpen}${
      N}  screenInfo={screenInfo}${
      N}  onOpen={setOpenState}${
      N}  onChange={optionSelected}${
      N}  onClose={setClosedState}${
      N}  material={material}/>
      `}/>
    </div>
  )
})
