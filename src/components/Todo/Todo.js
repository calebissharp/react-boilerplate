import React, { PropTypes } from 'react'

const Todo = ({ title, complete }) => (
  <div>
    <h3>{title}</h3>
  </div>
)

Todo.propTypes = {
  title: PropTypes.string.isRequired,
  complete: PropTypes.bool.isRequired
}

export default Todo
