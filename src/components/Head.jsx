import React from 'react'


// image
import logo from "../assets/images/logo.png";

import { GoClock } from "react-icons/go";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { PiPhoneCall } from "react-icons/pi";


const Head = () => {
    const navItems = (
        <>
            <li><a>Bosh sahifa </a></li>
            <li><a>Nega Aynan Biz ?</a></li>
            <li><a>Bog'lanish</a></li>   
            <li><a>Bizning volontyorlar</a></li>
            <li><a>Yangiliklar</a></li>  
            <li><a>Foto-lavhalar</a></li> 
        </>
    )
  return (
      <section className=' pb-[2rem]'>
        <div className="bg-[#091242]  md:px-20  px-4 sm:px-20 py-4 flex items-center justify-between">
          {/* navbar-start */}
            <div className="navbar-1">
               <div className=' flex items-center space-x-4'>
                  <img className='h-[5rem] my-2'  src={logo} alt="newlogo" />
                  {/* <img className='h-[5rem] shgkm'  src={shgkm} alt="newlogo" /> */}
                  <h2 className='text-[1.2rem] font-bold  text-white mt-5 hidden md:block ddd'><span className='w'>“Shurtan gaz kimyo majmuasi”</span> <br />  <span className='text-[.9rem] uppercase q'>mas'uliyati cheklangan jamiyati</span></h2>
               </div>
            </div>
            <div className='navbar-2 pt-7'>
              <div className='hidden md:flex  space-x-0 md:space-x-[4rem]'>
                  <div className='flex md:flex-row flex-col items-center text-white space-x-4'>
                    <div className='p-2 rounded-full border border-[#273270] '><GoClock className='text-3xl'/></div>
                    <p className='text-[.8rem]'>
                      Dushanba - Juma | 8.00 : 17:00 <br />
                      Shanba, Yakshanba-dam olish kunlari
                    </p>
                  </div>
                  <div className='flex items-center text-white space-x-4'>
                    <div className='p-2 rounded-full border border-[#273270]'><MdOutlineAlternateEmail className='text-3xl'/></div>
                    <p className='text-[.8rem]'>
                    Pochta manzil <br />
                    sgcc@sgcc.uz
                    </p>
                  </div>
                  <div className='flex items-center text-white space-x-4'>
                    <div className='p-2 rounded-full border border-[#273270]'><PiPhoneCall className='text-3xl'/></div>
                    <p className='text-[.8rem]'>
                    Bog'lanish <br />
                      +998 (75) 552-41-58
                    </p>
                  </div>
              </div>
            </div>
            {/* navbar end */}
            <div className="navbar-3 pt-7">
               {/* <Dropdown /> */}
               <ul className='grid grid-cols-4 text-white gap-x-3'>
                <li className='cursor-pointer border-b border-base-200 border-1'>O'zb</li>
                <li className='cursor-pointer'>Ўзб</li>
                <li className='cursor-pointer'>Рус</li>
                <li className='cursor-pointer'>En</li>
               </ul>
            </div>        
          </div>
    </section>
  )
}

export default Head