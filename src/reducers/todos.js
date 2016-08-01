import { REQUEST_TODOS, RECEIVE_TODOS, COMPLETE_TODO } from '../actions/todos'

import todo from './todo'

const todos = (state = {
  isFetching: false,
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
        items: action.todos,
        lastUpdated: action.receivedAt
      })
    case COMPLETE_TODO:
      return Object.assign({}, state, {
        items: state.items.map(t => todo(t, action))
      })
    default:
      return state
  }
}

export default todos
