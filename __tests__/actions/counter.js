jest.unmock('../../src/actions/counter')

import {
  INCREMENT_COUNTER,
  DECREMENT_COUNTER,
  incrementCounter,
  decrementCounter,
  incrementCounterAsync
} from '../../src/actions/counter'

describe('Counter Actions', () => {
  it('exports counter action constants', () => {
    expect(INCREMENT_COUNTER).toEqual('INCREMENT_COUNTER')
    expect(DECREMENT_COUNTER).toEqual('DECREMENT_COUNTER')
  })

  it('exports action creators', () => {
    expect(incrementCounter()).toEqual({
      type: 'INCREMENT_COUNTER'
    })

    expect(decrementCounter()).toEqual({
      type: 'DECREMENT_COUNTER'
    })
  })
})
