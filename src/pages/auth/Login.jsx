import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { authLogin } from '@/actions/auth'

import FormsAuthLogin from '@/forms/auth/Login'

class PagesAuthLogin extends React.Component {
  constructor(props) {
    super(props)

    this.handleLoginSubmit = this.handleLoginSubmit.bind(this)
  }

  handleLoginSubmit(values) {
    this.props.authLogin(values).then(() => {
      const { history: { push } } = this.props
      push('/todos')
    })
  }

  render() {
    return (
      <div id="pages-auth-login" className="container my-3">
        <h1 className="text-center mb-3">Login</h1>

        <div className="row">
          <div className="col-12 col-md-10 offset-md-1 col-lg-8 offset-lg-2">
            <FormsAuthLogin
              onSubmit={this.handleLoginSubmit}
            />
          </div>
        </div>
      </div>
    )
  }
}

PagesAuthLogin.propTypes = {
  history: PropTypes.shape().isRequired,
  authLogin: PropTypes.func.isRequired
}

const mapDispatchToProps = {
  authLogin
}

export default connect(null, mapDispatchToProps)(PagesAuthLogin)
