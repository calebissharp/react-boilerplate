import React, { PropTypes, Component } from 'react'
import { connect } from 'react-redux'
import { InputGroup, FormGroup, FormControl } from 'react-bootstrap'

export class AddTodoComponent extends Component {
  constructor () {
    super()

    this.onKeyUp = this.onKeyUp.bind(this)
  }

  onKeyUp (e) {
    if (e.keyCode === 13) {
      this.props.dispatch(this.props.addTodo(e.target.value))
      e.target.value = ''
    }
  }

  render () {
    return (
      <FormGroup>
        <InputGroup>
          <InputGroup.Addon>Todo</InputGroup.Addon>
          <FormControl type="text" onKeyUp={this.onKeyUp} />
        </InputGroup>
      </FormGroup>
    )
  }
}

AddTodoComponent.propTypes = {
  dispatch: PropTypes.func.isRequired,
  addTodo: PropTypes.func.isRequired
}

export default connect()(AddTodoComponent)
