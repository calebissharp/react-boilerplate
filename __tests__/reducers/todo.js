jest.unmock('reducers/todo')

import todo from 'reducers/todo'

describe('todo', () => {
  it('handles ADD_TODO', () => {
    const state = null
    const newState = todo(state, {
      type: 'ADD_TODO',
      id: 0,
      title: 'test-todo',
      complete: false
    })

    expect(newState).toEqual({
      id: 0,
      title: 'test-todo',
      complete: false
    })
  })

  it('handles COMPLETE_TODO', () => {
    const state = {
      id: 0,
      title: 'test-todo',
      complete: false
    }
    const newState = todo(state, {
      type: 'COMPLETE_TODO',
      id: 0
    })

    expect(newState).toEqual({
      id: 0,
      title: 'test-todo',
      complete: true
    })
  })

  it('skips COMPLETE_TODO if action.id is not the same as state.id', () => {
    const state = {
      id: 0,
      title: 'test-todo',
      complete: false
    }
    const newState = todo(state, {
      type: 'COMPLETE_TODO',
      id: 1
    })

    expect(newState).toEqual({
      id: 0,
      title: 'test-todo',
      complete: false
    })
  })

  it('handles REMOVE_COMPLETED_TODOS', () => {
    const state = {
      id: 0,
      title: 'test-todo',
      complete: true
    }
    const newState = todo(state, {
      type: 'REMOVE_COMPLETED_TODOS'
    })

    expect(newState).toEqual(false)
  })

  it('handles any other action by doing nothing', () => {
    const state = 0
    const newState = todo(state, { type: '' })

    expect(newState).toEqual(0)
  })
})
