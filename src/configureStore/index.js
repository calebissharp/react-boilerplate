import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import reducer from '../reducers'
import DevTools from '../containers/DevTools'

export default (initialState = {}) => {
  const enhancer = compose(
    applyMiddleware(thunk),
    DevTools.instrument()
  )

  const store = createStore(reducer, initialState, enhancer)

  if (module.hot) {
    module.hot.accept('../reducers', () =>
      store.replaceReducer(require('../reducers').default)
    )
  }

  return store
}
