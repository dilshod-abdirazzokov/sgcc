import React from 'react'

// react icon
import { FaArrowsTurnRight } from "react-icons/fa6";
import { CiCircleCheck } from "react-icons/ci";
import CountUp from 'react-countup'

const Banner = () => {
  return (
      <section id='statistics' className='banner-section md:py-[4rem] my-0'>
          <div className='max-w-screen-xl container mx-auto md:px-20 px-4 bg-whiter'>
              <div className='w-full md:w-[35%] sm:w-full bg-slate-50 p-8'>
              <div className='flex items-center space-x-5'>
                <FaArrowsTurnRight />
                <span className='text-green text-[1.3rem] font-bold'>Statistik ma'lumotlar</span>
            </div>
              <h3 className='text-2xl font-bold text-slate-600 mt-4'>
                A'zo bo'lgan volontyorlarimiz soni <br /> <br /> <CountUp className='text-5xl text-yellow'   start={0} end={20} /> <br />
              </h3>
              <hr className='my-5' />
            </div>
          </div>
    </section>
  )
}

export default Banner