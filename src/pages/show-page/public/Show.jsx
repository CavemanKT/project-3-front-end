// applicants' list shows or not depends on if the game being owned by dev or not owned
import React from 'react'

import Carousel from 'react-bootstrap/Carousel'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

// const applicants = [
//   { fullname: 'Faky Ralap', email: '123@123.com', cvUrl: 'https://www.alksdfj.com' },
//   { fullname: 'Faky Ralap', email: '123@123.com', cvUrl: 'https://www.alksdfj.com' },
//   { fullname: 'Faky Ralap', email: '123@123.com', cvUrl: 'https://www.alksdfj.com' },
//   { fullname: 'Faky Ralap', email: '123@123.com', cvUrl: 'https://www.alksdfj.com' }
// ]
const game = {
  name: 'Among us',
  description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio laudantium amet incidunt quo ducimus numquam ipsum nostrum unde quasi ratione voluptatem laboriosam impedit earum quod dolorem animi, laborum facilis illum.'
}

class PagesPublicShow extends React.Component {
  componentDidMount() {
    console.log('pages public show')
  }

  render() {
    return (
      <div id="dev-showpage">

        <div id="showpage-carousel-and-description-wrapper">
          <h1 id="game-name">{game.name}</h1>
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
      </div>
    )
  }
}

export default PagesPublicShow
