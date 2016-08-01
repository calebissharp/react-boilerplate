import React, { PropTypes, Component } from 'react'
import { Link } from 'react-router'

import DevTools from '../../containers/DevTools'

class App extends Component {
  render () {
    return (
      <div>
        {this.props.children}
        <Link to="counter">Counter</Link>
        <Link to="todos">Todos</Link>
        {process.env.NODE_ENV === 'PRODUCTION' &&
          <DevTools />
        }
      </div>
    )
  }
}

App.propTypes = {
  children: PropTypes.element.isRequired
}

export default App
