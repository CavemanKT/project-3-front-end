import React from 'react'
import PropTypes from 'prop-types'
import FormsGamePublishEdit from '@/forms/publish/edit'
import { connect } from 'react-redux'

import { updateGame, getDevGame } from '@/actions/dev/games'
import { updateImage } from '@/actions/dev/image'

class pageDevEditPublish extends React.Component {
  constructor(props) {
    super(props)

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount() {
    const { match: { params: { id } } } = this.props
    this.props.getDevGame(id)
  }

  handleSubmit({ url1, url2, url3, ...gameValues }) {
    const GameId = this.props.match.params.id
    this.props.updateGame(gameValues, GameId).then(() => {
      const { history: { push } } = this.props
      if (url1 || url2 || url3) {
        this.props.updateImage({ url1, url2, url3 }, GameId).then(() => {
          push(`/games/${GameId}`)
        })
      } else {
        push(`/games/${GameId}`)
      }
    })
  }

  render() {
    const { devGameState: { devGame, isGetDevGameLoading } } = this.props

    if (isGetDevGameLoading) return <div>Loading</div>
    if (!devGame) return <div>No Such Game</div>
    return (
      <>
        <div>Edit and Update Your Game Here</div>
        <FormsGamePublishEdit
          onSubmit={this.handleSubmit}
          initialValues={devGame}
        />
      </>
    )
  }
}

pageDevEditPublish.propTypes = {
  match: PropTypes.shape().isRequired,
  history: PropTypes.shape().isRequired,
  devGameState: PropTypes.shape().isRequired,
  getDevGame: PropTypes.func.isRequired,
  updateGame: PropTypes.func.isRequired,
  updateImage: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
  devGameState: state.devGame
})

const mapDispatchToProps = {
  getDevGame,
  updateGame,
  updateImage
}

export default connect(mapStateToProps, mapDispatchToProps)(pageDevEditPublish)
