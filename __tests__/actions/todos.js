jest.unmock('../../src/actions/todos')

import {
  ADD_TODO,
  CREATE_TODO,
  REMOVE_TODO,
  REMOVE_COMPLETED_TODOS,
  COMPLETE_TODO,
  REQUEST_TODOS,
  RECEIVE_TODOS,
  addTodo,
  removeTodo,
  removeCompletedTodos,
  completeTodo,
  requestTodos,
  receiveTodos,
  fetchTodos,
  fetchTodosIfNeeded
} from '../../src/actions/todos'

describe('Counter Actions', () => {
  it('exports todos action constants', () => {
    expect(ADD_TODO).toEqual('ADD_TODO')
    expect(CREATE_TODO).toEqual('CREATE_TODO')
    expect(REMOVE_TODO).toEqual('REMOVE_TODO')
    expect(REMOVE_COMPLETED_TODOS).toEqual('REMOVE_COMPLETED_TODOS')
    expect(COMPLETE_TODO).toEqual('COMPLETE_TODO')
    expect(REQUEST_TODOS).toEqual('REQUEST_TODOS')
    expect(RECEIVE_TODOS).toEqual('RECEIVE_TODOS')
  })

  it('exports action creators', () => {
    expect(addTodo('test-todo')).toEqual({
      type: 'ADD_TODO',
      complete: false,
      id: 3,
      title: 'test-todo'
    })

    expect(removeTodo(0)).toEqual({
      type: 'REMOVE_TODO',
      id: 0
    })

    expect(removeCompletedTodos()).toEqual({
      type: 'REMOVE_COMPLETED_TODOS'
    })

    expect(completeTodo(0)).toEqual({
      type: 'COMPLETE_TODO',
      id: 0
    })

    expect(requestTodos()).toEqual({
      type: 'REQUEST_TODOS'
    })

    const todos = receiveTodos({ todos: [] })

    expect(todos).toEqual({
      type: 'RECEIVE_TODOS',
      todos: [],
      receivedAt: todos.receivedAt
    })
  })

  it('exports async action creators', () => {
    const dispatch = jest.fn()
    fetchTodos()(dispatch)
    setTimeout.mock.calls[0][0]()
    expect(dispatch.mock.calls[0][0]).toEqual({ type: 'REQUEST_TODOS' })

    const getState = () => ({ todos: { didFetch: false, isFetching: false } })

    fetchTodosIfNeeded()(dispatch, getState)
    expect(typeof dispatch.mock.calls[2][0]).toEqual('function')
  })
})
