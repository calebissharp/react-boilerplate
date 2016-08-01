import React, { PropTypes, Component } from 'react'

import DevTools from '../../containers/DevTools'

class App extends Component {
  render () {
    return (
      <div>
        {this.props.children}
        {
          !process.env.PRODUCTION
          ? <DevTools />
          : <div></div>
        }
      </div>
    )
  }
}

App.propTypes = {
  children: PropTypes.element.isRequired
}

export default App
