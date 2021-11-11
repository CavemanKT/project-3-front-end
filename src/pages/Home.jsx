import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { getGames, resetGames } from '@/actions/game'
import Button from 'react-bootstrap/Button'

class PagesHome extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      page: 1
    }

    this.getFilteredProducts = this.getFilteredProducts.bind(this)
  }

  componentDidMount() {
    this.props.getGames()
  }

  componentWillUnmount() {
    this.props.resetGames()
  }

  getFilteredProducts(newPage) {
    this.props.getGames({ ...this.state, page: newPage })
    this.setState({ page: newPage })
  }

  render() {
    const { stateGame: { games } } = this.props
    const { page } = this.state

    return (
      <>
        <div id="pages-home" className="container text-center">
          <div className="row header">
            {
            games.map((game) => (
              <Link key={game.id} className="col-6 col-sm-4 col-md-3 mt-4" to={`/games/${game.id}`}><Button variant="secondary" size="lg">{game.name}</Button></Link>
            ))
          }
          </div>
        </div>
        <div id="page-btn" className="d-flex justify-content-center">
          {
            page > 1 && <button type="button" className="btn btn-info btn-spacing" onClick={() => this.getFilteredProducts(page - 1)}>Previous</button>
          }
          {
            true && <button type="button" className="btn btn-info" onClick={() => this.getFilteredProducts(page + 1)}>Next</button>
          }
        </div>
      </>
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
