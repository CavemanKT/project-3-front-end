import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import Carousel from 'react-bootstrap/Carousel'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import ListGroup from 'react-bootstrap/ListGroup'
import Container from 'react-bootstrap/Container'

import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel
} from 'react-accessible-accordion'

import 'react-accessible-accordion/dist/fancy-example.css'

import { getGame, resetGame } from '@/actions/game'
import { getDevGameApplications, resetDevGameApplications, destroyGame } from '@/actions/dev/games'
import { createTalentApplication, destroyTalentApplication, getTalentApplication } from '@/actions/talent/application'

import { getApplicationsApproval, updateApprovedToTrueInDB, updateApprovedToFalseInDB } from '@/actions/dev/approval'

class PagesPublicShow extends React.Component {
  constructor(props) {
    super(props)

    this.handleApplySubmit = this.handleApplySubmit.bind(this)
    this.handleCancelSubmit = this.handleCancelSubmit.bind(this)
    this.handleEditSubmit = this.handleEditSubmit.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
    this.handleApproveSubmit = this.handleApproveSubmit.bind(this)
    this.handleApprovedSubmit = this.handleApprovedSubmit.bind(this)
  }

  componentDidMount() {
    const { id: GameId } = this.props.match.params
    const { currentUserState: { currentUser } } = this.props
    this.props.getGame(GameId)

    if (currentUser) {
      if (currentUser.type === 'Developer') {
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
      <Row className="game-info-row">
        {
          game.Images && (
            <Col xs={6}>
              <div id="showpage-carousel-container">
                <Carousel variant="dark">
                  {
                    game.Images[0]?.url1 && (
                      <Carousel.Item className="showpage-carousel-item">
                        <img
                          className="w-100"
                          src={game.Images[0]?.url1}
                          alt="First slide"
                        />
                      </Carousel.Item>
                    )
                  }
                  {
                    game.Images[0]?.url2 && (
                      <Carousel.Item>
                        <img
                          className="w-100"
                          src={game.Images[0]?.url2}
                          alt="Second slide"
                        />
                      </Carousel.Item>
                    )
                  }
                  {
                    game.Images[0]?.url3 && (
                      <Carousel.Item>
                        <img
                          className="w-100"
                          src={game.Images[0]?.url3}
                          alt="Third slide"
                        />
                      </Carousel.Item>
                    )
                  }
                </Carousel>
              </div>
            </Col>
          )
        }

        <Col xs={6}>
          <div id="showpage-description-container" className="col-md-auto">
            <article>
              <Accordion allowZeroExpanded>
                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      Description
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p>{game.description}</p>
                  </AccordionItemPanel>
                </AccordionItem>
              </Accordion>
            </article>
          </div>
        </Col>
      </Row>
    )
  }

  renderApplicantsList() {
    const { devGameState: { devGameApplications } } = this.props

    if (devGameApplications.length === 0) return null

    return (
      <Container className="mb-5">
        <div id="applicant-list">
          <h3>Applicant list</h3>
          <Row className="showpage-applicant-list-row">
            <Col>
              { devGameApplications.map((applicant) => (
                <ListGroup horizontal className="showpage-applicant-list-row" key={applicant.Talent.id}>
                  <ListGroup.Item className="showpage-applicant-list-item">{applicant.Talent.type}</ListGroup.Item>
                  <ListGroup.Item className="showpage-applicant-list-item">{applicant.Talent.username}</ListGroup.Item>
                  <ListGroup.Item className="showpage-applicant-list-item">{applicant.Talent.firstName}</ListGroup.Item>
                  <ListGroup.Item className="showpage-applicant-list-item">{applicant.Talent.lastName}</ListGroup.Item>
                  <ListGroup.Item className="showpage-applicant-list-item">{applicant.Talent.resume}</ListGroup.Item>
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
          <Col xs={12} lg={6} className="job-description">
            <Accordion allowZeroExpanded>
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    Job Description
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>{game.jobDescription}</p>
                </AccordionItemPanel>
              </AccordionItem>
            </Accordion>
          </Col>
          <Col xs={12} lg={6} className="job-requirement">
            <Accordion allowZeroExpanded>
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    Requirements
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>{game.qualification}</p>
                </AccordionItemPanel>
              </AccordionItem>
            </Accordion>
          </Col>
        </div>
      </Container>
    )
  }

  render() {
    const {
      gameState: { game, isGetGameLoading },
      currentUserState: { currentUser }
    } = this.props

    if (isGetGameLoading) return <div>Loading</div>
    if (!game) return <div>Cannot Find Game</div>

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
        {currentUser && currentUser.type === 'Developer' && this.renderApplicantsList() }

        {/* Talent: Job details */}
        {currentUser && currentUser.type === 'Marketer' && this.renderJobDetails()}
      </div>
    )
  }
}

PagesPublicShow.propTypes = {
  history: PropTypes.shape().isRequired,
  match: PropTypes.shape().isRequired,
  currentUserState: PropTypes.shape().isRequired,

  gameState: PropTypes.shape().isRequired,
  getGame: PropTypes.func.isRequired,
  resetGame: PropTypes.func.isRequired,
  destroyGame: PropTypes.func.isRequired,

  devGameState: PropTypes.shape().isRequired,
  getDevGameApplications: PropTypes.func.isRequired,
  resetDevGameApplications: PropTypes.func.isRequired,
  getApplicationsApproval: PropTypes.func.isRequired,
  updateApprovedToTrueInDB: PropTypes.func.isRequired,
  updateApprovedToFalseInDB: PropTypes.func.isRequired,

  applicationState: PropTypes.shape().isRequired,
  getTalentApplication: PropTypes.func.isRequired,
  createTalentApplication: PropTypes.func.isRequired,
  destroyTalentApplication: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
  currentUserState: state.currentUser,
  gameState: state.game,
  devGameState: state.devGame,
  applicationState: state.application
})

const mapDispatchToProps = {
  getGame,
  resetGame,

  destroyGame,
  getDevGameApplications,
  resetDevGameApplications,
  getApplicationsApproval,
  updateApprovedToTrueInDB,
  updateApprovedToFalseInDB,

  getTalentApplication,
  createTalentApplication,
  destroyTalentApplication
}

export default connect(mapStateToProps, mapDispatchToProps)(PagesPublicShow)
