jest.unmock('components/TodoList/TodoList')
jest.unmock('components/Spinner')

import React from 'react'
import { shallow } from 'enzyme'
import { ListGroup } from 'react-bootstrap'

import TodoList from 'components/TodoList/TodoList'
import Spinner from 'components/Spinner/Spinner'

describe('<TodoList />', () => {
  let wrapper
  let mockOnClick

  const todos = [
    {
      id: 1,
      title: 'test-todo',
      complete: true
    }
  ]

  beforeEach(() => {
    mockOnClick = jest.fn()

    wrapper = shallow(
      <TodoList todos={todos} isFetching={false} onTodoClick={mockOnClick} />
    )
  })

  it('renders a Spinner if isFetching prop is true', () => {
    wrapper = shallow(
      <TodoList todos={todos} isFetching onTodoClick={mockOnClick} />
    )

    expect(wrapper.type()).toEqual(Spinner)
  })

  it('renders a ListGroup', () => {
    expect(wrapper.type()).toEqual(ListGroup)
  })

  it('renders a list of todos', () => {
    expect(wrapper.find('Todo').length).toEqual(1)
  })

  it('passes calls onTodoClick when a todo is clicked', () => {
    expect(mockOnClick.mock.calls.length).toEqual(0)
    wrapper.find('Todo').simulate('click')
    expect(mockOnClick.mock.calls.length).toEqual(1)
  })
})
