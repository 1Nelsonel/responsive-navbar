import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
// import slide from '../../assets/slides/slide1.jpg';
import slide1 from '../../assets/slides/1.jpg';
import slide2 from '../../assets/slides/2.jpg';
import slide3 from '../../assets/slides/3.jpg';
import './MainSlider.css'

function MainSlider() {
  return (
    <>
    <Carousel fade>
      <Carousel.Item sm={4}>
        <img
          className="d-block w-100"
          src={slide1}
          alt="First slide"
        />
        <Carousel.Caption>
          <div className='center'>
            <h3>NelsonelTech Solutions</h3>
            <p>Your All times Information Technology provider</p>
            <button className='btn btn-primary'>Get Started</button>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item sm={4}>
        <img
          className="d-block w-100"
          src={slide2}
          alt="Second slide"
        />

        <Carousel.Caption>
          <div className='center'>
            <h3>NelsonelTech Solutions</h3>
            <p>Your All times Information Technology provider</p>
            <button className='btn btn-primary'>Get Started</button>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item sm={4}>
        <img
          className="d-block w-100"
          src={slide3}
          alt="Third slide"
        />

        <Carousel.Caption>
          <div className='center'>
            <h3>NelsonelTech Solutions</h3>
            <p>Your All times Information Technology provider</p>
            <button className='btn btn-primary'>Get Started</button>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </>
    
  );
}

export default MainSlider;