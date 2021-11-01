import React from 'react'
import { Link } from 'react-router-dom'

import Container from 'react-bootstrap/Container'
import Carousel from 'react-bootstrap/Carousel'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ListGroup from 'react-bootstrap/ListGroup'

class PagesDevShow extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      applicants: [
        { fullname: 'Faky Ralap', email: '123@123.com', cvUrl: 'https://www.alksdfj.com' },
        { fullname: 'Faky Ralap', email: '123@123.com', cvUrl: 'https://www.alksdfj.com' },
        { fullname: 'Faky Ralap', email: '123@123.com', cvUrl: 'https://www.alksdfj.com' },
        { fullname: 'Faky Ralap', email: '123@123.com', cvUrl: 'https://www.alksdfj.com' }
      ],
      game: {
        name: 'Among us',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio laudantium amet incidunt quo ducimus numquam ipsum nostrum unde quasi ratione voluptatem laboriosam impedit earum quod dolorem animi, laborum facilis illum.'
      }
    }
  }

  render() {
    const { applicants, game } = this.state
    return (
      <>
        <div id="dev-showpage">
          <div className="game-name">{game.name}</div>

          <div id="showpage-carousel-and-description-wrapper">
            <Row>
              <Col>
                <div id="showpage-carousel-container">
                  <Carousel variant="dark">
                    <Carousel.Item className="showpage-carousel-item">
                      <img
                        className="w-100"
                        src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/HNEV2?wid=1144&hei=1144&fmt=jpeg&qlt=95&.v=1599760849000"
                        alt="First slide"
                      />

                    </Carousel.Item>
                    <Carousel.Item>
                      <img
                        className="w-100"
                        src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/HNEV2?wid=1144&hei=1144&fmt=jpeg&qlt=95&.v=1599760849000"
                        alt="Second slide"
                      />

                    </Carousel.Item>
                    <Carousel.Item>
                      <img
                        className="w-100"
                        src="https://media.contentapi.ea.com/content/dam/gin/images/2021/06/battlefield-2042-key-art.jpg.adapt.crop1x1.767p.jpg"
                        alt="Third slide"
                      />

                    </Carousel.Item>
                  </Carousel>
                </div>
              </Col>

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

      </>
    )
  }
}

export default PagesDevShow
