export const CREATE_TODO = 'CREATE_TODO'
export const REMOVE_TODO = 'REMOVE_TODO'
export const REMOVE_COMPLETED_TODOS = 'REMOVE_COMPLETED_TODOS'
export const COMPLETE_TODO = 'COMPLETE_TODO'
export const REQUEST_TODOS = 'REQUEST_TODOS'
export const RECEIVE_TODOS = 'RECEIVE_TODOS'

const todos = {
  todos: [
    {
      id: 1,
      title: 'Go do stuff',
      complete: false
    },
    {
      id: 2,
      title: 'Learn React',
      complete: true
    },
    {
      id: 3,
      title: 'Learn Redux',
      complete: true
    }
  ]
}

export const createTodo = (title) => ({
  type: CREATE_TODO,
  complete: false,
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
