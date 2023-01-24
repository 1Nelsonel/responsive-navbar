import React from 'react'
import About from '../components/About/About'
import MainSlider from '../components/MainSlider/MainSlider'

const HomePage = () => {
  return (
    <div className='mt-5 pt-4'>
        <MainSlider/>
        <About/>
        
    </div>
  )
}

export default HomePage