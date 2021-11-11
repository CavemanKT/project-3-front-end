import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { getGames, resetGames } from '@/actions/game'

class PagesHome extends React.Component {
  componentDidMount() {
    this.props.getGames()
  }

  componentWillUnmount() {
    this.props.resetGames()
  }

  render() {
    const { stateGame: { games } } = this.props

    return (
      <div id="pages-home" className="container text-center">
        <div className="row header">
          {
            games.map((game) => (
              <Link key={game.id} className="col-6 col-sm-4 col-md-3 mt-4" to={`/games/${game.id}`}>{game.name}</Link>
            ))
          }
        </div>
      </div>
    )
  }
}

PagesHome.propTypes = {
  stateGame: PropTypes.shape().isRequired,
  getGames: PropTypes.func.isRequired,
  resetGames: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
  stateGame: state.games
})

const mapDispatchToProps = {
  getGames,
  resetGames
}

export default connect(mapStateToProps, mapDispatchToProps)(PagesHome)
