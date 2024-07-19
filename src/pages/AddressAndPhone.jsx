import React from 'react'
import Head from '../components/Head'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Contact from '../components/Contact'

import { LuFileBadge } from "react-icons/lu";
import { CiMicrophoneOn } from "react-icons/ci";
import { MdOutlineSell } from "react-icons/md";
import { GiHeadphones } from "react-icons/gi";


const AddressAndPhone = () => {
  return (
    <>
     <Head />
     <Navbar />
     <Contact />
     <div className='flex flex-col md:flex-row shadow-xl w-full md:w-[70%] mx-auto py-12 my-[5rem] space-y-8 md:space-y-0'>
        <div className='w-full md:w-[25%] text-center'>
          <div className='flex items-center justify-center'><LuFileBadge className='text-[3.5rem] my-3' /></div>
          <p className='text-xl font-bold'>Devonxona</p>
          <h2>+998 75 552-41-58</h2>
          <h2>+998 75 552-41-53</h2>
        </div>
        <div className='w-full md:w-[25%] text-center'>
          <div className='flex items-center justify-center'><CiMicrophoneOn className='text-[3.5rem] my-3' /></div>
           <p className='text-xl font-bold'>Ishonch telefoni</p>
           <h2>+998 75 552-42-54</h2>
        </div>
        <div className='w-full md:w-[25%] text-center'>
          <div className='flex items-center justify-center'><MdOutlineSell className='text-[3.5rem] my-3' /></div>
          <p className='text-xl font-bold'>Sotish va marketing xizmati</p>
          <h2>+998 75 552-41-88</h2>
        </div>
        <div className='w-full md:w-[25%] text-center'>
          <div className='flex items-center justify-center'><GiHeadphones className='text-[3.5rem] my-3' /></div>
          <h2 className='text-xl font-bold'>Kommutator</h2>
        </div>
     </div>
     <Footer />
    </>
  )
}

export default AddressAndPhone