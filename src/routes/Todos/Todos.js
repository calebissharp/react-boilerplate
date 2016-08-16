import React, { PropTypes, Component } from 'react'
import { connect } from 'react-redux'

import { fetchTodosIfNeeded, completeTodo, removeCompletedTodos, addTodo } from '../../actions/todos'

import TodoList from '../../components/TodoList'
import AddTodo from '../../containers/AddTodo'

import {} from './Todos.scss'

class Todos extends Component {
  constructor () {
    super()
    this.onTodoClick = this.onTodoClick.bind(this)
    this.onRemoveTodosClick = this.onRemoveTodosClick.bind(this)
  }

  componentDidMount () {
    this.props.dispatch(fetchTodosIfNeeded())
  }

  onTodoClick (id) {
    this.props.dispatch(completeTodo(id))
  }

  onRemoveTodosClick (e) {
    e.preventDefault()

    this.props.dispatch(removeCompletedTodos())
  }

  render () {
    return (
      <div className="todos">
        <h1 className="todos__title">Todos</h1>
        <AddTodo addTodo={addTodo} />
        <TodoList todos={this.props.todos} isFetching={this.props.isFetching} onTodoClick={this.onTodoClick} />
        {this.props.todos.length > 0 && !this.props.isFetching &&
          <a onClick={this.onRemoveTodosClick} href="#">Remove Completed Todos</a>
        }

        {this.props.todos.length < 1 && !this.props.isFetching &&
          <p className="text-muted">No more todos</p>
        }
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
