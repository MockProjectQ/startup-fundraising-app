import React from 'react'
import '../../App.css'
import Cards from '../home-sections/Cards'
import Footer from '../home-sections/Footer'
import HeroSection from '../home-sections/HeroSection'
import Navbar from '../navbar/Navbar'

const Home = () => {
    return (
        <>
        <Navbar/>
        <HeroSection />
        <Cards/>
        <Footer/>
        
      </>
    )
}

export default Home
