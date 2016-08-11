import React, { PropTypes, Component } from 'react'

import DevTools from '../../containers/DevTools'

class App extends Component {
  render () {
    return (
      <div>
        {this.props.children}

        {process.env.NODE_ENV !== 'production' &&
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
