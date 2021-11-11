import React from 'react'
import PropTypes from 'prop-types'

import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ListGroup from 'react-bootstrap/ListGroup'

import { getGames as getDevGames, resetGames as resetDevGames } from '@/actions/dev/games'
import { getTalentApplications, resetTalentApplications } from '@/actions/talent/application'

class PagesMyGameList extends React.Component {
  componentDidMount() {
    const { currentUserState: { currentUser } } = this.props
    if (currentUser.type === 'Developer') {
      this.props.getDevGames()
    }
    if (currentUser.type === 'Marketer') {
      this.props.getTalentApplications()
    }
  }

  componentWillUnmount() {
    this.props.resetDevGames()
    this.props.resetTalentApplications()
  }

  render() {
    const {
      currentUserState: { currentUser },
      devGamesState: { devGames },
      applicationsState: { applications }
    } = this.props

    return (
      <div id="pages-dev-gamelist">
        {/* // header */}
        <header className="text-center border-bottom pages-dev-gamelist-header">
          {
            currentUser && currentUser.type === 'Developer' && (
              <>
                <Link className="btn btn-primary" to="/my/profile">Profile</Link>
                <h1>My Games</h1>
                <Link className="btn btn-primary" to="/my/games/new">Publish</Link>
              </>
            )
          }
          {
            currentUser && currentUser.type === 'Marketer' && (
              <>
                <h1>My Applications</h1>
                <Link className="btn btn-primary" to="/my/profile" onClick={this.handleGetDevProfile}>Profile</Link>
              </>
            )
          }
        </header>

        {/* Container */}
        <Container id="pages-games-container">
          <Row>
            <Col>
              {
                currentUser && currentUser.type === 'Developer' && devGames.map((item) => (
                  <ListGroup key={item.id} horizontal="sm" className="pages-dev-games-list">
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
                currentUser && currentUser.type === 'Marketer' && applications.map((item) => (
                  <ListGroup key={item.GameId} horizontal="sm" className="pages-talents-games-list">
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

PagesMyGameList.propTypes = {
  currentUserState: PropTypes.shape().isRequired,
  devGamesState: PropTypes.shape().isRequired,
  getDevGames: PropTypes.func.isRequired,
  resetDevGames: PropTypes.func.isRequired,
  applicationsState: PropTypes.shape().isRequired,
  getTalentApplications: PropTypes.func.isRequired,
  resetTalentApplications: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
  currentUserState: state.currentUser,
  devGamesState: state.devGames,
  applicationsState: state.applications
})

const mapDispatchToProps = {
  getDevGames,
  resetDevGames,
  getTalentApplications,
  resetTalentApplications
}

export default connect(mapStateToProps, mapDispatchToProps)(PagesMyGameList)
