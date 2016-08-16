jest.unmock('containers/AddTodo/AddTodo')

import React from 'react'
import { shallow } from 'enzyme'
import { FormControl, FormGroup } from 'react-bootstrap'

import { AddTodoComponent } from 'containers/AddTodo/AddTodo'
import { addTodo } from 'actions/todos'

describe('<AddTodoComponent />', () => {
  let wrapper
  let dispatch

  beforeEach(() => {
    dispatch = jest.fn()

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
    expect(addTodo.mock.calls[0][0]).toEqual('test-todo')
    expect(dispatch.mock.calls.length).toEqual(1)
  })
})
