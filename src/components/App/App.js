import React, { Component } from 'react'

import Todos from '../../containers/Todos'

import Counter from '../../containers/Counter'
import DevTools from '../../containers/DevTools'

class App extends Component {
  render () {
    return (
      <div>
        <Counter />
        <Todos />
        {
          !process.env.PRODUCTION
          ? <DevTools />
          : <div></div>
        }
      </div>
    )
  }
}

export default App
