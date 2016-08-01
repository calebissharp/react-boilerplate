import React, { PropTypes, Component } from 'react'
import { connect } from 'react-redux'

import { fetchTodos, completeTodo } from '../../actions/todos'

import TodoList from '../../components/TodoList'

import {} from './Todos.scss'

class Todos extends Component {
  constructor () {
    super()
    this.onTodoClick = this.onTodoClick.bind(this)
  }

  componentDidMount () {
    this.props.dispatch(fetchTodos())
  }

  onTodoClick (id) {
    this.props.dispatch(completeTodo(id))
  }

  render () {
    return (
      <div className="todos">
        <h1 className="todos__title">Todos</h1>
        <TodoList todos={this.props.todos} isFetching={this.props.isFetching} onTodoClick={this.onTodoClick} />
      </div>
    )
  }
}

Todos.propTypes = {
  todos: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
  return {
    todos: state.todos.items,
    isFetching: state.todos.isFetching
  }
}

export default connect(mapStateToProps)(Todos)
