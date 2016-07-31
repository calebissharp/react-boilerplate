import React, { PropTypes } from 'react'

import Spinner from '../Spinner'

const TodoList = ({ todos, isFetching }) => {
  if (isFetching) {
    return (
      <Spinner text='Loading' />
    )
  } else {
    return (
      <ul>
      {todos.map(todo => {
        return (
          <li key={todo.id}>{todo.title}</li>
        )
      })}
      </ul>
    )
  }
}

TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired
}

export default TodoList
