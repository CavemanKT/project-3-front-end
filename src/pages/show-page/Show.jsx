// applicants' list shows or not depends on if the game being owned by dev or not owned
import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import Carousel from 'react-bootstrap/Carousel'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import ListGroup from 'react-bootstrap/ListGroup'
import Container from 'react-bootstrap/Container'

import { getGame, resetGame } from '@/actions/game'
import { getGame as getDevGame, unsetDevGame } from '@/actions/dev/game'
import { createTalentApplication, destroyTalentApplication } from '@/actions/talent/application'

class PagesPublicShow extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      clickedApplyBtn: false,
      applicants: [
        { fullname: 'Faky Ralap', email: '123@123.com', cvUrl: 'https://www.alksdfj.com' },
        { fullname: 'Faky Ralap', email: '123@123.com', cvUrl: 'https://www.alksdfj.com' },
        { fullname: 'Faky Ralap', email: '123@123.com', cvUrl: 'https://www.alksdfj.com' },
        { fullname: 'Faky Ralap', email: '123@123.com', cvUrl: 'https://www.alksdfj.com' }
      ]
    }
  }

  componentDidMount() {
    const { id: GameId } = this.props.match.params
    this.props.getGame(GameId)

    this.props.getDevGame(GameId)
  }

  componentWillUnmount() {
    this.props.resetGame()
    this.props.unsetDevGame()
  }

  handleApplySubmit() {
    this.setState({ clickedApplyBtn: true })
    const { id: GameId } = this.props.match.params
    this.props.createTalentApplication(GameId)
  }

  handleCancelSubmit() {
    this.setState({ clickedApplyBtn: false })
    const { id: GameId } = this.props.match.params
    this.props.destroyTalentApplication(GameId)
  }

  handleEditSubmit() {
    const GameId = this.props.match.params.id
    const { history: { push } } = this.props
    push(`/my/games/${GameId}/edit`)
  }

  render() {
    const { gameState: { game }, devGameState: { devGame }, currentUserState: { currentUser }, applicationsState: { applications } } = this.props
    const { clickedApplyBtn, applicants } = this.state

    return (
      <div id="dev-showpage">

        <div id="showpage-carousel-and-description-wrapper">

          { currentUser && currentUser.type === 'Developer' && (
          <div className="dev-showpage-header mb-3">
            <h1 id="game-name">{devGame.name}</h1>
            <Button
              href="/my/game/:id/edit"
              className="btn btn-success"
              onClick={(e) => {
                e.preventDefault()
                this.handleEditSubmit()
              }}
            >Edit</Button>
            <Button type="button" className="btn btn-danger mx-4">Delete</Button>
          </div>
          )}
          {
            currentUser && currentUser.type === 'Marketer' && (
              <>
                <div className="dev-showpage-header mb-3">

                  <h1 id="game-name">{game.name}</h1>
                </div>
                {
                  !clickedApplyBtn && (
                  <Button
                    type="button"
                    id="btn-apply"
                    className="btn btn-primary my-3"
                    onClick={() => {
                      this.handleApplySubmit()
                    }}
                  >Apply
                  </Button>
                  )
                }

                {
                  clickedApplyBtn && (
                  <Button
                    type="button"
                    id="btn-applied"
                    className="btn btn-secondary my-3"
                    onClick={() => {
                      this.handleCancelSubmit()
                    }}
                  >Applied
                  </Button>
                  )
                }

              </>
            )
          }

          {!currentUser && <h1 id="game-name">{game.name}</h1>}

          {/* public */}
          <Row>
            {devGame.Images
              && (
              <Col>
                <div id="showpage-carousel-container">
                  <Carousel variant="dark">
                    <Carousel.Item className="showpage-carousel-item">
                      <img
                        className="w-100"
                        src={devGame.Images[0].url1}
                        alt="First slide"
                      />
                    </Carousel.Item>
                    <Carousel.Item>
                      <img
                        className="w-100"
                        src={devGame.Images[0].url2}
                        alt="Second slide"
                      />
                    </Carousel.Item>
                    <Carousel.Item>
                      <img
                        className="w-100"
                        src={devGame.Images[0].url3}
                        alt="Third slide"
                      />
                    </Carousel.Item>
                  </Carousel>
                </div>
              </Col>
              )}

            <Col xs={6}>
              <div id="showpage-description-container" className="col-md-auto">
                <h2>Description: </h2>
                <article>
                  <p>{game.description}</p>
                </article>
              </div>
            </Col>
          </Row>
        </div>

        {currentUser && currentUser.type === 'Developer' && (
        <Container className="mb-5">
          <div id="applicant-list">
            <h3>Applicant list</h3>
            <Row>
              <Col>
                {
                  applicants.map((applicant, i) => (
                    <ListGroup horizontal className="showpage-applicant-list-row" key={i}>
                      <ListGroup.Item className="showpage-applicant-list-item">{applicant.fullname}</ListGroup.Item>
                      <ListGroup.Item className="showpage-applicant-list-item">{applicant.email}</ListGroup.Item>
                      <ListGroup.Item className="showpage-applicant-list-item">{applicant.cvUrl}</ListGroup.Item>
                      <button type="button" className="btn btn-primary">Approve</button>
                    </ListGroup>
                  ))
                }
              </Col>
            </Row>
          </div>
        </Container>
        )}

        {currentUser && currentUser.type === 'Marketer' && (

          <Container className="mb-5" fluid id="showpage-job-detail-container">
            <div id="job-detail">
              <Row className="showpage-job-detail-row">
                <Col xs={12} lg={6} className="job-description">
                  <h3>Job Description</h3>
                  {
                  applicants.map((applicant, i) => (
                    <ListGroup horizontal className="showpage-job-description-listgroup" key={i}>
                      <ListGroup.Item className="showpage-job-description-item">{applicant.fullname}</ListGroup.Item>
                      <ListGroup.Item className="showpage-job-description-item">{applicant.email}</ListGroup.Item>
                      <ListGroup.Item className="showpage-job-description-item">{applicant.cvUrl}</ListGroup.Item>
                    </ListGroup>
                  ))
                }
                </Col>
                <Col xs={12} lg={6} className="job-requirement">
                  <h3>Requirements</h3>
                  {
                  applicants.map((applicant, i) => (
                    <ListGroup horizontal className="showpage-job-requirement-listgroup" key={i}>
                      <ListGroup.Item className="showpage-job-requirement-item">{applicant.fullname}</ListGroup.Item>
                      <ListGroup.Item className="showpage-job-requirement-item">{applicant.email}</ListGroup.Item>
                      <ListGroup.Item className="showpage-job-requirement-item">{applicant.cvUrl}</ListGroup.Item>
                    </ListGroup>
                  ))
                }
                </Col>
              </Row>
            </div>
          </Container>
        )}
      </div>
    )
  }
}

PagesPublicShow.propTypes = {
  history: PropTypes.shape().isRequired,

  match: PropTypes.shape().isRequired,
  getDevGame: PropTypes.func.isRequired,
  unsetDevGame: PropTypes.func.isRequired,
  getGame: PropTypes.func.isRequired,
  resetGame: PropTypes.func.isRequired,

  gameState: PropTypes.shape().isRequired,
  devGameState: PropTypes.shape().isRequired,
  currentUserState: PropTypes.shape().isRequired,

  createTalentApplication: PropTypes.func.isRequired,
  destroyTalentApplication: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
  gameState: state.game,
  devGameState: state.devGame,
  currentUserState: state.currentUser,
  applicationsState: state.applications

})

const mapDispatchToProps = {
  getDevGame,
  unsetDevGame,
  getGame,
  resetGame,
  createTalentApplication,
  destroyTalentApplication
}

export default connect(mapStateToProps, mapDispatchToProps)(PagesPublicShow)
