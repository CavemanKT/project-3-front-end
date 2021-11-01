import React from 'react'
import { Link } from 'react-router-dom'
import Carousel from 'react-bootstrap/Carousel'

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ListGroup from 'react-bootstrap/ListGroup'

class PagesDevShow extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      applicants: [
        // {}
      ]
    }
  }

  render() {
    const { applicants } = this.state
    return (
      <>
        <div id="dev-showpage">
          <div className="game-name">Lorem ipsum dolor</div>

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
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At, accusamus repellendus cumque, tempore quisquam nostrum iste, provident quae optio doloremque magnam sunt expedita deleniti. Doloribus officia sequi recusandae quos sint.</p>
                  </article>

                </div>

              </Col>

            </Row>
          </div>

          <div id="contact-list">
            <h3>Applicant list</h3>
            {
                  applicants.map((applicant, i) => (
                    <ListGroup horizontal={applicant.email} className="my-2" key={i}>
                      <ListGroup.Item>{applicant.fullname}</ListGroup.Item>
                      <ListGroup.Item>{applicant.email}</ListGroup.Item>
                      <ListGroup.Item>{applicant.cvUrl}</ListGroup.Item>
                      <ListGroup.Item>Approve</ListGroup.Item>
                    </ListGroup>
                  ))
                }

          </div>
        </div>

      </>
    )
  }
}

export default PagesDevShow
