import React from 'react'
import PropTypes from 'prop-types'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'

// modals
import ModalsSignup from '@/modals/auth/Signup'

import { authLogout } from '@/actions/auth'

class LayoutsNavbar extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      showModalsSignup: false
    }

    this.openModalsSignup = this.openModalsSignup.bind(this)
    this.closeModalsSignup = this.closeModalsSignup.bind(this)
    this.handleLogoutClick = this.handleLogoutClick.bind(this)
  }

  handleLogoutClick() {
    this.props.authLogout()
  }

  handleSignupSubmit(values) {
    // this.props.authSignup(values).then(() => {
    //   const { history: { push } } = this.props
    //   push('/auth/login')
    // })
  }

  openModalsSignup() {
    this.setState({ showModalsSignup: true })
  }

  closeModalsSignup() {
    this.setState({ showModalsSignup: false })
  }

  render() {
    // const { currentUserState: { currentUser } } = this.props
    const { showModalsSignup } = this.state
    return (
      <>
        <Navbar id="layouts-navbar" bg="dark" variant="dark" expand="lg" collapseOnSelect>
          <Navbar.Brand as={NavLink} to="/">Todo DB</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link as={NavLink} to="/todos" eventKey="1">Browse Todo</Nav.Link>
              {/* { */}
              {/* currentUser ? ( */}
              {/* <> */}
              <Nav.Link onClick={this.handleLogoutClick} eventKey="2">Logout</Nav.Link>
              {/* </> */}
              {/* ) : ( */}
              {/* <> */}
              <Nav.Link onClick={this.openModalsSignup} eventKey="3">Signup</Nav.Link>
              <Nav.Link as={NavLink} to="/auth/login" eventKey="4">Login</Nav.Link>
              {/* </> */}
              {/* ) */}
              {/* } */}
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <div id="modalsSignup" className="container">
          { showModalsSignup && <ModalsSignup close={this.closeModalsSignup} onSubmit={this.handleSignupSubmit} />}
          {/* remember to define the function in this page */}

        </div>
      </>
    )
  }
}

LayoutsNavbar.propTypes = {
  // currentUserState: PropTypes.shape().isRequired,
  authLogout: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
  // currentUserState: state.currentUser
})

const mapDispatchToProps = {
  authLogout
}

export default connect(mapStateToProps, mapDispatchToProps)(LayoutsNavbar)
