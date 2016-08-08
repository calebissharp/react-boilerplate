let todoIds = 0

export const ADD_TODO = 'ADD_TODO'
export const CREATE_TODO = 'CREATE_TODO'
export const REMOVE_TODO = 'REMOVE_TODO'
export const REMOVE_COMPLETED_TODOS = 'REMOVE_COMPLETED_TODOS'
export const COMPLETE_TODO = 'COMPLETE_TODO'
export const REQUEST_TODOS = 'REQUEST_TODOS'
export const RECEIVE_TODOS = 'RECEIVE_TODOS'

const todos = {
  todos: [
    {
      id: todoIds++,
      title: 'Go do stuff',
      complete: false
    },
    {
      id: todoIds++,
      title: 'Learn React',
      complete: true
    },
    {
      id: todoIds++,
      title: 'Learn Redux',
      complete: true
    }
  ]
}

export const addTodo = (title) => ({
  type: ADD_TODO,
  complete: false,
  id: todoIds++,
  title
})

export const removeTodo = (id) => ({
  type: REMOVE_TODO,
  id
})

export const removeCompletedTodos = () => ({
  type: REMOVE_COMPLETED_TODOS
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
      dispatch(receiveTodos(todos))
    }, 1000)
  }
}

export const fetchTodosIfNeeded = () => {
  return (dispatch, getState) => {
    if (!getState().todos.didFetch && !getState().todos.isFetching) {
      dispatch(fetchTodos())
    }
  }
}
