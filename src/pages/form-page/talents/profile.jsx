import React from 'react'
import PropTypes from 'prop-types'
import FormsTalentProfileUpdate from '@/forms/profile/talent-profile'
import { connect } from 'react-redux'

import { updateProfile } from '@/actions/talent/profile'

class pageTalentProfile extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}

    this.handleTalentProfileFormUpdateSubmit = this.handleTalentProfileFormUpdateSubmit.bind(this)
  }

  handleTalentProfileFormUpdateSubmit(values) {
    const { currentUserState: { currentUser } } = this.props

    this.props.updateProfile(values, currentUser.id).then(() => {
      const { history: { push } } = this.props
      push('/')
    })
  }

  render() {
    const { currentUserState: { currentUser }, TalentInfoState: { TalentInfo, updatingIDs } } = this.props
    console.log('currentUser: ', currentUser, 'TalentInfo: ', TalentInfo, 'updatingIDs:', updatingIDs)
    return (
      <>
        <div>Edit your profile</div>
        <FormsTalentProfileUpdate
          initialValues={{
            username: '',
            firstName: '',
            lastName: '',
            resume: ''
          }}
          onSubmit={this.handleTalentProfileFormUpdateSubmit}

        />
      </>
    )
  }
}

pageTalentProfile.propTypes = {
  history: PropTypes.shape().isRequired,
  updateProfile: PropTypes.func.isRequired,
  currentUserState: PropTypes.shape().isRequired,
  TalentInfoState: PropTypes.shape().isRequired
}

const mapStateToProps = (state) => ({
  currentUserState: state.currentUser,
  TalentInfoState: state.TalentInfo
})

const mapDispatchToProps = {
  updateProfile
}

export default connect(mapStateToProps, mapDispatchToProps)(pageTalentProfile)
