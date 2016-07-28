import React, { PropTypes } from 'react'
import { connect } from 'react-redux'

import { incrementCounter, decrementCounter } from '../../actions/counter'

let Counter = ({ counter, onIncrementCounter, onDecrementCounter }) => (
  <div>
    <h2>{counter.toString()}</h2>
    <button onClick={onIncrementCounter}>+</button>
    <button onClick={onDecrementCounter}>-</button>
  </div>
)

Counter.propTypes = {
  counter: PropTypes.number.isRequired,
  onIncrementCounter: PropTypes.func.isRequired,
  onDecrementCounter: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
  return {
    counter: state.counter
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onIncrementCounter () {
      dispatch(incrementCounter())
    },
    onDecrementCounter () {
      dispatch(decrementCounter())
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter)
