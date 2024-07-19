import React from 'react'
import Head from '../components/Head'
import Navbar from '../components/Navbar'
import About from '../components/About'
import Footer from '../components/Footer'
import BreadCrumb from '../components/BreadCrumb'

const AboutPage = () => {
  return (
    <div>
        <Head />
        <Navbar />
        <BreadCrumb />
        <About />
        <Footer />
    </div>
  )
}

export default AboutPage