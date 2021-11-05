import React from 'react'
import PropTypes from 'prop-types'
import FormsGamePublish from '@/forms/publish/new'
import { connect } from 'react-redux'

import { createGame, updateGame, destroyGame } from '@/actions/dev/game'

class pageDevPublish extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}

    this.handlePublishFormCreateSubmit = this.handlePublishFormCreateSubmit.bind(this)
  }

  handlePublishFormCreateSubmit(values) {
    this.props.createGame(values)
  }

  render() {
    return (
      <>
        <div>Publish Your New Game</div>
        <FormsGamePublish onSubmit={this.handlePublishFormCreateSubmit} />
      </>
    )
  }
}

pageDevPublish.propTypes = {
  createGame: PropTypes.func.isRequired
  // updateGame: PropTypes.func.isRequired,
  // destroyGame: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
})

const mapDispatchToProps = {
  createGame,
  updateGame,
  destroyGame
}

export default connect(mapStateToProps, mapDispatchToProps)(pageDevPublish)
