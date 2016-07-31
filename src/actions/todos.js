export const CREATE_TODO = 'CREATE_TODO'
export const REMOVE_TODO = 'REMOVE_TODO'
export const COMPLETE_TODO = 'COMPLETE_TODO'
export const REQUEST_TODOS = 'REQUEST_TODOS'
export const RECEIVE_TODOS = 'RECEIVE_TODOS'

export const createTodo = (title) => ({
  type: CREATE_TODO,
  complete: false,
  title
})

export const removeTodo = (id) => ({
  type: REMOVE_TODO,
  id
})

export const completeTodo = (id) => ({
  type: COMPLETE_TODO,
  id
})

export const requestTodos = () => ({
  type: REQUEST_TODOS
})

export const receiveTodos = (json) => ({
  type: RECEIVE_TODOS,
  todos: json.todos,
  receivedAt: Date.now()
})

export const fetchTodos = () => {
  return dispatch => {
    dispatch(requestTodos())
    setTimeout(() => {
      return fetch('http://localhost:8080/todos.json')
      .then(res => res.json())
      .then(json => dispatch(receiveTodos(json)))
    }, 1000)
  }
}
