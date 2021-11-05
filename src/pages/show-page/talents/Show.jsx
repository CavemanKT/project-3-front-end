// applied btn shows or not depends on if the game being owned by dev or not owned

import React from 'react'
import { Link } from 'react-router-dom'

import Container from 'react-bootstrap/Container'
import Carousel from 'react-bootstrap/Carousel'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ListGroup from 'react-bootstrap/ListGroup'

class PagesTalentsShow extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      applicants: [
        { fullname: 'Faky Ralap', email: '123@123.com', cvUrl: 'https://www.alksdfj.com' },
        { fullname: 'Faky Ralap', email: '123@123.com', cvUrl: 'https://www.alksdfj.com' },
        { fullname: 'Faky Ralap', email: '123@123.com', cvUrl: 'https://www.alksdfj.com' },
        { fullname: 'Faky Ralap', email: '123@123.com', cvUrl: 'https://www.alksdfj.com' }
      ],
      job: {
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi ipsam officiis velit harum, voluptatem porro, veritatis expedita odit illum magnam cumque tenetur possimus, earum suscipit blanditiis amet nihil quisquam ducimus!',
        requirement: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti totam itaque quasi repellat et velit omnis quas quod corporis reprehenderit, quam aliquam impedit officiis iste error deserunt fugiat quos? Incidunt.'
      },
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

          <div id="showpage-carousel-and-description-wrapper">
            <h1 id="game-name">{game.name}</h1>
            {/* <button type="button" id="btn-apply" className="btn btn-primary my-3">Apply</button> */}
            <button type="button" id="btn-applied" className="btn btn-secondary my-3">Applied</button>
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

        </div>

      </>
    )
  }
}

export default PagesTalentsShow
