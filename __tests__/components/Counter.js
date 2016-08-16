jest.unmock('routes/Counter/Counter')

import React from 'react'
import { shallow } from 'enzyme'

import { CounterComponent } from 'routes/Counter/Counter'

import { incrementCounter, decrementCounter, incrementCounterAsync } from 'actions/counter'

describe('<CounterComponent />', () => {
  let wrapper
  let dispatch

  beforeEach(() => {
    dispatch = jest.fn()

    wrapper = shallow(
      <CounterComponent counter={0} dispatch={dispatch} />
    )
  })

  it('renders a div with the counter class:', () => {
    expect(wrapper.type()).toEqual('div')
    expect(wrapper.hasClass('counter')).toEqual(true)
  })

  it('renders the counter', () => {
    expect(wrapper.find('.counter__number').length).toEqual(1)
    expect(wrapper.find('.counter__number').text()).toEqual('0')
  })

  it('calls dispatch with incrementCounter when increment button is pressed', () => {
    expect(dispatch.mock.calls.length).toEqual(0)
    expect(incrementCounter.mock.calls.length).toEqual(0)

    wrapper.findWhere(n => n.type() === 'button' && n.text() === '+').simulate('click')

    expect(incrementCounter.mock.calls.length).toEqual(1)
    expect(dispatch.mock.calls.length).toEqual(1)
  })

  it('calls dispatch with decrementCounter when decrement button is pressed', () => {
    expect(dispatch.mock.calls.length).toEqual(0)
    expect(decrementCounter.mock.calls.length).toEqual(0)

    wrapper.findWhere(n => n.type() === 'button' && n.text() === '-').simulate('click')

    expect(decrementCounter.mock.calls.length).toEqual(1)
    expect(dispatch.mock.calls.length).toEqual(1)
  })

  it('calls dispatch with incrementCounterAsync when increment async button is pressed', () => {
    expect(dispatch.mock.calls.length).toEqual(0)
    expect(incrementCounterAsync.mock.calls.length).toEqual(0)

    wrapper.findWhere(n => n.type() === 'button' && n.text() === 'async').simulate('click')

    expect(incrementCounterAsync.mock.calls.length).toEqual(1)
    expect(dispatch.mock.calls.length).toEqual(1)
  })
})
