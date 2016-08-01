import React, { PropTypes, Component } from 'react'

import spinnerImage from './spinner.gif'

class Spinner extends Component {
  render () {
    return (
      <div>
        <img src={spinnerImage} /> {this.props.text}
      </div>
    )
  }
}

Spinner.propTypes = {
  text: PropTypes.string
}

export default Spinner
