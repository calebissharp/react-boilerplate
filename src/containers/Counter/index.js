import React, { PropTypes } from 'react'
import { connect } from 'react-redux'

import { incrementCounter, decrementCounter } from '../../actions/counter'

import {} from './app.scss'

let Counter = ({ counter, onIncrementCounter, onDecrementCounter }) => (
  <div className="counter">
    <h2 className="counter__number">{counter}</h2>
    <button onClick={onIncrementCounter} className="counter__button">+</button>
    <button onClick={onDecrementCounter} className="counter__button">-</button>
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
