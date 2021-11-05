import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ListGroup from 'react-bootstrap/ListGroup'

import { getGames, resetGames } from '@/actions/dev/game'

class PagesDevGameList extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      // games: [['among us', 'League of Legend', 'Counter Strike Online', 'Left 4 Dead'], ['Minecraft', 'CyberPunk', 'Call of Duty', 'Back 4 Blood'], ['Grand Theft Auto V', 'Roblox', 'Fortnite', 'Hacknet'], ['Nite team 4', 'Nite team 4', 'Nite team 4', 'Nite team 4']]
    }
  }

  componentDidMount() {
    this.props.getGames()
  }

  componentWillUnmount() {
    this.props.resetGames()
  }

  render() {
    const { devGamesState: { devGames } } = this.props

    return (
      <div id="pages-dev-gamelist">
        <header className="text-center border-bottom pages-dev-gamelist-header">
          <button type="button" className="btn btn-primary">Profile</button>
          <h1>My Games</h1>
          <button type="button" className="btn btn-primary">Publish</button>
        </header>
        <Container id="pages-dev-games-container">
          <Row>
            <Col>
              {
                devGames.map((item) => (
                  <ListGroup horizontal="sm" className="pages-dev-games-list">
                    {/* {
                    items.map((item) => (
                      <ListGroup.Item className="pages-dev-games-item" key={item.id}><a href="#">{`${item}`}</a></ListGroup.Item>
                    ))
                  } */}
                    <Link
                      key={item.id}
                      to={`/dev/games/${item.id}`}
                      className="list-group-item list-group-item-action"
                    >
                      <div>{item.name}</div>
                    </Link>
                  </ListGroup>
                ))
              }
            </Col>
          </Row>
        </Container>

        <footer className="bg-dark text-center text-white">
          {/* <!-- Grid container --> */}
          <div className="container p-4 pb-0">
            {/* <!-- Section: Social media --> */}
            <section className="mb-4">
              {/* <!-- Facebook --> */}
              <a
                className="btn btn-outline-light btn-floating m-1"
                href="#!"
                role="button"
              ><i className="fab fa-facebook-f" /></a>

              {/* <!-- Twitter --> */}
              <a
                className="btn btn-outline-light btn-floating m-1"
                href="#!"
                role="button"
              ><i className="fab fa-twitter" /></a>

              {/* <!-- Google --> */}
              <a
                className="btn btn-outline-light btn-floating m-1"
                href="#!"
                role="button"
              ><i className="fab fa-google" /></a>

              {/* <!-- Instagram --> */}
              <a
                className="btn btn-outline-light btn-floating m-1"
                href="#!"
                role="button"
              ><i className="fab fa-instagram" /></a>

              {/* <!-- Linkedin --> */}
              <a
                className="btn btn-outline-light btn-floating m-1"
                href="#!"
                role="button"
              ><i className="fab fa-linkedin-in" /></a>

              {/* <!-- Github --> */}
              <a
                className="btn btn-outline-light btn-floating m-1"
                href="#!"
                role="button"
              ><i className="fab fa-github" /></a>
            </section>
            {/* <!-- Section: Social media --> */}
          </div>
          {/* <!-- Grid container --> */}

          {/* <!-- Copyright --> */}
          <div className="text-center p-3">
            © 2021 Copyright:
            <a id="footer-company-url" className="text-white" href="https://www.iz.io">     iz.io</a>
          </div>
          {/* <!-- Copyright --> */}
        </footer>
      </div>

    )
  }
}

PagesDevGameList.propTypes = {
  getGames: PropTypes.func.isRequired,
  resetGames: PropTypes.func.isRequired,
  devGamesState: PropTypes.shape().isRequired
}

const mapStateToProps = (state) => ({
  devGamesState: state.devGames
})

const mapDispatchToProps = {
  getGames,
  resetGames
}

export default connect(mapStateToProps, mapDispatchToProps)(PagesDevGameList)
