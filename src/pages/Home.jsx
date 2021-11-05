import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
// import Container from 'react-bootstrap/Container'
// import Row from 'react-bootstrap/Row'
// import Col from 'react-bootstrap/Col'
// import ListGroup from 'react-bootstrap/ListGroup'

import { getGames, resetGames } from '@/actions/game'

class PagesHome extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
    }
  }

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
        <div className="row">
          {
            games.map((game) => (
              <Link key={game.id} className="col-6 col-sm-4 col-md-3 mb-4" to={`/games/${game.id}`}>{game.name}</Link>
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
