import React from 'react'
import PropTypes from 'prop-types'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'

// modals
import ModalsSignup from '@/modals/auth/Signup'
import ModalsLogin from '@/modals/auth/Login'

import { authLogout, authLogin, authSignup } from '@/actions/auth'

class LayoutsNavbar extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      showModalsSignup: false,
      showModalsLogin: false
    }

    this.openModalsSignup = this.openModalsSignup.bind(this)
    this.openModalsLogin = this.openModalsLogin.bind(this)
    this.closeModalsSignup = this.closeModalsSignup.bind(this)
    this.closeModalsLogin = this.closeModalsLogin.bind(this)
    this.handleLogoutClick = this.handleLogoutClick.bind(this)
    this.handleSignupSubmit = this.handleSignupSubmit.bind(this)
    this.handleLoginSubmit = this.handleLoginSubmit.bind(this)
  }

  handleLogoutClick() {
    this.props.authLogout()
  }

  handleSignupSubmit(values) {
    this.props.authSignup(values).then(() => {
      const { history: { push } } = this.props
      push('/auth/login')
    })
  }

  handleLoginSubmit(values) {
    this.props.authLogin(values).then(() => {
      const { history: { push } } = this.props
      push('/api/games')
    })
  }

  openModalsSignup() {
    this.setState({ showModalsSignup: true })
  }

  openModalsLogin() {
    this.setState({ showModalsLogin: true })
  }

  closeModalsSignup() {
    this.setState({ showModalsSignup: false })
  }

  closeModalsLogin() {
    this.setState({ showModalsLogin: false })
  }

  render() {
    // const { currentUserState: { currentUser } } = this.props
    const { showModalsSignup, showModalsLogin } = this.state
    return (
      <>
        <Navbar id="layouts-navbar" bg="light" variant="light" expand="lg" collapseOnSelect>
          <Navbar.Brand id="layouts-navbar-brand" as={NavLink} to="/">Indie Dever Zone</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav id="layouts-navbar-navlink" className="ml-auto">
              <Nav.Link as={NavLink} to="/todos" eventKey="1">Browse Todo</Nav.Link>
              {/* { */}
              {/* currentUser ? ( */}
              {/* <> */}
              <Nav.Link onClick={this.handleLogoutClick} eventKey="2">Logout</Nav.Link>
              {/* </> */}
              {/* ) : ( */}
              {/* <> */}
              <Nav.Link onClick={this.openModalsSignup} eventKey="3">Signup</Nav.Link>
              <Nav.Link onClick={this.openModalsLogin} eventKey="4">Login</Nav.Link>
              {/* </> */}
              {/* ) */}
              {/* } */}
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <div id="authModals" className="container">
          { showModalsSignup && <ModalsSignup close={this.closeModalsSignup} onSubmit={this.handleSignupSubmit} />}
          {/* remember to define the function in this page */}
          { showModalsLogin && <ModalsLogin close={this.closeModalsLogin} onSubmit={this.handleLoginSubmit} />}
        </div>
      </>
    )
  }
}

LayoutsNavbar.propTypes = {
  // currentUserState: PropTypes.shape().isRequired,
  history: PropTypes.shape().isRequired,
  authLogout: PropTypes.func.isRequired,
  authSignup: PropTypes.func.isRequired,
  authLogin: PropTypes.func.isRequired

}

const mapStateToProps = (state) => ({
  // currentUserState: state.currentUser
})

const mapDispatchToProps = {
  authLogout,
  authLogin,
  authSignup
}

export default connect(mapStateToProps, mapDispatchToProps)(LayoutsNavbar)
