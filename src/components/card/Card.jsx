import React from 'react'

import rahbar from "../../assets/rahbariyat/direktor.jpg"

import './card.css'
import Tab from '../../pages/video-gallery/Tab'

const Card = () => {
  return (
    <>
    <section class="text-gray-600 body-font overflow-hidden">
    <div class="container px-5 py-6 mx-auto">
    <div class="lg:w-[90%] mx-auto flex flex-wrap">
        <img alt="ecommerce" class="lg:w-[35%] w-full lg:h-auto h-64 object-cover  rounded" src={rahbar} />
        <div class="lg:w-[65%] w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
        <h2 class="text-sm title-font text-gray-500 tracking-widest">Shurtan gaz kimyo majmuasi bosh direktori</h2>
        <h1 class="text-gray-900 text-3xl title-font font-medium mb-1"> Aslanov Shuxrat Chariyevich</h1>
        <div class="flex mb-4 mt-2">
            <span class="flex items-center">
            <span class="text-gray-600">Bog'lanish uchun telefon:</span>
            </span>
            <span class="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s">
              <h3>+998 75 552-41-64</h3>
            </span>
        </div>
        <div class="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5"></div>
        <div className='flex items-center justify-between space-x-6 border border-base-50 p-2'>
          <a className='hover:bg-primary hover:text-white p-3 rounded-xl'>Funksional vazifalari</a>
          <a className='hover:bg-primary hover:text-white p-3 rounded-xl'>Mehnat faoliyati</a>
        </div>
        </div>
    </div>
    </div>
    </section>
    </>
  )
}

export default Card


