import React from 'react'
import PropTypes from 'prop-types'

import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ListGroup from 'react-bootstrap/ListGroup'

import { getGames, resetGames } from '@/actions/game'
import { getGames as getDevGames, resetGames as resetDevGames } from '@/actions/dev/game'
import { getTalentApplications, resetTalentApplications } from '@/actions/talent/application'

import { getProfile } from '@/actions/dev/profile'

class PagesDevGameList extends React.Component {
  constructor(props) {
    super(props)

    this.handleGetDevProfile = this.handleGetDevProfile.bind(this)
  }

  componentDidMount() {
    const { currentUserState: { currentUser } } = this.props
    this.props.getGames()
    if (currentUser.type === 'Developer') {
      this.props.getDevGames()
    }
    if (currentUser.type === 'Marketer') {
      this.props.getTalentApplications()
    }
  }

  componentWillUnmount() {
    this.props.resetGames()
    this.props.resetDevGames()
    this.props.resetTalentApplications()
  }

  handleGetDevProfile() {
    this.props.getProfile()
  }

  render() {
    const {
      gameState: { games },
      devGamesState: { devGames },
      currentUserState: { currentUser },
      applicationsState: { applications }
    } = this.props

    console.log(applications)
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
                && applications.map((item, idx) => (
                  <ListGroup horizontal="sm" className="pages-talents-games-list">
                    <Link
                      key={item.Game.name}
                      to={`/games/${item.Game.id}`}
                      className="list-group-item list-group-item-action"
                    >
                      <div>{item.Game.name}</div>
                    </Link>
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
  getTalentApplications: PropTypes.func.isRequired,
  resetTalentApplications: PropTypes.func.isRequired,
  getProfile: PropTypes.func.isRequired,

  getGames: PropTypes.func.isRequired,
  resetGames: PropTypes.func.isRequired,
  getDevGames: PropTypes.func.isRequired,
  resetDevGames: PropTypes.func.isRequired,

  gameState: PropTypes.shape().isRequired,

  devGamesState: PropTypes.shape().isRequired,
  currentUserState: PropTypes.shape().isRequired,
  applicationsState: PropTypes.shape().isRequired
}

const mapStateToProps = (state) => ({
  gameState: state.games,
  devGamesState: state.devGames,
  currentUserState: state.currentUser,
  applicationsState: state.applications

})

const mapDispatchToProps = {
  getTalentApplications,
  resetTalentApplications,
  getProfile,
  getGames,
  resetGames,

  getDevGames,
  resetDevGames
}

export default connect(mapStateToProps, mapDispatchToProps)(PagesDevGameList)
