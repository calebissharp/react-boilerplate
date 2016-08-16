jest.unmock('components/Spinner/Spinner')

import React from 'react'
import { shallow } from 'enzyme'

import Spinner from 'components/Spinner/Spinner'

describe('<Spinner />', () => {
  it('should render text property', () => {
    const wrapper = shallow(<Spinner text="Loading something" />)

    expect(wrapper.contains('Loading something')).toEqual(true)
  })

  it('should render an image of a spinner', () => {
    const wrapper = shallow(<Spinner text="text" />)

    expect(wrapper.children('img').is('.spinner__image')).toEqual(true)
  })

  it('renders a div', () => {
    const wrapper = shallow(<Spinner text="text" />)

    expect(wrapper.type()).toEqual('div')
  })
})
