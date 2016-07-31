import React, { PropTypes } from 'react'
import { connect } from 'react-redux'

import { fetchTodos } from '../../actions/todos'

import TodoList from '../../components/TodoList'

let Todos = ({ todos, fetchTodos }) => (
  <div>
    <h1>Todos</h1>
    <TodoList todos={todos} />
  </div>
)

Todos.propTypes = {
  todos: PropTypes.array.isRequired,
  fetchTodos: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
  return {
    todos: state.todos.items
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchTodos () {
      dispatch(fetchTodos())
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Todos)
