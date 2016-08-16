import React, { PropTypes, Component } from 'react'
import { connect } from 'react-redux'

import { incrementCounter, decrementCounter, incrementCounterAsync } from '../../actions/counter'

import {} from './Counter.scss'

export class CounterComponent extends Component {
  constructor () {
    super()
    this.onIncrementCounter = this.onIncrementCounter.bind(this)
    this.onDecrementCounter = this.onDecrementCounter.bind(this)
    this.onIncrementCounterAsync = this.onIncrementCounterAsync.bind(this)
  }

  onIncrementCounter () {
    this.props.dispatch(incrementCounter())
  }

  onDecrementCounter () {
    this.props.dispatch(decrementCounter())
  }

  onIncrementCounterAsync () {
    this.props.dispatch(incrementCounterAsync())
  }

  render () {
    return (
      <div className="counter">
        <h2 className="counter__number">{this.props.counter}</h2>
        <button onClick={this.onIncrementCounter}
          className="counter__button">
          +
        </button>

        <button onClick={this.onDecrementCounter}
          className="counter__button">
          -
        </button>

        <button onClick={this.onIncrementCounterAsync}
          className="counter__button counter__button--async">
          async
        </button>
      </div>
    )
  }
}

CounterComponent.propTypes = {
  counter: PropTypes.number.isRequired,
  dispatch: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
  return {
    counter: state.counter
  }
}

export default connect(mapStateToProps)(CounterComponent)
