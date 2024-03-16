import React from 'react'
import Gallary from '../components/Gallary'
import Hero from '../components/Hero'
import Services from '../components/Services'
import Contact from '../components/Contact'
import Review from '../components/Review'

const Home = () => {
  return (
    <div>
      <Hero />
      <Services />
      <Gallary />
      <Review/>
      <Contact/>
      
    </div>
  )
}

export default Home
