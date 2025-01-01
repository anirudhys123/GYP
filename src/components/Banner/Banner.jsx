import React from 'react'
import { Carousel } from 'react-bootstrap';
import AiImage from "../../assets/images/ai-image.jpg";
import "../Banner/banner.css";
const Banner = () => {
  return (
    <>
          <section className='slider'>
              <Carousel variant='dark'>
                  <Carousel.Item>
                      <img src={AiImage} className='d-block w-100' text="First slide" />
                      <Carousel.Caption>
                          <div className='slider_des'>
                              <h5 className='heading'>Explore <span>AI Projects</span></h5>
                              <p className='sub_text'>Get AI Projects At Low Cost</p>
                          </div>
                      </Carousel.Caption>
                  </Carousel.Item>
              </Carousel>
          </section>
    </>
  )
}

export default Banner