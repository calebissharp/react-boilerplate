import React, { PropTypes } from 'react'

const TodoList = ({ todos }) => (
  <ul>
    {todos.map(todo => {
      return (
        <li key={todo.id}>{todo.title}</li>
      )
    })}
  </ul>
)

TodoList.propTypes = {
  todos: PropTypes.array.isRequired
}

export default TodoList
