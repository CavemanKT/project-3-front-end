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
      page: 1
    }
  }

  componentDidMount() {
    this.props.getGames()
  }

  componentWillUnmount() {
    this.props.resetGames()
  }

  getFilteredProductsNext(newPage) {
    this.props.getGames({ ...this.state, page: newPage })
    this.setState({ page: newPage })
  }

  getFilteredProductsPrevious(newPage) {
    this.props.getGames({ ...this.state, page: newPage })
    this.setState({ page: newPage })
  }

  render() {
    const { stateGame: { games } } = this.props
    const { page } = this.state

    return (
      <div id="pages-home" className="container text-center">
        <div className="row">
          {
            games.map((game) => (
              <Link key={game.id} className="col-6 col-sm-4 col-md-3 mt-4" to={`/games/${game.id}`}>{game.name}</Link>
            ))
          }
        </div>

        <div className="d-flex justify-content-center">
          {
            page > 1 && <button type="button" className="btn btn-info btn-spacing" onClick={() => this.getFilteredProductsPrevious(page - 1)}>Previous</button>
          }
          {
            <button type="button" className="btn btn-info" onClick={() => this.getFilteredProductsNext(page + 1)}>Next</button>
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
