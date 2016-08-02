import React, { PropTypes, Component } from 'react'
import { ListGroupItem } from 'react-bootstrap'

import {} from './Todo.scss'

class Todo extends Component {
  constructor () {
    super()
    this.onClick = this.onClick.bind(this)
  }

  onClick (e) {
    this.props.onClick(this.props.id)
  }

  render () {
    return (
      <ListGroupItem onClick={this.onClick}>
        <span className={this.props.complete ? 'text-danger' : ''}>
          {this.props.title}
        </span>
      </ListGroupItem>
    )
  }
}

Todo.propTypes = {
  title: PropTypes.string.isRequired,
  complete: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Todo
