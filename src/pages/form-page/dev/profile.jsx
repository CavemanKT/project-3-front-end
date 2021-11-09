import React from 'react'
import PropTypes from 'prop-types'
import FormsProfileUpdate from '@/forms/profile/profile'
import { connect } from 'react-redux'

import { updateProfile } from '@/actions/dev/profile'

class pageDevProfile extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}

    this.handleProfileFormUpdateSubmit = this.handleProfileFormUpdateSubmit.bind(this)
  }

  handleProfileFormUpdateSubmit(values) {
    const { currentUserState: { currentUser } } = this.props

    console.log(values, currentUser)

    this.props.updateProfile(values, currentUser.id).then(() => {
      const { history: { push } } = this.props
      push('/my/games')
    })
  }

  render() {
    const { currentUserState: { currentUser }, profileState: { devInfo, updatingIDs } } = this.props
    console.log('currentUser: ', currentUser, 'devInfo: ', devInfo, 'updatingIDs:', updatingIDs)
    return (
      <>
        <div>Edit your profile</div>
        <FormsProfileUpdate
          initialValues={{
            username: '',
            firstName: '',
            lastName: ''
          }}
          onSubmit={this.handleProfileFormUpdateSubmit}

        />
      </>
    )
  }
}

pageDevProfile.propTypes = {
  history: PropTypes.shape().isRequired,
  updateProfile: PropTypes.func.isRequired,
  currentUserState: PropTypes.shape().isRequired,
  profileState: PropTypes.shape().isRequired
}

const mapStateToProps = (state) => ({
  currentUserState: state.currentUser,
  profileState: state.profile
})

const mapDispatchToProps = {
  updateProfile
}

export default connect(mapStateToProps, mapDispatchToProps)(pageDevProfile)
