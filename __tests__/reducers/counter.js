jest.unmock('reducers/counter')

import counter from 'reducers/counter'

describe('counter', () => {
  it('handles INCREMENT_COUNTER by incrementing the state', () => {
    const state = 0
    const newState = counter(state, { type: 'INCREMENT_COUNTER' })

    expect(newState).toEqual(1)
  })

  it('handles DECREMENT_COUNTER by decrementing the state', () => {
    const state = 0
    const newState = counter(state, { type: 'DECREMENT_COUNTER' })

    expect(newState).toEqual(-1)
  })

  it('handles any other action by doing nothing', () => {
    const state = 0
    const newState = counter(state, { type: '' })

    expect(newState).toEqual(0)
  })
})
