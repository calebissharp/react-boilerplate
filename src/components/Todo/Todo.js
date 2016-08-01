import React, { PropTypes, Component } from 'react'

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
      <div className={this.props.complete ? 'todo todo--complete' : 'todo'} onClick={this.onClick}>
        <h3 className={this.props.complete ? 'todo__title todo__title--complete' : 'todo__title'}>
          {this.props.title}
        </h3>
      </div>
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
