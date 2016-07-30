import { combineReducers } from 'redux'

import counter from './counter'
import todos from './todos'

const reducer = combineReducers({
  counter,
  todos
})

export default reducer
