import React, { PropTypes, Component } from 'react'

class Spinner extends Component {
  render () {
    return (
      <div>
        <img src="img/spinner.gif" /> {this.props.text}
      </div>
    )
  }
}

Spinner.propTypes = {
  text: PropTypes.string
}

export default Spinner
