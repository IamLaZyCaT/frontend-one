import React from 'react'
import About from '../../Component/About/About'
import Contact from '../../Component/Contact/Contact'
import Footer from '../../Component/Footer/Footer'
import Hero from '../../Component/Hero/Hero'
import Map from '../../Component/Map/Map'
import Navbar from '../../Component/Navbar/Navbar'
import Service from '../../Component/Service/Service'

const Home = () => {
  return (
  <>
   <Navbar/>
    <Hero/>
    <Service/>
    <About/>
    <Contact/>
    <Map/>
    <Footer/>
  </>
   
  )
}

export default Home