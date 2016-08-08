import { ADD_TODO, COMPLETE_TODO, REMOVE_COMPLETED_TODOS } from '../actions/todos'

const todo = (state, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        complete: action.complete,
        id: action.id,
        title: action.title
      }
    case COMPLETE_TODO:
      if (action.id === state.id) {
        return Object.assign({}, state, {
          complete: !state.complete
        })
      } else {
        return state
      }
    case REMOVE_COMPLETED_TODOS:
      return !state.complete
    default:
      return state
  }
}

export default todo
