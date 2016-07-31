import React, { PropTypes } from 'react'

const Spinner = ({ text }) => (
  <div>
    <img src="img/spinner.gif" /> {text}
  </div>
)

Spinner.propTypes = {
  text: PropTypes.string
}

export default Spinner
