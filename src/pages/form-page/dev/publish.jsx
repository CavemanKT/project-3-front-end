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
    this.props.createGame(values).then((resp) => {
      const { history: { push } } = this.props
      push(`/dev/games/${resp.data.game.id}`)
    })

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
  history: PropTypes.shape().isRequired,
  createGame: PropTypes.func.isRequired,
  updateGame: PropTypes.func.isRequired,
  destroyGame: PropTypes.func.isRequired
  // stateGame: PropTypes.shape().isRequired
}

const mapStateToProps = (state) => ({
  // stateGame: state.game
})

const mapDispatchToProps = {
  createGame,
  updateGame,
  destroyGame
}

export default connect(mapStateToProps, mapDispatchToProps)(pageDevPublish)
