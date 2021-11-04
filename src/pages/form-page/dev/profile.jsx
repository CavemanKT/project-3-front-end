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
      push('/dev/games')
    })
  }

  render() {
    const { currentUserState: { currentUser } } = this.props
    return (
      <>
        <div>Edit your profile</div>
        <FormsProfileUpdate
          onSubmit={this.handleProfileFormUpdateSubmit}

        />
      </>
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
