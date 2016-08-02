import React, { PropTypes, Component } from 'react'
import { ListGroup } from 'react-bootstrap'

import Spinner from '../Spinner'
import Todo from '../Todo'

import {} from './TodoList.scss'

class TodoList extends Component {
  render () {
    if (this.props.isFetching) {
      return (
        <Spinner text='Loading' />
      )
    } else {
      return (
        <ListGroup>
        {this.props.todos.map(todo => {
          return (
            <Todo {...todo} key={todo.id} onClick={this.props.onTodoClick} />
          )
        })}
        </ListGroup>
      )
    }
  }
}

TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired,
  onTodoClick: PropTypes.func.isRequired
}

export default TodoList
