import React from 'react'
import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ListGroup from 'react-bootstrap/ListGroup'

class PagesDevGameList extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      games: [['among us', 'League of Legend', 'Counter Strike Online', 'Left 4 Dead'], ['Minecraft', 'CyberPunk', 'Call of Duty', 'Back 4 Blood'], ['Grand Theft Auto V', 'Roblox', 'Fortnite', 'Hacknet'], ['Nite team 4', 'Nite team 4', 'Nite team 4', 'Nite team 4']]
    }
  }

  render() {
    const { games } = this.state
    return (
      <div id="pages-dev-gamelist">
        <header className="text-center border-bottom pages-dev-gamelist-header">
          <Link className="btn btn-primary" to="/dev/profile/edit">Profile</Link>
          <h1>My Games</h1>
          <Link className="btn btn-primary" to="/dev/publish">Publish</Link>
        </header>
        <Container id="pages-dev-games-container">
          <Row>
            <Col>
              {
                games.map((items, idx) => (
                  <ListGroup horizontal="sm" className="pages-dev-games-list">
                    {
                    items.map((item, idy) => (
                      <ListGroup.Item className="pages-dev-games-item" key={idy}><a href="#">{`${item}`}</a></ListGroup.Item>
                    ))
                  }
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

export default PagesDevGameList
