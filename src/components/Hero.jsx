import React from 'react'

import Form from '../components/Form';

// react icon
import { FaArrowsTurnRight } from "react-icons/fa6";
import { CiCircleCheck } from "react-icons/ci";

// img
import service from "../assets/images/services.jpg";
import form from "../assets/images/form.avif"

const Hero = () => {
  return (
    <section className='max-w-screen-xl container mx-auto md:px-20 px-4 mb-[5.5rem]'>
       <div className='flex'>
              <div className='w-full md:w-[40%] sm:w-[100%]'>
                <div className='flex items-center space-x-2 text-green'>
                        <FaArrowsTurnRight />
                        <span className='text-[1.5rem]'>UNG Volunteer-2024</span>
                  </div>
                  <h3 className='text-5xl text-left text-slate-600 mt-4'>
                   <span className='text-blue font-bold'>UNG</span> <span className='text-ung-orange font-bold text-[1.8rem]'>Jamoamizga aylaning !</span>
                  </h3>
                  <p className='md:text-[1.1rem] text-darkBlue mt-5 pr-[2rem] text-justify'>
                     Volontyor bo'lish uchun quyidagi <span className='text-yellow text-[1.2rem] font-bold'>amaliy va uslubiy</span> qo'llanmaga murojaat qiling
                  </p>
                    <div className='banner-option bg-slate-50 p-4 my-4'>
                        <div className='flex items-center space-x-3 my-2'>                      
                            <CiCircleCheck className='text-green text-[45px]' />
                            <p className='text-darkBlue font-bold'>Atrof-muhit tozaligini asrash</p>
                        </div>
                        <div className='flex items-center space-x-3 my-2'>                      
                            <CiCircleCheck className='text-green text-[45px]' />
                            <p className='text-darkBlue font-bold'>Yoshi ulug' keksa insonlarni asrab avaylash</p>
                        </div>
                        <div className='flex items-center space-x-3 my-2'>                      
                            <CiCircleCheck className='text-green text-[45px]' />
                            <p className='text-darkBlue font-bold'>Noyob turdagi hayvonlarni asrash</p>
                        </div>
                    </div>
              </div>
              <div className='w-[60%] hidden md:block'>
                  <div className='flex'>
                      <img className='w-[45%]' src={form} alt="service-img" />
                      <div className='w-[55%]'>
                          <Form />
                      </div>
                 </div>
              </div>      
       </div>      
    </section>
  )
}

export default Hero