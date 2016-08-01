import React, { PropTypes, Component } from 'react'

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
        <div className="todolist">
        {this.props.todos.map(todo => {
          return (
            <Todo {...todo} key={todo.id} onClick={this.props.onTodoClick} />
          )
        })}
        </div>
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
