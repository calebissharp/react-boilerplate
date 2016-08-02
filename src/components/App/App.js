import React, { PropTypes, Component } from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Link } from 'react-router'
import { Nav, NavItem, Navbar } from 'react-bootstrap'

import DevTools from '../../containers/DevTools'

class App extends Component {
  render () {
    return (
      <div>
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <Link to="/">React Boilerplate</Link>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              <LinkContainer to={{pathname: 'counter'}}>
                <NavItem>Counter</NavItem>
              </LinkContainer>
              <LinkContainer to={{pathname: 'todos'}}>
                <NavItem>Todos</NavItem>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        {this.props.children}

        {process.env.NODE_ENV !== 'PRODUCTION' &&
          <DevTools />
        }
      </div>
    )
  }
}

App.propTypes = {
  children: PropTypes.element.isRequired
}

export default App
