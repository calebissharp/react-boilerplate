import React, { PropTypes, Component } from 'react'
import { connect } from 'react-redux'

import { fetchTodos } from '../../actions/todos'

import TodoList from '../../components/TodoList'

class Todos extends Component {
  componentDidMount () {
    this.props.fetchTodos()
  }

  render () {
    return (
      <div>
        <h1>Todos</h1>
        <TodoList todos={this.props.todos} />
      </div>
    )
  }
}

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
