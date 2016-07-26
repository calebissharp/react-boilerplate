import React from 'react'
import { render } from 'react-dom'
import createStore from './createStore'

const store = createStore()

render(
  <h1>Hello from React</h1>,
  document.getElementById('react')
)
