import { REQUEST_TODOS, RECEIVE_TODOS, ADD_TODO, COMPLETE_TODO, REMOVE_COMPLETED_TODOS } from '../actions/todos'

import todo from './todo'

const todos = (state = {
  isFetching: false,
  didFetch: false,
  items: []
}, action) => {
  switch (action.type) {
    case REQUEST_TODOS:
      return Object.assign({}, state, {
        isFetching: true
      })
    case RECEIVE_TODOS:
      return Object.assign({}, state, {
        isFetching: false,
        didFetch: true,
        items: action.todos,
        lastUpdated: action.receivedAt
      })
    case ADD_TODO:
      return Object.assign({}, state, {
        items: [
          ...state.items,
          todo({}, action)
        ]
      })
    case COMPLETE_TODO:
      return Object.assign({}, state, {
        items: state.items.map(t => todo(t, action))
      })
    case REMOVE_COMPLETED_TODOS:
      return Object.assign({}, state, {
        items: state.items.filter(t => todo(t, action))
      })
    default:
      return state
  }
}

export default todos
