// applicants' list shows or not depends on if the game being owned by dev or not owned
import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import Carousel from 'react-bootstrap/Carousel'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import ListGroup from 'react-bootstrap/ListGroup'

// Jason Stuff
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel
} from 'react-accessible-accordion'

import 'react-accessible-accordion/dist/fancy-example.css'

import { getGame, resetGame } from '@/actions/game'
import { getDevGameApplications, resetDevGameApplications, destroyGame } from '@/actions/dev/game'
import { createTalentApplication, destroyTalentApplication, getTalentApplication, resetTalentApplication } from '@/actions/talent/application'

class PagesPublicShow extends React.Component {
  constructor(props) {
    super(props)

    this.componentDidMount = this.componentDidMount.bind(this)
    this.componentWillUnmount = this.componentWillUnmount.bind(this)
    this.handleApplySubmit = this.handleApplySubmit.bind(this)
    this.handleApplyCancel = this.handleApplyCancel.bind(this)
    this.handleEditSubmit = this.handleEditSubmit.bind(this)
  }

  componentDidMount() {
    const { currentUserState: { currentUser }, match: { params: { id: GameId } } } = this.props

    this.props.getGame(GameId)
    if (currentUser) {
      if (currentUser.type === 'Developer') {
        this.props.getDevGameApplications(GameId)
      } else {
        this.props.getTalentApplication(GameId)
      }
    }
  }

  componentWillUnmount() {
    this.props.resetGame()
    this.props.resetDevGameApplications()
    this.props.resetTalentApplication()
  }

  handleApplySubmit() {
    const { id: GameId } = this.props.match.params
    this.props.createTalentApplication(GameId)
  }

  handleApplyCancel() {
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

  renderBasicInformation() {
    const {
      gameState: { game }
    } = this.props

    return (
      <div id="game-info">
        <h1 id="game-name">{game.name}</h1>
        <Row>
          {
            game.Images && (
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
      </div>
    )
  }

  renderDeveloperActions() {
    const {
      currentUserState: { currentUser }
    } = this.props

    if (currentUser && currentUser.type !== 'Developer') return null
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

  renderDeveloperApplications() {
    const {
      currentUserState: { currentUser },
      devGameState: { devGameApplications }
    } = this.props

    if (currentUser && currentUser.type !== 'Developer') return null
    return (
      <div id="applicant-list">
        <h3>Applicant list</h3>
        <Row className="showpage-applicant-list-row ">
          <Col>
            {
              devGameApplications.map((applicant) => (
                <ListGroup horizontal className="showpage-applicant-list-row" key={applicant.Talent.id}>
                  <ListGroup.Item className="showpage-applicant-list-item">{applicant.Talent.type}</ListGroup.Item>
                  <ListGroup.Item className="showpage-applicant-list-item">{applicant.Talent.username}</ListGroup.Item>
                  <ListGroup.Item className="showpage-applicant-list-item">{applicant.Talent.firstName}</ListGroup.Item>
                  <ListGroup.Item className="showpage-applicant-list-item">{applicant.Talent.lastName}</ListGroup.Item>
                  <ListGroup.Item className="showpage-applicant-list-item">{applicant.Talent.cvUrl}</ListGroup.Item>
                  <button type="button" className="btn btn-primary">Approve</button>
                </ListGroup>
              ))
            }
          </Col>
        </Row>
      </div>
    )
  }

  renderTalentApplyButton() {
    const {
      currentUserState: { currentUser },
      applicationState: { application }
    } = this.props

    if (currentUser && currentUser.type !== 'Marketer') return null
    console.log('>>>>>>>>>>Application', application)
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
            >Apply</Button>
          )
        }

        {
          application && (
            <Button
              type="button"
              id="btn-applied"
              className="btn btn-secondary my-3"
              onClick={() => {
                this.handleApplyCancel()
              }}
            >Applied</Button>
          )
        }
      </>
    )
  }

  renderDetailsForTalent() {
    const {
      currentUserState: { currentUser },
      gameState: { game }
    } = this.props

    if (currentUser && currentUser.type !== 'Marketer') return null
    return (
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
    )
  }

  render() {
    const { currentUserState: { currentUser } } = this.props
    return (
      <div id="dev-showpage" className="container">
        <div className="actions">
          {currentUser && this.renderDeveloperActions()}
          {currentUser && this.renderTalentApplyButton()}
        </div>

        {this.renderBasicInformation()}

        {currentUser && this.renderDeveloperApplications()}
        {currentUser && this.renderDetailsForTalent()}
      </div>
    )
  }
}

PagesPublicShow.propTypes = {
  history: PropTypes.shape().isRequired,

  match: PropTypes.shape().isRequired,
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
  resetTalentApplication: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
  gameState: state.game,
  devGameState: state.devGame,
  currentUserState: state.currentUser,
  applicationState: state.application,
  applicationsState: state.applications

})

const mapDispatchToProps = {
  getGame,
  resetGame,
  destroyGame,
  getTalentApplication,
  getDevGameApplications,
  resetDevGameApplications,
  createTalentApplication,
  destroyTalentApplication,
  resetTalentApplication
}

export default connect(mapStateToProps, mapDispatchToProps)(PagesPublicShow)
