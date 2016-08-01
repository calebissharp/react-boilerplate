import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import configureStore from './configureStore'
import App from './components/App'
import Counter from './containers/Counter'
import Todos from './containers/Todos'

import {} from 'file?name=[name].[ext]!./favicon.ico'
import {} from './app.scss'

const store = configureStore()
const history = syncHistoryWithStore(browserHistory, store)

render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={Counter} />
        <Route path="counter" component={Counter} />
        <Route path="todos" component={Todos} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('react')
)
