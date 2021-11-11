import React from 'react'
import PropTypes from 'prop-types'

import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import Card from 'react-bootstrap/Card'

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
        <header className="text-center pages-dev-gamelist-header">
          {
            currentUser && currentUser.type === 'Developer' && (
              <>
                <Link className="btn btn-primary btn-box" to="/my/profile">Profile</Link>
                <h1>My Games</h1>
                <Link className="btn btn-primary btn-box" to="/my/games/new">Publish</Link>
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
          <Row xs={1} md={2} lg={2} className="g-4">
            <Col>
              {
                currentUser && currentUser.type === 'Developer' && devGames.map((item) => (
                  <>
                    <Col className="col-box">
                      {/* <ListGroup horizontal="sm" className="pages-dev-games-list" /> */}

                      <Card horizontal="sm" className="pages-dev-games-list card-box">
                        <Card.Header>{item.name}</Card.Header>
                        <Card.Body className="cardBody-box">
                          <Card.Text className="game-list-card-text text-box">
                            <Link
                              key={item.id}
                              to={`/games/${item.id}`}
                              className="list-group-item list-group-item-action"
                            >
                              {item.description}
                            </Link>
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    </Col>
                  </>
                ))
              }
              {
                currentUser && currentUser.type === 'Marketer' && applications.map((item) => (
                  <>
                    <Col>
                      {/* <ListGroup horizontal="sm" className="pages-dev-games-list" /> */}
                      <Card horizontal="sm" className="pages-dev-games-list card-box">
                        <Card.Header>{item.Game.name}</Card.Header>
                        <Card.Body>
                          <Card.Text className="game-list-card-text text-box">
                            <Link
                              key={item.Game.name}
                              to={`/games/${item.Game.id}`}
                              className="list-group-item list-group-item-action"
                            > {item.Game.description}
                            </Link>
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    </Col>
                  </>
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
