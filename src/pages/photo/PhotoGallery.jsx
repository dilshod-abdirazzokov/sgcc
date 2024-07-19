import React from 'react'

import TabGallery from '../../components/tabgallery/TabGallery'
import Head from '../../components/Head'
import Navbar from '../../components/Navbar'

const PhotoGallery = () => {
  return (
    <>
        <Head />
        <Navbar />
        <div className='max-w-screen-2xl container mx-auto md:px-2 px-4'>
          <TabGallery />
        </div>
    </>
  )
}

export default PhotoGallery