import React from 'react'
import PropTypes from 'prop-types'
import FormsGamePublishEdit from '@/forms/publish/edit'
import { connect } from 'react-redux'

import { createGame, updateGame, destroyGame } from '@/actions/dev/game'

import { updateImage } from '@/actions/dev/image'

class pageDevEditPublish extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      // selectedGame: null
    }

    this.handlePublishFormUpdateSubmit = this.handlePublishFormUpdateSubmit.bind(this)
  }

  handlePublishFormUpdateSubmit(values) {
    const GameId = this.props.match.params.id
    this.props.updateGame(values, GameId).then((resp) => {
      this.props.updateImage(values, GameId)
      const { history: { push } } = this.props
      push(`/games/${resp.data.game.id}`)
    })
  }

  render() {
    // const { devGameState: { devGame } } = this.props
    return (
      <>
        <div>Edit and Update Your Game Here</div>
        <FormsGamePublishEdit onSubmit={this.handlePublishFormUpdateSubmit} />
      </>
    )
  }
}

pageDevEditPublish.propTypes = {
  match: PropTypes.shape().isRequired,
  history: PropTypes.shape().isRequired,
  createGame: PropTypes.func.isRequired,
  updateGame: PropTypes.func.isRequired,
  destroyGame: PropTypes.func.isRequired,
  updateImage: PropTypes.func.isRequired,
  devGameState: PropTypes.shape().isRequired
  // stateGame: PropTypes.shape().isRequired
}

const mapStateToProps = (state) => ({
  devGameState: state.devGame
})

const mapDispatchToProps = {
  createGame,
  updateGame,
  destroyGame,
  updateImage
}

export default connect(mapStateToProps, mapDispatchToProps)(pageDevEditPublish)
