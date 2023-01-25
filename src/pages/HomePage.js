import React, { useState } from 'react'
import About from '../components/About/About'
import MainSlider from '../components/MainSlider/MainSlider'
import Service from '../components/Services/Service'
import axios from 'axios'

const HomePage = () => {
  const [services, setServices] = useState([])

  useState(() => {
    async function fetchServices() {
      const { data } = await axios.get('/services/')
      setServices(data)
    }

    fetchServices()

  }, [])
  return (
    <div className='mt-5 pt-4'>
        <MainSlider/>
        <About/>
        <Service/>
    </div>
  )
}

export default HomePage