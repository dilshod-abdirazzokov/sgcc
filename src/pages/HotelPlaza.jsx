import React from 'react'
import Slider from "react-slick";

// components
import Head from '../components/Head'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'


// import img
import imgHotel from "../assets/hotel/hotel.png"
import room2 from "../assets/hotel/banner6.png"
import room3 from "../assets/hotel/banner8.png"

import land from "../assets/hotel/hotel.png"
import ImageGallery from '../components/ImageGallery'
import Agent from '../components/agent/Agent'


const HotelPlaza = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear"
  };


  return (
    <>
      <Head />
      <Navbar />


      {/* title */}
      <section className="bg-white dark:bg-dark mb-12">
      <div className="mx-auto px-4 sm:container">
        <div className="border-l-[5px] border-primary pl-5">
          <h2 className="mb-2 text-3xl font-semibold text-dark dark:text-white">
          Hotel Shurtan Plaza
          </h2>
          <p className="text-sm font-medium text-body-color dark:text-dark-6">
            Sifatli xizmat ko'rsatish, Qulay shunamlik ,Hamyonbop narxlar
          </p>
        </div>
      </div>
    </section>
      <div className="slider-container my-[2rem]" style={{zIndex:'1'}} >
        <Slider {...settings}>
          {/* slider */}
          <section class="py-12  mx-auto">
            <div class="w-full max-w-7xl mx-auto">
              <div class="grid grid-cols-12 gap-y-11">
                <div
                  class="col-span-12 lg:col-span-7 py-12 px-4 lg:px-11 bg-gray-50 max-lg:rounded-2xl lg:rounded-l-2xl flex flex-col justify-between max-lg:max-w-lg max-lg:mx-auto">
                  <h2 class="font-manrope font-bold text-2xl sm:text-4xl leading-10 text-black mb-9">Standart ikki kishilik</h2>
                  <div class="flex flex-col min-[550px]:flex-row max-[550px]:gap-4 min-[550px]:items-center py-4 pr-3 lg:pr-10 pl-3 lg:pl-6 bg-white mb-14 w-full xl:w-[calc(100%-45px)]">
                    <div class="flex items-center gap-4 pr-6 max-[550px]:pl-6 min-[550px]:border-r border-gray-200 ">
                      <button
                        class="p-3 rounded-full bg-indigo-50 transition-all duration-500 hover:bg-indigo-100">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25"
                          fill="none">
                          <path
                            d="M11.7143 19.75C11.7143 20.5784 11.0235 21.25 10.1714 21.25C9.31933 21.25 8.62857 20.5784 8.62857 19.75M17.8857 19.75C17.8857 20.5784 17.195 21.25 16.3429 21.25C15.4908 21.25 14.8 20.5784 14.8 19.75M4.51429 6.25L5.96114 13.9854C6.25319 15.5468 6.39921 16.3275 6.95475 16.7887C7.51029 17.25 8.30451 17.25 9.89296 17.25H16.6218C18.2103 17.25 19.0046 17.25 19.5601 16.7887C20.1157 16.3274 20.2617 15.5467 20.5537 13.9852L21.1146 10.9852C21.5248 8.79152 21.7299 7.69469 21.1301 6.97234C20.5303 6.25 19.4144 6.25 17.1827 6.25H4.51429ZM4.51429 6.25L4 3.25"
                            stroke="#4F46E5" stroke-width="1.6" stroke-linecap="round" />
                        </svg>
                      </button>
                      <p class="font-medium text-sm text-black">2</p>
                    </div>
                    <div class="flex items-center gap-4 px-6 min-[550px]:border-r border-gray-200 ">
                      <button
                        class="p-3 rounded-full bg-indigo-50 transition-all duration-500 hover:bg-indigo-100">
                        <svg width="24" height="25" viewBox="0 0 24 25" fill="none"
                          xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M20 10.25C20 11.9069 16.4183 13.25 12 13.25C7.58172 13.25 4 11.9069 4 10.25M20 14.25C20 15.9069 16.4183 17.25 12 17.25C7.58172 17.25 4 15.9069 4 14.25M20 18.25C20 19.9069 16.4183 21.25 12 21.25C7.58172 21.25 4 19.9069 4 18.25M20 6.25C20 7.90685 16.4183 9.25 12 9.25C7.58172 9.25 4 7.90685 4 6.25C4 4.59315 7.58172 3.25 12 3.25C16.4183 3.25 20 4.59315 20 6.25Z"
                            stroke="#4F46E5" stroke-width="1.6" stroke-linecap="round" />
                        </svg>
                      </button>
                      <p class="font-medium text-sm text-black">Rezidentlar narxi:  220 000 so'm</p>
                    </div>
                    <div class="flex items-center gap-4 pl-6  ">
                      <button
                        class="p-3 rounded-full bg-indigo-50 transition-all duration-500 hover:bg-indigo-100">
                        <svg width="24" height="25" viewBox="0 0 24 25" fill="none"
                          xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M4 19.25L20 3.25M10 5.75C10 7.683 8.433 9.25 6.5 9.25C4.567 9.25 3 7.683 3 5.75C3 3.817 4.567 2.25 6.5 2.25C8.433 2.25 10 3.817 10 5.75ZM21 16.75C21 18.683 19.433 20.25 17.5 20.25C15.567 20.25 14 18.683 14 16.75C14 14.817 15.567 13.25 17.5 13.25C19.433 13.25 21 14.817 21 16.75Z"
                            stroke="#4F46E5" stroke-width="1.6" stroke-linecap="round" />
                        </svg>
                      </button>
                      <p class="font-medium text-sm text-black">
                        Norezidentlar narxi:
                        255 000 so'm
                      </p>
                    </div>
                  </div>

                  <a href="javascript:;" class="flex items-center rounded-full py-3 px-5 min-[550px]:w-max w-full justify-center shadow-sm shadow-transparent bg-indigo-600 transition-all duration-500 hover:shadow-indigo-400 hover:bg-indigo-700">
                    <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clip-path="url(#clip0_14119_17549)">
                        <path d="M10 0.5L20 20.5L10 17.1263L0 20.4794L10 0.5Z" fill="white" />
                      </g>
                      <defs>
                        <clipPath id="clip0_14119_17549">
                          <rect width="20" height="20" fill="white" transform="translate(0 0.5)" />
                        </clipPath>
                      </defs>
                    </svg>
                    <a className='btn btn-primary text-white mt-6 w-full' onClick={() => document.getElementById('my_modal_2').showModal()}>Buyurtma berish</a>
                  </a>
                </div>
                <div class="col-span-12 lg:col-span-5 lg:max-w-md max-lg:mx-auto ">
                  <img src={land} alt="Warehouse image" class="w-full h-full max-lg:rounded-3xl object-cover" />
                </div>
              </div>
            </div>
          </section>

          {/* slider */}
          <section class="py-12  mx-auto relative">
            <div class="w-full max-w-7xl mx-auto">
              <div class="grid grid-cols-12 gap-y-11">
                <div
                  class="col-span-12 lg:col-span-7 py-12 px-4 lg:px-11 bg-gray-50 max-lg:rounded-2xl lg:rounded-l-2xl flex flex-col justify-between max-lg:max-w-lg max-lg:mx-auto">
                  <h2 class="font-manrope font-bold text-2xl sm:text-4xl leading-10 text-black mb-9">Standart ikki kishilik</h2>
                  <div class="flex flex-col min-[550px]:flex-row max-[550px]:gap-4 min-[550px]:items-center py-4 pr-3 lg:pr-10 pl-3 lg:pl-6 bg-white mb-14 w-full xl:w-[calc(100%-45px)]">
                    <div class="flex items-center gap-4 pr-6 max-[550px]:pl-6 min-[550px]:border-r border-gray-200 ">
                      <button
                        class="p-3 rounded-full bg-indigo-50 transition-all duration-500 hover:bg-indigo-100">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25"
                          fill="none">
                          <path
                            d="M11.7143 19.75C11.7143 20.5784 11.0235 21.25 10.1714 21.25C9.31933 21.25 8.62857 20.5784 8.62857 19.75M17.8857 19.75C17.8857 20.5784 17.195 21.25 16.3429 21.25C15.4908 21.25 14.8 20.5784 14.8 19.75M4.51429 6.25L5.96114 13.9854C6.25319 15.5468 6.39921 16.3275 6.95475 16.7887C7.51029 17.25 8.30451 17.25 9.89296 17.25H16.6218C18.2103 17.25 19.0046 17.25 19.5601 16.7887C20.1157 16.3274 20.2617 15.5467 20.5537 13.9852L21.1146 10.9852C21.5248 8.79152 21.7299 7.69469 21.1301 6.97234C20.5303 6.25 19.4144 6.25 17.1827 6.25H4.51429ZM4.51429 6.25L4 3.25"
                            stroke="#4F46E5" stroke-width="1.6" stroke-linecap="round" />
                        </svg>
                      </button>
                      <p class="font-medium text-sm text-black">2</p>
                    </div>
                    <div class="flex items-center gap-4 px-6 min-[550px]:border-r border-gray-200 ">
                      <button
                        class="p-3 rounded-full bg-indigo-50 transition-all duration-500 hover:bg-indigo-100">
                        <svg width="24" height="25" viewBox="0 0 24 25" fill="none"
                          xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M20 10.25C20 11.9069 16.4183 13.25 12 13.25C7.58172 13.25 4 11.9069 4 10.25M20 14.25C20 15.9069 16.4183 17.25 12 17.25C7.58172 17.25 4 15.9069 4 14.25M20 18.25C20 19.9069 16.4183 21.25 12 21.25C7.58172 21.25 4 19.9069 4 18.25M20 6.25C20 7.90685 16.4183 9.25 12 9.25C7.58172 9.25 4 7.90685 4 6.25C4 4.59315 7.58172 3.25 12 3.25C16.4183 3.25 20 4.59315 20 6.25Z"
                            stroke="#4F46E5" stroke-width="1.6" stroke-linecap="round" />
                        </svg>
                      </button>
                      <p class="font-medium text-sm text-black">Rezidentlar uchun narx  220 000 so'm</p>
                    </div>
                    <div class="flex items-center gap-4 pl-6  ">
                      <button
                        class="p-3 rounded-full bg-indigo-50 transition-all duration-500 hover:bg-indigo-100">
                        <svg width="24" height="25" viewBox="0 0 24 25" fill="none"
                          xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M4 19.25L20 3.25M10 5.75C10 7.683 8.433 9.25 6.5 9.25C4.567 9.25 3 7.683 3 5.75C3 3.817 4.567 2.25 6.5 2.25C8.433 2.25 10 3.817 10 5.75ZM21 16.75C21 18.683 19.433 20.25 17.5 20.25C15.567 20.25 14 18.683 14 16.75C14 14.817 15.567 13.25 17.5 13.25C19.433 13.25 21 14.817 21 16.75Z"
                            stroke="#4F46E5" stroke-width="1.6" stroke-linecap="round" />
                        </svg>
                      </button>
                      <p class="font-medium text-sm text-black">
                        Norezidentlar uchun narx
                        255 000 so'm
                      </p>
                    </div>
                  </div>

                  <a href="javascript:;" class="flex items-center rounded-full py-3 px-5 min-[550px]:w-max w-full justify-center shadow-sm shadow-transparent bg-indigo-600 transition-all duration-500 hover:shadow-indigo-400 hover:bg-indigo-700">
                    <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clip-path="url(#clip0_14119_17549)">
                        <path d="M10 0.5L20 20.5L10 17.1263L0 20.4794L10 0.5Z" fill="white" />
                      </g>
                      <defs>
                        <clipPath id="clip0_14119_17549">
                          <rect width="20" height="20" fill="white" transform="translate(0 0.5)" />
                        </clipPath>
                      </defs>
                    </svg>
                    <a className='btn btn-primary text-white mt-6 w-full' onClick={() => document.getElementById('my_modal_2').showModal()}>Buyurtma berish</a>
                  </a>
                </div>
                <div class="col-span-12 lg:col-span-5 lg:max-w-md max-lg:mx-auto ">
                  <img src="https://pagedone.io/asset/uploads/1701234779.png" alt="Warehouse image" class="w-full h-full max-lg:rounded-3xl" />
                </div>
              </div>
            </div>
          </section>

          {/* slider */}
          <section class="py-12  mx-auto relative">
            <div class="w-full max-w-7xl mx-auto">
              <div class="grid grid-cols-12 gap-y-11">
                <div
                  class="col-span-12 lg:col-span-7 py-12 px-4 lg:px-11 bg-gray-50 max-lg:rounded-2xl lg:rounded-l-2xl flex flex-col justify-between max-lg:max-w-lg max-lg:mx-auto">
                  <h2 class="font-manrope font-bold text-2xl sm:text-4xl leading-10 text-black mb-9">Standart ikki kishilik</h2>
                  <div class="flex flex-col min-[550px]:flex-row max-[550px]:gap-4 min-[550px]:items-center py-4 pr-3 lg:pr-10 pl-3 lg:pl-6 bg-white mb-14 w-full xl:w-[calc(100%-45px)]">
                    <div class="flex items-center gap-4 pr-6 max-[550px]:pl-6 min-[550px]:border-r border-gray-200 ">
                      <button
                        class="p-3 rounded-full bg-indigo-50 transition-all duration-500 hover:bg-indigo-100">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25"
                          fill="none">
                          <path
                            d="M11.7143 19.75C11.7143 20.5784 11.0235 21.25 10.1714 21.25C9.31933 21.25 8.62857 20.5784 8.62857 19.75M17.8857 19.75C17.8857 20.5784 17.195 21.25 16.3429 21.25C15.4908 21.25 14.8 20.5784 14.8 19.75M4.51429 6.25L5.96114 13.9854C6.25319 15.5468 6.39921 16.3275 6.95475 16.7887C7.51029 17.25 8.30451 17.25 9.89296 17.25H16.6218C18.2103 17.25 19.0046 17.25 19.5601 16.7887C20.1157 16.3274 20.2617 15.5467 20.5537 13.9852L21.1146 10.9852C21.5248 8.79152 21.7299 7.69469 21.1301 6.97234C20.5303 6.25 19.4144 6.25 17.1827 6.25H4.51429ZM4.51429 6.25L4 3.25"
                            stroke="#4F46E5" stroke-width="1.6" stroke-linecap="round" />
                        </svg>
                      </button>
                      <p class="font-medium text-sm text-black">2</p>
                    </div>
                    <div class="flex items-center gap-4 px-6 min-[550px]:border-r border-gray-200 ">
                      <button
                        class="p-3 rounded-full bg-indigo-50 transition-all duration-500 hover:bg-indigo-100">
                        <svg width="24" height="25" viewBox="0 0 24 25" fill="none"
                          xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M20 10.25C20 11.9069 16.4183 13.25 12 13.25C7.58172 13.25 4 11.9069 4 10.25M20 14.25C20 15.9069 16.4183 17.25 12 17.25C7.58172 17.25 4 15.9069 4 14.25M20 18.25C20 19.9069 16.4183 21.25 12 21.25C7.58172 21.25 4 19.9069 4 18.25M20 6.25C20 7.90685 16.4183 9.25 12 9.25C7.58172 9.25 4 7.90685 4 6.25C4 4.59315 7.58172 3.25 12 3.25C16.4183 3.25 20 4.59315 20 6.25Z"
                            stroke="#4F46E5" stroke-width="1.6" stroke-linecap="round" />
                        </svg>
                      </button>
                      <p class="font-medium text-sm text-black">Rezidentlar uchun narx  220 000 so'm</p>
                    </div>
                    <div class="flex items-center gap-4 pl-6  ">
                      <button
                        class="p-3 rounded-full bg-indigo-50 transition-all duration-500 hover:bg-indigo-100">
                        <svg width="24" height="25" viewBox="0 0 24 25" fill="none"
                          xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M4 19.25L20 3.25M10 5.75C10 7.683 8.433 9.25 6.5 9.25C4.567 9.25 3 7.683 3 5.75C3 3.817 4.567 2.25 6.5 2.25C8.433 2.25 10 3.817 10 5.75ZM21 16.75C21 18.683 19.433 20.25 17.5 20.25C15.567 20.25 14 18.683 14 16.75C14 14.817 15.567 13.25 17.5 13.25C19.433 13.25 21 14.817 21 16.75Z"
                            stroke="#4F46E5" stroke-width="1.6" stroke-linecap="round" />
                        </svg>
                      </button>
                      <p class="font-medium text-sm text-black">
                        Norezidentlar uchun narx
                        255 000 so'm
                      </p>
                    </div>
                  </div>

                  <a href="javascript:;" class="flex items-center rounded-full py-3 px-5 min-[550px]:w-max w-full justify-center shadow-sm shadow-transparent bg-indigo-600 transition-all duration-500 hover:shadow-indigo-400 hover:bg-indigo-700">
                    <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clip-path="url(#clip0_14119_17549)">
                        <path d="M10 0.5L20 20.5L10 17.1263L0 20.4794L10 0.5Z" fill="white" />
                      </g>
                      <defs>
                        <clipPath id="clip0_14119_17549">
                          <rect width="20" height="20" fill="white" transform="translate(0 0.5)" />
                        </clipPath>
                      </defs>
                    </svg>
                    <a className='btn btn-primary text-white mt-6 w-full' onClick={() => document.getElementById('my_modal_2').showModal()}>Buyurtma berish</a>
                  </a>
                </div>
                <div class="col-span-12 lg:col-span-5 lg:max-w-md max-lg:mx-auto ">
                  <img src="https://pagedone.io/asset/uploads/1701234779.png" alt="Warehouse image" class="w-full h-full max-lg:rounded-3xl" />
                </div>
              </div>
            </div>
          </section>



        </Slider>
      </div>

      




      {/* <Agent /> */}
      <section class="text-gray-600 body-font">
        <div class=" w-4/5 py-24 mx-auto">
          <div class="flex flex-wrap -mx-4 -my-8">
            <div class="py-8 px-4 lg:w-1/3">
              <div class="h-full flex items-start">
                <div class="w-12 flex-shrink-0 flex flex-col text-center leading-none border p-1">
                  <span class="text-gray-500 pb-2 mb-2 border-b-2 border-gray-200">Xona</span>
                  <span class="font-medium text-lg text-gray-800 title-font leading-none">1</span>
                </div>
                <div class="flex-grow pl-6">
                  <h2 class="tracking-widest text-xs title-font font-medium text-indigo-500 mb-1">Turkum</h2>
                  <h1 class="title-font text-xl font-medium text-gray-900 mb-3">Standart ikki kishilik</h1>
                  <p class="leading-relaxed mb-5">Hotel Plaza eng yaxshi tanlov, tanlovda adashmang</p>
                  <div className='grid grid-cols-2 gap-3'>
                    <button className='border-b border=primary border-4'>Televizor 1-dona</button>
                    <button className='border-b border=primary border-4'>Roison xoladelnik 1-dona</button>
                    <button className='border-b border=primary border-4'>Kravat 1-kishilik 2-dona</button>
                    <button className='border-b border=primary border-4'>Telefon 1-dona</button>
                    <button className='border-b border=primary border-4'>Stul 1-dona</button>
                    <button className='border-b border=primary border-4'>Stol 1-dona</button>
                    <button className='border-b border=primary border-4'>Tumba 2-dona</button>
                    <button className='border-b border=primary border-4'>Tefal 1-dona</button>
                    <button className='border-b border=primary border-4'>Piyola 1-dona</button>
                    <button className='border-b border=primary border-4'>Pastel belyo 1-kishilik 2-dona</button>
                    <button className='border-b border=primary border-4'>Yostiq 2-dona</button>
                    <button className='border-b border=primary border-4'>Pakrival oq 2-dona</button>
                    <button className='border-b border=primary border-4'>Shkaf 1-dona</button>
                    <button className='border-b border=primary border-4'>Sochiq 2-kamplekt</button>
                  </div>
                </div>
              </div>
            </div>
            <div class="py-8 px-4 lg:w-1/3">
              <div class="h-full flex items-start">
                <div class="w-12 flex-shrink-0 flex flex-col text-center leading-none border p-1">
                  <span class="text-gray-500 pb-2 mb-2 border-b-2 border-gray-200">Xona</span>
                  <span class="font-medium text-lg text-gray-800 title-font leading-none">1</span>
                </div>
                <div class="flex-grow pl-6">
                  <h2 class="tracking-widest text-xs title-font font-medium text-indigo-500 mb-1">Turkum</h2>
                  <h1 class="title-font text-xl font-medium text-gray-900 mb-3">Standart bir kishilik</h1>
                  <p class="leading-relaxed mb-5">Hotel Plaza eng yaxshi tanlov, tanlovda adashmang</p>
                  <div className='grid grid-cols-2 gap-3'>
                    <button className='border-b border=primary border-4'>Televizor 1-dona</button>
                    <button className='border-b border=primary border-4'>Roison xoladelnik 1-dona</button>
                    <button className='border-b border=primary border-4'>Kravat 1-kishilik 2-dona</button>
                    <button className='border-b border=primary border-4'>Telefon 1-dona</button>
                    <button className='border-b border=primary border-4'>Stul 1-dona</button>
                    <button className='border-b border=primary border-4'>Stol 1-dona</button>
                    <button className='border-b border=primary border-4'>Tumba 2-dona</button>
                    <button className='border-b border=primary border-4'>Tefal 1-dona</button>
                    <button className='border-b border=primary border-4'>Piyola 1-dona</button>
                    <button className='border-b border=primary border-4'>Pastel belyo 1-kishilik 2-dona</button>
                    <button className='border-b border=primary border-4'>Yostiq 2-dona</button>
                    <button className='border-b border=primary border-4'>Pakrival oq 2-dona</button>
                    <button className='border-b border=primary border-4'>Shkaf 1-dona</button>
                    <button className='border-b border=primary border-4'>Sochiq 2-kamplekt</button>
                  </div>
                </div>
              </div>
            </div>
            <div class="py-8 px-4 lg:w-1/3">
              <div class="h-full flex items-start">
                <div class="w-12 flex-shrink-0 flex flex-col text-center leading-none border p-1">
                  <span class="text-gray-500 pb-2 mb-2 border-b-2 border-gray-200">Xona</span>
                  <span class="font-medium text-lg text-gray-800 title-font leading-none">2</span>
                </div>
                <div class="flex-grow pl-6">
                  <h2 class="tracking-widest text-xs title-font font-medium text-indigo-500 mb-1">Turkum</h2>
                  <h1 class="title-font text-xl font-medium text-gray-900 mb-3">Lyuks bir kishilik - ikki xonali</h1>
                  <p class="leading-relaxed mb-5">Hotel Plaza eng yaxshi tanlov, tanlovda adashmang</p>
                  <div className='grid grid-cols-2 gap-3'>
                    <button className='border-b border=primary border-4'>Televizor 1-dona</button>
                    <button className='border-b border=primary border-4'>Roison xoladelnik 1-dona</button>
                    <button className='border-b border=primary border-4'>Kravat 1-kishilik 2-dona</button>
                    <button className='border-b border=primary border-4'>Telefon 1-dona</button>
                    <button className='border-b border=primary border-4'>Stul 1-dona</button>
                    <button className='border-b border=primary border-4'>Stol 1-dona</button>
                    <button className='border-b border=primary border-4'>Tumba 2-dona</button>
                    <button className='border-b border=primary border-4'>Tefal 1-dona</button>
                    <button className='border-b border=primary border-4'>Piyola 1-dona</button>
                    <button className='border-b border=primary border-4'>Pastel belyo 1-kishilik 2-dona</button>
                    <button className='border-b border=primary border-4'>Yostiq 2-dona</button>
                    <button className='border-b border=primary border-4'>Pakrival oq 2-dona</button>
                    <button className='border-b border=primary border-4'>Shkaf 1-dona</button>
                    <button className='border-b border=primary border-4'>Sochiq 2-kamplekt</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>






      <Footer />
    </>
  )
}

export default HotelPlaza