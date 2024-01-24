import React, { useEffect } from 'react'
import '../css/Home.css'
import axios from 'axios'

const Home = () => {

    return (
      <div className='hero'>
          <div className="hero-content">
              <h1 className='hero-text'>Toll Calculator</h1>
              <p className='hero-description'>
                  Introducing the Toll Calculator app – your hassle-free solution for effortless toll cost estimation!
                  Input your route details, vehicle specifics, and let the Toll Fee Calculator do the rest!
                  Save time, plan your trips efficiently, and navigate the roads with confidence. 
                  Experience the convenience of stress-free travel management, ensuring every journey is as smooth as the ride itself. 
                  Welcome to a smarter way to calculate tolls – your trusted travel companion.
              </p>
          </div>
          <div className="hero-image"></div>
      </div>
    )
  }
  

export default Home
