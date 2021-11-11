import React from 'react'
import PropTypes from 'prop-types'
import FormsGamePublish from '@/forms/publish/new'
import { connect } from 'react-redux'

import { createGame, updateGame, destroyGame } from '@/actions/dev/game'

import { createImage } from '@/actions/dev/image'

class pageDevPublish extends React.Component {
  constructor(props) {
    super(props)

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit({ url1, url2, url3, ...gameValues }) {
    this.props.createGame(gameValues).then((resp) => {
      const GameId = Number(resp.data.game.id)

      const { history: { replace } } = this.props
      if (url1 || url2 || url3) {
        this.props.createImage({ url1, url2, url3 }, GameId).then(() => {
          replace('/my/games')
        })
      } else {
        replace('/my/games')
      }
    })
  }

  render() {
    return (
      <div id="pages-my-games-new" className="container my-3">
        <div className="row">
          <div className="col-12 col-md-8 offset-md-2 col-lg-6 offset-lg-3">
            <h2 className="text-center">Publish Your New Game</h2>
            <FormsGamePublish
              onSubmit={this.handleSubmit}
            />
          </div>
        </div>
      </div>
    )
  }
}

pageDevPublish.propTypes = {
  history: PropTypes.shape().isRequired,
  createGame: PropTypes.func.isRequired,
  createImage: PropTypes.func.isRequired

}

const mapDispatchToProps = {
  createGame,
  updateGame,
  destroyGame,
  createImage
}

export default connect(null, mapDispatchToProps)(pageDevPublish)
