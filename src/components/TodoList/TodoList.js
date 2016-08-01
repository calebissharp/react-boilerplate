import React, { PropTypes } from 'react'

import Spinner from '../Spinner'
import Todo from '../Todo'

import {} from './TodoList.scss'

const TodoList = ({ todos, isFetching, onTodoClick }) => {
  if (isFetching) {
    return (
      <Spinner text='Loading' />
    )
  } else {
    return (
      <div className="todolist">
      {todos.map(todo => {
        return (
          <Todo {...todo} key={todo.id} onClick={onTodoClick} />
        )
      })}
      </div>
    )
  }
}

TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired,
  onTodoClick: PropTypes.func.isRequired
}

export default TodoList
