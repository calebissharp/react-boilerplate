import React from 'react'

import Counter from '../../containers/Counter'
import DevTools from '../../containers/DevTools'

const App = () => (
  <div>
    <Counter />
    {
      !process.env.PRODUCTION
      ? <DevTools />
      : <div></div>
    }
  </div>
)

export default App
