jest.unmock('reducers/todos')
jest.unmock('reducers/todo')

import todos from 'reducers/todos'

describe('todos', () => {
  it('handles REQUEST_TODOS by setting isFetching to true', () => {
    const state = {
      isFetching: false
    }
    const newState = todos(state, { type: 'REQUEST_TODOS' })

    expect(newState).toEqual({
      isFetching: true
    })
  })

  it('handles RECEIVE_TODOS', () => {
    const now = Date.now()

    const state = {
      isFetching: true,
      didFetch: false,
      items: []
    }
    const newState = todos(state, {
      type: 'RECEIVE_TODOS',
      todos: [
        {
          id: 0,
          title: 'test-todo',
          complete: false
        }
      ],
      receivedAt: now
    })

    expect(newState).toEqual({
      isFetching: false,
      didFetch: true,
      items: [
        {
          id: 0,
          title: 'test-todo',
          complete: false
        }
      ],
      lastUpdated: now
    })
  })

  it('handles ADD_TODO', () => {
    const state = {
      items: []
    }
    const newState = todos(state, {
      type: 'ADD_TODO',
      id: 0,
      title: 'test-todo',
      complete: false
    })

    expect(newState).toEqual({
      items: [
        {
          id: 0,
          title: 'test-todo',
          complete: false
        }
      ]
    })
  })

  it('handles COMPLETE_TODO', () => {
    const state = {
      items: [
        {
          id: 0,
          title: 'test-todo',
          complete: false
        }
      ]
    }
    const newState = todos(state, {
      type: 'COMPLETE_TODO',
      id: 0
    })

    expect(newState).toEqual({
      items: [
        {
          id: 0,
          title: 'test-todo',
          complete: true
        }
      ]
    })

    it('handles REMOVE_COMPLETED_TODOS', () => {
      const state = {
        items: [
          {
            id: 0,
            title: 'test-todo',
            complete: true
          },
          {
            id: 1,
            title: 'test-todo2',
            complete: false
          }
        ]
      }
      const newState = todos(state, {
        type: 'REMOVE_COMPLETED_TODOS'
      })

      expect(newState).toEqual({
        items: [
          {
            id: 1,
            title: 'test-todo2',
            complete: false
          }
        ]
      })
    })
  })

  it('handles any other action by doing nothing', () => {
    const state = {}
    const newState = todos(state, { type: '' })

    expect(newState).toEqual({})
  })
})
