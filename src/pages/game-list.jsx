import React from 'react'
import PropTypes from 'prop-types'

import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ListGroup from 'react-bootstrap/ListGroup'

import { getGames, resetGames } from '@/actions/dev/game'

import { getProfile } from '@/actions/dev/profile'

class PagesDevGameList extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      games: [['among us', 'League of Legend', 'Counter Strike Online', 'Left 4 Dead'], ['Minecraft', 'CyberPunk', 'Call of Duty', 'Back 4 Blood'], ['Grand Theft Auto V', 'Roblox', 'Fortnite', 'Hacknet'], ['Nite team 4', 'Nite team 4', 'Nite team 4', 'Nite team 4']]
    }
    this.handleGetDevProfile = this.handleGetDevProfile.bind(this)
  }

  componentDidMount() {
    this.props.getGames()
    // get talents' getGames, make the alias as getTalentGamesList or sth else
  }

  componentWillUnmount() {
    this.props.resetGames()
  }

  handleGetDevProfile() {
    this.props.getProfile()
  }

  render() {
    const { devGamesState: { devGames }, currentUserState: { currentUser } } = this.props
    const { games } = this.state
    console.log('dev-game-list-currentUser: ', currentUser)

    return (

      <div id="pages-dev-gamelist">

        {/* // header */}
        <header className="text-center border-bottom pages-dev-gamelist-header">
          {currentUser && currentUser.type === 'Developer' && (
          <>
            <Link className="btn btn-primary" to="/my/profile" onClick={this.handleGetDevProfile}>Profile</Link>
            <h1>My Games</h1>
            <Link className="btn btn-primary" to="/my/games/new">Publish</Link>
          </>
          )}
          {currentUser && currentUser.type === 'Marketer' && (
          <>
            <h1>My Applications</h1>
            <Link className="btn btn-primary" to="/my/profile" onClick={this.handleGetDevProfile}>Profile</Link>
          </>
          )}
        </header>

        {/* Container */}
        <Container id="pages-dev-games-container">
          <Row>
            <Col>
              {
              currentUser && currentUser.type === 'Developer'
                && devGames.map((item) => (
                  <ListGroup horizontal="sm" className="pages-dev-games-list">
                    <Link
                      key={item.id}
                      to={`/games/${item.id}`}
                      className="list-group-item list-group-item-action"
                    >
                      <div>{item.name}</div>
                    </Link>
                  </ListGroup>
                ))
              }
              {
                currentUser && currentUser.type === 'Marketer'
                && games.map((items, idx) => (
                  <ListGroup horizontal="sm" className="pages-talents-games-list">
                    {
                    items.map((item, idy) => (
                      <ListGroup.Item className="pages-talents-games-item" key={idy}><a href="#">{`${item}`}</a></ListGroup.Item>
                    ))
                  }
                  </ListGroup>
                ))
              }

            </Col>
          </Row>
        </Container>

      </div>

    )
  }
}

PagesDevGameList.propTypes = {
  getProfile: PropTypes.func.isRequired,
  getGames: PropTypes.func.isRequired,
  resetGames: PropTypes.func.isRequired,
  devGamesState: PropTypes.shape().isRequired,
  currentUserState: PropTypes.shape().isRequired
}

const mapStateToProps = (state) => ({
  devGamesState: state.devGames,
  currentUserState: state.currentUser
})

const mapDispatchToProps = {
  getProfile,
  getGames,
  resetGames
}

export default connect(mapStateToProps, mapDispatchToProps)(PagesDevGameList)