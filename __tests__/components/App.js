jest.unmock('components/App/App')

import React from 'react'
import { shallow } from 'enzyme'
import { Navbar } from 'react-bootstrap'

import App from 'components/App/App'

describe('<App />', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(
      <App>
        <p id="__test">test</p>
      </App>
    )
  })

  it('renders it\'s children', () => {
    expect(wrapper.find('#__test').contains('test')).toEqual(true)
  })

  it('renders a navbar', () => {
    expect(wrapper.find(Navbar).length).toEqual(1)
  })

  it('renders a div', () => {
    expect(wrapper.type()).toEqual('div')
  })

  it('renders devtools in development', () => {
    expect(wrapper.find('DevTools').length).toEqual(1)
  })

  it("doesn't render devtools in production", () => {
    process.env.NODE_ENV = 'production'
    wrapper = shallow(
      <App>
        <p id="__test">test</p>
      </App>
    )

    expect(wrapper.find('DevTools').length).toEqual(0)
    process.env.NODE_ENV = 'test'
  })
})
