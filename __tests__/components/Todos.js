jest.unmock('routes/Todos/Todos')

import React from 'react'
import { shallow, mount } from 'enzyme'

import { TodosComponent } from 'routes/Todos/Todos'
import { fetchTodosIfNeeded, completeTodo, removeCompletedTodos } from 'actions/todos'

describe('<TodosComponent />', () => {
  let wrapper
  let dispatch

  beforeEach(() => {
    dispatch = jest.fn()

    wrapper = shallow(
      <TodosComponent dispatch={dispatch} todos={[]} isFetching={false} />
    )
  })

  it('renders a div with the todos class', () => {
    expect(wrapper.type()).toEqual('div')
    expect(wrapper.hasClass('todos')).toEqual(true)
  })

  it('renders an AddTodo', () => {
    expect(wrapper.find('Connect(AddTodoComponent)').length).toEqual(1)
  })

  it('renders a TodoList', () => {
    expect(wrapper.find('TodoList').length).toEqual(1)
  })

  it('says if there are no todos left', () => {
    expect(wrapper.find('p.text-muted').text()).toEqual('No more todos')
  })

  it('fetches todos if needed when mounted', () => {
    expect(fetchTodosIfNeeded.mock.calls.length).toEqual(0)

    wrapper = mount(
      <TodosComponent dispatch={dispatch} todos={[]} isFetching={false} />
    )

    expect(fetchTodosIfNeeded.mock.calls.length).toEqual(1)
  })

  it('calls dispatch with completeTodo when todo is clicked', () => {
    expect(dispatch.mock.calls.length).toEqual(0)
    expect(completeTodo.mock.calls.length).toEqual(0)

    wrapper.find('TodoList').simulate('todoClick')

    expect(completeTodo.mock.calls.length).toEqual(1)
    expect(dispatch.mock.calls.length).toEqual(1)
  })

  it('calls dispatch with removeCompletedTodos when link is clicked', () => {
    wrapper = shallow(
      <TodosComponent dispatch={dispatch} todos={[{}]} isFetching={false} />
    )

    expect(dispatch.mock.calls.length).toEqual(0)
    expect(removeCompletedTodos.mock.calls.length).toEqual(0)

    wrapper.find('a').simulate('click', { preventDefault () {} })

    expect(removeCompletedTodos.mock.calls.length).toEqual(1)
    expect(dispatch.mock.calls.length).toEqual(1)
  })
})
