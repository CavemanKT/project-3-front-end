// applicants' list shows or not depends on if the game being owned by dev or not owned
import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import Image from 'react-bootstrap/Image'
import ReactPlayer from 'react-player'
import ReactTwitchEmbedVideo from 'react-twitch-embed-video'
import VideoCover from 'react-video-cover'

import Accordion from '@/layouts/Accordion'

// const applicants = [
//   { fullname: 'Faky Ralap', email: '123@123.com', cvUrl: 'https://www.alksdfj.com' },
//   { fullname: 'Faky Ralap', email: '123@123.com', cvUrl: 'https://www.alksdfj.com' },
//   { fullname: 'Faky Ralap', email: '123@123.com', cvUrl: 'https://www.alksdfj.com' },
//   { fullname: 'Faky Ralap', email: '123@123.com', cvUrl: 'https://www.alksdfj.com' }
// ]

const width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth
const height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight

const game = {
  name: 'Among us',
  description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio laudantium amet incidunt quo ducimus numquam ipsum nostrum unde quasi ratione voluptatem laboriosam impedit earum quod dolorem animi, laborum facilis illum.',
  url: '6T8YsBpwouiSUschLB'
}

class PagesPublicShow extends React.Component {
  constructor(props) {
    super(props)

    this.handleApplyClick = this.handleApplyClick.bind(this)
  }

  componentDidMount() {
    console.log('pages public show')
  }

  handleApplyClick() {
    console.log('Clicked on Apply')
  }

  renderVideoCover() {
    const videoOptions = {
      src: 'https://i.imgur.com/V2cbLNN.mp4',
      ref: (videoRef) => {
        this.videoRef = videoRef
      },
      onClick: () => {
        if (this.videoRef && this.videoRef.paused) {
          this.videoRef.play()
        } else if (this.videoRef) {
          this.videoRef.pause()
        }
      },
      title: 'click to play/pause'
    }

    console.log(videoOptions)

    return (

      <div style={{
        width: '100%',
        height: '100%',
        objectFit: 'cover'
      }}
      >
        {console.log(videoOptions.ref)}
        <VideoCover
          videoOptions={videoOptions}
        />
      </div>
    )
  }

  renderGIF(embed) {
    return (
      <div
        id="game-cover"
        style={{
          width: '100%',
          height: '0',
          paddingTop: '0px',
          paddingBottom: '37%',
          position: 'relative',
          pointerEvents: 'none'
        }}
      >
        <iframe
          src={`https://giphy.com/embed/${embed}`}
          width="100%"
          height="100%"
          style={{ position: 'absolute' }}
          frameBorder="0"
          allowFullScreen
        />
      </div>
    )
  }

  render() {
    return (
      <div id="gapages-public-melist" className="container my-1">
        <div className="d-flex justify-content-between align-items-center">
          <h1 id="game-name">{game.name}</h1>
          <button className="btn btn-primary" type="button" onClick={this.handleApplyClick}>Apply</button>
        </div>
        {
          this.renderGIF('6T8YsBpwouiSUschLB')
        }
        {/* <Image src="https://i.giphy.com/media/6T8YsBpwouiSUschLB/giphy.webp" rounded /> */}

        <Row>
          <Col>
            <div id="showpage-carousel-container">
              <Carousel variant="dark">
                <Carousel.Item className="showpage-carousel-item">
                  {/* <img
                      className="w-100"
                      src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/HNEV2?wid=1144&hei=1144&fmt=jpeg&qlt=95&.v=1599760849000"
                      alt="First slide"
                    /> */}
                  <img
                    className="w-100"
                    src="https://i.imgur.com/Lh6T05m.jpg"
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
              {/* <article>
                <p>{game.description}</p>
              </article> */}
              <Accordion />
            </div>
          </Col>
        </Row>
      </div>
    )
  }
}

export default PagesPublicShow
