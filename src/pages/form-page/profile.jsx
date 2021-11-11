import React from 'react'
import PropTypes from 'prop-types'
import FormsProfileUpdate from '@/forms/profile/profile'
import FormsTalentProfileUpdate from '@/forms/profile/talent-profile'
import { connect } from 'react-redux'

import { updateProfile } from '@/actions/my/profile'

class pageDevProfile extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(values) {
    const { currentUserState: { currentUser } } = this.props

    this.props.updateProfile(values, currentUser.id).then(() => {
      const { history: { push } } = this.props
      if (currentUser.type === 'Developer') {
        push('/my/games')
      }

      if (currentUser.type === 'Marketer') {
        push('/my/applications')
      }
    })
  }

  render() {
    const { currentUserState: { currentUser } } = this.props

    return (
      <div id="pages-my-profile" className="container my-3">
        <div className="row">
          <div className="col-12 col-md-8 offset-md-2 col-lg-6 offset-lg-3">
            <h2 className="text-center">Edit your profile</h2>
            {
              currentUser && currentUser.type === 'Developer' && (
                <FormsProfileUpdate
                  initialValues={currentUser}
                  onSubmit={this.handleSubmit}
                />
              )
            }

            {
              currentUser && currentUser.type === 'Marketer' && (
                <FormsTalentProfileUpdate
                  initialValues={currentUser}
                  onSubmit={this.handleSubmit}
                />
              )
            }
          </div>
        </div>
      </div>
    )
  }
}

pageDevProfile.propTypes = {
  history: PropTypes.shape().isRequired,
  updateProfile: PropTypes.func.isRequired,
  currentUserState: PropTypes.shape().isRequired
}

const mapStateToProps = (state) => ({
  currentUserState: state.currentUser
})

const mapDispatchToProps = {
  updateProfile
}

export default connect(mapStateToProps, mapDispatchToProps)(pageDevProfile)
