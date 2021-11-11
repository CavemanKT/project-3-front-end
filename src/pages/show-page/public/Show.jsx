// applicants' list shows or not depends on if the game being owned by dev or not owned
import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import { Container, Row, Col } from 'react-bootstrap'

import Image from 'react-bootstrap/Image'
import ReactPlayer from 'react-player'
import ReactTwitchEmbedVideo from 'react-twitch-embed-video'
import VideoCover from 'react-video-cover'

import AccordionGameDescription from '@/components/GameDescription'
import AccordionJobDescription from '@/components/JobDescription'
import CarouselGamePictures from '@/components/GamePictures'

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

const renderGIF = (embed) => (
  <div id="game-cover">
    <iframe
      src={`https://giphy.com/embed/${embed}`}
      id="game-cover-iframe"
    />
  </div>
)

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

  render() {
    return (
      <div id="showpage-container" className="container my-1">
        <div id="apply-game-header" className="d-flex justify-content-between align-items-center">
          <h1 id="game-name">{game.name}</h1>
          <button id="apply-game-button" className="btn btn-dark btn-lg" type="button" onClick={this.handleApplyClick}>Apply</button>
        </div>
        {
        // Apex Legends cover
        // CaV9J0VUJ1q3gVUrYG

        // CounterStrike Online cover
        // 6T8YsBpwouiSUschLB

          renderGIF('CaV9J0VUJ1q3gVUrYG')
        }

        <div id="showpage-carousel-and-description-container" className=" my-1">
          <Row>
            <Col xs={6}>
              <div id="showpage-carousel-container">
                <CarouselGamePictures />
              </div>
            </Col>

            <Col xs={6}>
              <div id="showpage-description-container">
                <h2>Description: </h2>
                {/* <article>
                    <p>{game.description}</p>
                  </article> */}
                <AccordionGameDescription />
              </div>
            </Col>
          </Row>
        </div>

        <div id="showpage-job-detail-container">
          <AccordionJobDescription />
        </div>
      </div>
    )
  }
}

export default PagesPublicShow
