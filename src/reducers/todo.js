import { COMPLETE_TODO } from '../actions/todos'

const todo = (state, action) => {
  switch (action.type) {
    case COMPLETE_TODO:
      if (action.id === state.id) {
        return Object.assign({}, state, {
          complete: !state.complete
        })
      } else {
        return state
      }
    default:
      return state
  }
}

export default todo
