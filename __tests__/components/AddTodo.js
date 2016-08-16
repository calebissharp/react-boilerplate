jest.unmock('containers/AddTodo/AddTodo')

import React from 'react'
import { shallow } from 'enzyme'
import { FormControl, FormGroup } from 'react-bootstrap'

import { AddTodoComponent } from 'containers/AddTodo/AddTodo'

describe('<AddTodoComponent />', () => {
  let wrapper
  let dispatch
  let addTodo

  beforeEach(() => {
    dispatch = jest.fn()
    addTodo = jest.fn((title) => {
      return title
    })

    wrapper = shallow(
      <AddTodoComponent dispatch={dispatch} addTodo={addTodo} />
    )
  })

  it('renders a FormGroup', () => {
    expect(wrapper.type()).toEqual(FormGroup)
  })

  it('calls dispatch with the value returned by the addTodo prop when enter is pressed', () => {
    expect(dispatch.mock.calls.length).toEqual(0)
    expect(addTodo.mock.calls.length).toEqual(0)
    wrapper.find(FormControl).simulate('keyup', {
      keyCode: 13,
      target: { value: 'test-todo' }
    })
    expect(addTodo.mock.calls.length).toEqual(1)
    expect(dispatch.mock.calls[0][0]).toEqual('test-todo')
  })
})
