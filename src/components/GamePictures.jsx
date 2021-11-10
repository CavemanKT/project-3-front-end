import React from 'react'
import { Carousel } from 'react-bootstrap'

export default function showGamePictures() {
  return (
    <Carousel variant="dark">
      <Carousel.Item className="showpage-carousel-item" interval={1000}>
        {/* <img
                              className="w-100"
                              src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/HNEV2?wid=1144&hei=1144&fmt=jpeg&qlt=95&.v=1599760849000"
                              alt="First slide"
                            /> */}
        <img
          className="w-100"
          src="https://media0.giphy.com/media/hqR9D8Q8PEmarEC93A/giphy.gif"
          alt="First slide"
        />

      </Carousel.Item>
      <Carousel.Item className="showpage-carousel-item" interval={1000}>
        {/* <img
                          className="w-100"
                          src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/HNEV2?wid=1144&hei=1144&fmt=jpeg&qlt=95&.v=1599760849000"
                          alt="Second slide"
                        /> */}
        <img
          className="w-100"
          src="https://media0.giphy.com/media/omJAgz1fKCF0v4ogWf/giphy.gif"
          alt="Second slide"
        />

      </Carousel.Item>
      <Carousel.Item className="showpage-carousel-item" interval={1000}>
        {/* <img
                          className="w-100"
                          src="https://media.contentapi.ea.com/content/dam/gin/images/2021/06/battlefield-2042-key-art.jpg.adapt.crop1x1.767p.jpg"
                          alt="Third slide"
                        /> */}
        <img
          className="w-100"
          src="https://media0.giphy.com/media/zGAK0ygDEyhHF4eC2o/giphy.gif"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  )
}
