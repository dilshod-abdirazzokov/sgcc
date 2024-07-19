import React, { useState, useEffect } from 'react'

// components
import Head from '../components/Head'
import Navbar from '../components/Navbar'
import Video from '../components/Video'
import Services from '../components/Services'
import News from "../components/News"
import Banner from '../components/Banner'
import Products from '../components/Products'
import Footer from '../components/Footer'
import Contact from '../components/Contact'
import Partners from '../components/Partners'
import TabVideo from "../components/video-gallery/TabVideo"
import FloatMenu from '../components/floating-menu/Floatmenu'
import LatestNews from '../components/LatestNews'
import LatestAbout from '../components/LatestAbout'







const HomePage = () => {


  return (
    <>
        <Head />
        <Navbar />
        <Video />
        <FloatMenu />
        <LatestNews />
        <LatestAbout />
        {/* <News /> */}
        {/* <Services /> */}
        <Products />
        <Contact />
        {/* <TabVideo /> */}
        <Partners />
        <Footer />
    </>
  )
}

export default HomePage