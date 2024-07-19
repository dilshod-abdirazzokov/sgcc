import React from 'react'
import Head from '../components/Head'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'



import img1 from "../assets/rahbariyat/direktor.jpg"

const Management = () => {
  return (
    <>
        <Head />
        <Navbar />
        <div className='flex flex-col md:flex-row space-x-2 md:space-x-8'>
           <img src={img1} alt="" />
  
        </div>
        <Footer />
    </>
  )
}

export default Management