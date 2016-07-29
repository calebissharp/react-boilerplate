import React, { PropTypes } from 'react'
import { connect } from 'react-redux'

import { incrementCounter, decrementCounter, incrementCounterAsync } from '../../actions/counter'

import {} from './app.scss'

let Counter = ({ counter, onIncrementCounter, onDecrementCounter, onIncrementCounterAsync }) => (
  <div className="counter">
    <h2 className="counter__number">{counter}</h2>
    <button onClick={onIncrementCounter} className="counter__button">+</button>
    <button onClick={onDecrementCounter} className="counter__button">-</button>
    <button onClick={onIncrementCounterAsync} className="counter__button">async</button>
  </div>
)

Counter.propTypes = {
  counter: PropTypes.number.isRequired,
  onIncrementCounter: PropTypes.func.isRequired,
  onDecrementCounter: PropTypes.func.isRequired,
  onIncrementCounterAsync: PropTypes.func.isRequired
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
    },
    onIncrementCounterAsync () {
      dispatch(incrementCounterAsync())
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter)
