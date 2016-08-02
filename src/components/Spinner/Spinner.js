import React, { PropTypes, Component } from 'react'

import spinnerImage from './spinner.gif'

import {} from './Spinner.scss'

class Spinner extends Component {
  render () {
    return (
      <div className="spinner">
        <img src={spinnerImage} /> {this.props.text}
      </div>
    )
  }
}

Spinner.propTypes = {
  text: PropTypes.string
}

export default Spinner
