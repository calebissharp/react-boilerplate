import React, { PropTypes } from 'react'

import {} from './Todo.scss'

const Todo = ({ title, complete }) => (
  <div className={complete ? 'todo todo--complete' : 'todo'}>
    <h3 className={complete ? 'todo__title todo__title--complete' : 'todo__title'}>{title}</h3>
  </div>
)

Todo.propTypes = {
  title: PropTypes.string.isRequired,
  complete: PropTypes.bool.isRequired
}

export default Todo
