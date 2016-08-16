jest.unmock('components/Todo/Todo')

import React from 'react'
import { shallow } from 'enzyme'
import { ListGroupItem } from 'react-bootstrap'

import Todo from 'components/Todo/Todo'

describe('<Todo />', () => {
  let wrapper
  let mockOnClick

  beforeEach(() => {
    mockOnClick = jest.fn()

    wrapper = shallow(
      <Todo title="test-todo" complete id={1} onClick={mockOnClick} />
    )
  })

  it('renders a ListGroupItem', () => {
    expect(wrapper.type()).toEqual(ListGroupItem)
  })

  it('calls onClick prop when clicked on', () => {
    expect(mockOnClick.mock.calls.length).toEqual(0)
    wrapper.find(ListGroupItem).simulate('click')
    expect(mockOnClick.mock.calls.length).toEqual(1)
  })

  it('renders the title', () => {
    expect(wrapper.find('span').text()).toEqual('test-todo')
  })

  it('gives the title a text-danger class if it is completed', () => {
    expect(wrapper.find('span').hasClass('text-danger')).toEqual(true)

    wrapper = shallow(
      <Todo title="test-todo" complete={false} id={1} onClick={mockOnClick} />
    )

    expect(wrapper.find('span').hasClass('text-danger')).toEqual(false)
  })
})
