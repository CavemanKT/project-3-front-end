import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import Carousel from 'react-bootstrap/Carousel'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import ListGroup from 'react-bootstrap/ListGroup'
import Container from 'react-bootstrap/Container'

import { getGame, resetGame } from '@/actions/game'
import { getDevGame, unsetDevGame, getDevGameApplications, resetDevGameApplications, destroyGame } from '@/actions/dev/game'
import { createTalentApplication, destroyTalentApplication, getTalentApplication } from '@/actions/talent/application'

import { getApplicationsApproval, updateApprovedToTrueInDB, updateApprovedToFalseInDB } from '@/actions/dev/approval'

class PagesPublicShow extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
    }

    this.handleApplySubmit = this.handleApplySubmit.bind(this)
    this.handleCancelSubmit = this.handleCancelSubmit.bind(this)
    this.handleEditSubmit = this.handleEditSubmit.bind(this)
    this.handleApproveSubmit = this.handleApproveSubmit.bind(this)
    this.handleApprovedSubmit = this.handleApprovedSubmit.bind(this)
  }

  componentDidMount() {
    const { id: GameId } = this.props.match.params
    const { currentUserState: { currentUser } } = this.props
    this.props.getGame(GameId)

    if (currentUser) {
      if (currentUser.type === 'Developer') {
        this.props.getDevGame(GameId)
        this.props.getDevGameApplications(GameId)
        this.props.getApplicationsApproval(GameId)
      }
      if (currentUser.type === 'Marketer') {
        this.props.getTalentApplication(GameId)
      }
    }
  }

  componentWillUnmount() {
    this.props.resetGame()
    this.props.unsetDevGame()
    this.props.resetDevGameApplications()
  }

  handleApplySubmit() {
    const { id: GameId } = this.props.match.params
    this.props.createTalentApplication(GameId)
  }

  handleCancelSubmit() {
    const { id: GameId } = this.props.match.params
    this.props.destroyTalentApplication(GameId)
  }

  handleEditSubmit() {
    const GameId = this.props.match.params.id
    const { history: { push } } = this.props
    push(`/my/games/${GameId}/edit`)
  }

  handleDelete() {
    const GameId = this.props.match.params.id
    this.props.destroyGame(GameId).then(() => {
      const { history: { replace } } = this.props
      replace('/my/games')
    })
  }

  handleApproveSubmit(GameId, TalentId) {
    this.props.updateApprovedToTrueInDB(GameId, TalentId)
  }

  handleApprovedSubmit(GameId, TalentId) {
    this.props.updateApprovedToFalseInDB(GameId, TalentId)
  }

  // render func
  renderDevBtn() {
    return (
      <>
        <Button
          href="/my/game/:id/edit"
          className="btn btn-success"
          onClick={(e) => {
            e.preventDefault()
            this.handleEditSubmit()
          }}
        >Edit</Button>
        <Button
          type="button"
          className="btn btn-danger mx-4"
          onClick={(e) => {
            e.preventDefault()
            this.handleDelete()
          }}
        >Delete</Button>
      </>
    )
  }

  renderTalentBtn() {
    const {
      applicationState: { application }
    } = this.props

    return (
      <>
        {
          !application && (
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
          application && (
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

  renderCarouselAndDescription() {
    const {
      gameState: { game }
    } = this.props
    return (
      <Row>
        {game.Images
              && (
              <Col>
                <div id="showpage-carousel-container">
                  <Carousel variant="dark">
                    <Carousel.Item className="showpage-carousel-item">
                      <img
                        className="w-100"
                        src={game.Images[0].url1}
                        alt="First slide"
                      />
                    </Carousel.Item>
                    <Carousel.Item>
                      <img
                        className="w-100"
                        src={game.Images[0].url2}
                        alt="Second slide"
                      />
                    </Carousel.Item>
                    <Carousel.Item>
                      <img
                        className="w-100"
                        src={game.Images[0].url3}
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
    )
  }

  renderApplicantsList() {
    const { devGameState: { devGameApplications } } = this.props

    return (
      <Container className="mb-5">
        <div id="applicant-list">
          <h3>Applicant list</h3>
          <Row>
            <Col>
              { devGameApplications.map((applicant, i) => (
                <ListGroup horizontal className="showpage-applicant-list-row" key={applicant.Talent.id}>
                  <ListGroup.Item className="showpage-applicant-list-item">{applicant.Talent.type}</ListGroup.Item>
                  <ListGroup.Item className="showpage-applicant-list-item">{applicant.Talent.username}</ListGroup.Item>
                  <ListGroup.Item className="showpage-applicant-list-item">{applicant.Talent.firstName}</ListGroup.Item>
                  <ListGroup.Item className="showpage-applicant-list-item">{applicant.Talent.lastName}</ListGroup.Item>
                  <ListGroup.Item className="showpage-applicant-list-item">{applicant.Talent.cvUrl}</ListGroup.Item>
                  <ListGroup.Item className="showpage-applicant-list-item">{applicant.Talent.email}</ListGroup.Item>
                  { !applicant.approved && (
                  <Button
                    type="button"
                    id="btn-apply"
                    className="btn btn-primary my-3"
                    onClick={() => {
                      this.handleApproveSubmit(applicant.GameId, applicant.Talent.id)
                    }}
                  >Approve
                  </Button>
                  )}
                  { applicant.approved && (
                  <Button
                    type="button"
                    id="btn-apply"
                    className="btn btn-warning my-3"
                    onClick={() => {
                      this.handleApprovedSubmit(applicant.GameId, applicant.Talent.id)
                    }}
                  >Approved
                  </Button>
                  )}
                </ListGroup>
              ))}
            </Col>
          </Row>
        </div>
      </Container>
    )
  }

  renderJobDetails() {
    const { gameState: { game } } = this.props
    return (
      <Container className="mb-5" fluid id="showpage-job-detail-container">
        <div id="job-detail">
          <Row className="showpage-job-detail-row">
            <Col xs={12} lg={6} className="job-description">
              <h3>Job Description</h3>
              <ListGroup horizontal className="showpage-job-description-listgroup" key={game.id}>
                <ListGroup.Item className="showpage-job-description-item">
                  <p>
                    {game.jobDescription}
                  </p>
                </ListGroup.Item>

              </ListGroup>
            </Col>
            <Col xs={12} lg={6} className="job-requirement">
              <h3>Requirements</h3>
              <ListGroup horizontal className="showpage-job-requirement-listgroup" key={game.id}>
                <ListGroup.Item className="showpage-job-requirement-item">
                  <p>
                    {game.qualification}
                  </p>
                </ListGroup.Item>

              </ListGroup>
            </Col>
          </Row>
        </div>
      </Container>
    )
  }

  render() {
    const {
      gameState: { game },
      devGameState: { devGameApplications },
      currentUserState: { currentUser }
    } = this.props

    return (
      <div id="showpage">

        <div id="showpage-carousel-and-description-wrapper">

          <div className="showpage-header mb-3">

            {/* Public: game's name */}
            <h1 id="game-name">{game.name}</h1>

            {/*  Dev: edit and delete btns */}
            { currentUser && currentUser.type === 'Developer' && this.renderDevBtn()}

            {/* Talent: apply and cancel btn */}
            { currentUser && currentUser.type === 'Marketer' && this.renderTalentBtn()}

          </div>

          {/* Public: carousel and description */}
          {this.renderCarouselAndDescription()}
        </div>

        {/* Dev: Applicants' list */}
        {currentUser && currentUser.type === 'Developer' && devGameApplications[0] && this.renderApplicantsList() }

        {/* Talent: Job details */}
        {currentUser && currentUser.type === 'Marketer' && this.renderJobDetails()}
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
  destroyGame: PropTypes.func.isRequired,

  gameState: PropTypes.shape().isRequired,
  devGameState: PropTypes.shape().isRequired,
  currentUserState: PropTypes.shape().isRequired,

  applicationState: PropTypes.shape().isRequired,

  getTalentApplication: PropTypes.func.isRequired,
  getDevGameApplications: PropTypes.func.isRequired,
  resetDevGameApplications: PropTypes.func.isRequired,
  createTalentApplication: PropTypes.func.isRequired,
  destroyTalentApplication: PropTypes.func.isRequired,

  getApplicationsApproval: PropTypes.func.isRequired,
  updateApprovedToTrueInDB: PropTypes.func.isRequired,
  updateApprovedToFalseInDB: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
  gameState: state.game,
  devGameState: state.devGame,
  currentUserState: state.currentUser,
  applicationState: state.application

})

const mapDispatchToProps = {
  getDevGame,
  unsetDevGame,
  getGame,
  resetGame,
  destroyGame,
  getTalentApplication,
  getDevGameApplications,
  resetDevGameApplications,
  createTalentApplication,
  destroyTalentApplication,

  getApplicationsApproval,
  updateApprovedToTrueInDB,
  updateApprovedToFalseInDB
}

export default connect(mapStateToProps, mapDispatchToProps)(PagesPublicShow)
