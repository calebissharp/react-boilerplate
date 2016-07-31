import React, { PropTypes } from 'react'
import { connect } from 'react-redux'

import { incrementCounter, decrementCounter, incrementCounterAsync } from '../../actions/counter'

import {} from './counter.scss'

class Counter {
  render() {
    return (
      <div className="counter">
        <h2 className="counter__number">{this.props.counter}</h2>
        <button onClick={this.props.onIncrementCounter}
          className="counter__button">
          +
        </button>

        <button onClick={this.props.onDecrementCounter}
          className="counter__button">
          -
        </button>

        <button onClick={this.props.onIncrementCounterAsync}
          className="counter__button counter__button--async">
          async
        </button>
      </div>
    )
  }
}

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
