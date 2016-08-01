import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import counter from './counter'
import todos from './todos'

const reducer = combineReducers({
  counter,
  todos,
  routing: routerReducer
})

export default reducer
