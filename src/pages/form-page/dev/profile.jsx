import React from 'react'
import PropTypes from 'prop-types'
import FormsProfileUpdate from '@/forms/profile/profile'
import FormsTalentProfileUpdate from '@/forms/profile/talent-profile'
import { connect } from 'react-redux'

import { updateProfile } from '@/actions/dev/profile'
import { updateTalentProfile } from '@/actions/talent/profile'

class pageDevProfile extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}

    this.handleProfileFormUpdateSubmit = this.handleProfileFormUpdateSubmit.bind(this)
    this.handleTalentProfileFormUpdateSubmit = this.handleTalentProfileFormUpdateSubmit.bind(this)
  }

  handleProfileFormUpdateSubmit(values) {
    const { currentUserState: { currentUser } } = this.props

    this.props.updateProfile(values, currentUser.id).then(() => {
      const { history: { push } } = this.props
      push('/my/games')
    })
  }

  handleTalentProfileFormUpdateSubmit(values) {
    console.log('hi')
    const { currentUserState: { currentUser }, TalentInfoState: { talentInfo } } = this.props
    console.log('>>>>>>>>talentInfo', talentInfo)
    console.log('>>>>>>>>talent', currentUser)

    this.props.updateTalentProfile(values, currentUser.id).then(() => {
      console.log('hello world')
      const { history: { push } } = this.props
      push('/my/applications')
    })
  }

  render() {

    const { currentUserState: { currentUser }, profileState: { devInfo, updatingIDs }, TalentInfoState: { talentInfo } } = this.props
    console.log('currentUser: ', currentUser, 'devInfo: ', devInfo, 'updatingIDs:', updatingIDs, 'talentInfo', talentInfo)

    return (
      <>
        {currentUser && currentUser.type === 'Developer' && (
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
        )}

        {currentUser && currentUser.type === 'Marketer' && (
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
        )}
      </>
    )
  }
}

pageDevProfile.propTypes = {
  history: PropTypes.shape().isRequired,
  updateProfile: PropTypes.func.isRequired,
  updateTalentProfile: PropTypes.func.isRequired,
  currentUserState: PropTypes.shape().isRequired,
  profileState: PropTypes.shape().isRequired,
  TalentInfoState: PropTypes.shape().isRequired
}

const mapStateToProps = (state) => ({
  currentUserState: state.currentUser,
  profileState: state.profile,
  TalentInfoState: state.talentInfo
})

const mapDispatchToProps = {
  updateProfile,
  updateTalentProfile
}

export default connect(mapStateToProps, mapDispatchToProps)(pageDevProfile)
