import React from 'react'
import { render } from 'react-dom'
import createStore from './createStore'
import App from './components/App'

const store = createStore()

render(
  <App />,
  document.getElementById('react')
)
