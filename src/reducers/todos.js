import { REQUEST_TODOS, RECEIVE_TODOS } from '../actions/todos'

const todos = (state = {
  isFetching: false,
  items: []
}, action) => {
  switch (action.type) {
    case REQUEST_TODOS:
      return Object.assign({}, state, {
        isFetching: false
      })
    case RECEIVE_TODOS:
      return Object.assign({}, state, {
        isFetching: false,
        items: action.todos,
        lastUpdated: action.receivedAt
      })
    default:
      return state
  }
}

export default todos
