import React from 'react'

// components
import Head from '../components/Head'
import Navbar from '../components/Navbar'


// image
import found from "../assets/images/found.png";

 const NotFound = () => {
  return (
    <div>
        <Head />
        <Navbar />
        <section id='NotFound' className='max-w-screen-xl container mx-auto md:px-2 px-4'>
                <img className='w-[40rem] mx-auto' src={found} alt="NotFound" />
        </section>
    </div>
  )
}

export default NotFound;

