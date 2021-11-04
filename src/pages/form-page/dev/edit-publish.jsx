import React from 'react'
import PropTypes from 'prop-types'
import FormsGamePublishEdit from '@/forms/publish/edit'
import { connect } from 'react-redux'

import { createGame, updateGame, destroyGame } from '@/actions/dev/game'

class pageDevEditPublish extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      selectedGame: 6
    }

    this.handlePublishFormUpdateSubmit = this.handlePublishFormUpdateSubmit.bind(this)
  }

  handlePublishFormUpdateSubmit(values) {
    const { selectedGame: GameId } = this.state
    this.props.updateGame(values, GameId).then((resp) => {
      const { history: { push } } = this.props
      push(`/dev/games/${resp.data.game.id}`)
    })
  }

  render() {
    return (
      <>
        <div>Edit and Update Your Game Here</div>
        <FormsGamePublishEdit onSubmit={this.handlePublishFormUpdateSubmit} />
      </>
    )
  }
}

pageDevEditPublish.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(pageDevEditPublish)
