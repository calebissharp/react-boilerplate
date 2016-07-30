import React from 'react'

import Todos from '../Todos'

import Counter from '../../containers/Counter'
import DevTools from '../../containers/DevTools'

const App = () => (
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

export default App
