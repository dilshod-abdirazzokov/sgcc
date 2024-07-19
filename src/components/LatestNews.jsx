import React from "react";
import Slider from "react-slick";
import PageTitle from './title/Title'

import { IoEyeOutline } from "react-icons/io5";

import img1 from "../assets/images/yangiliklar/img1.png"
import img2 from "../assets/images/yangiliklar/img2.png"
import img3 from "../assets/images/yangiliklar/img3.png"

const Future = () => {
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
        <section className="py-2 relative">
            <div className="w-full max-w-7xl px-6 lg:px-8 mx-auto">
                <PageTitle />


                <div className="slider-container my-[2rem]" style={{ zIndex: '1' }} >
                    <Slider {...settings}>
                        {/* slider */}
                        <section class="py-12  mx-auto">
                            <div class="w-full max-w-7xl mx-auto">
                                <div class="grid grid-cols-12 gap-y-11">
                                    <div
                                        class="col-span-12 lg:col-span-7 py-12 px-4 lg:px-11 bg-gray-50 max-lg:rounded-2xl lg:rounded-l-2xl flex flex-col justify-between max-lg:max-w-lg max-lg:mx-auto">
                                        <h2 class="font-manrope font-bold text-2xl sm:text-4xl leading-10 text-black mb-9">Majmuada "28-aprel - Butunjahon mehnatni muhofaza qilish kuni" tadbiri bo'lib o'tdi</h2>
                                        <p className="text-gray-600">Xalqaro mehnat tashkilotining tashabbusi bilan 2003-yildan boshlab 28-aprel — “Butunjahon mehnatni muhofaza qilish kuni” deb e’lon qilingan.</p>
                                        <br />

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
                                            <a className='btn btn-gray text-darkBlue mt-6 w-full' onClick={() => document.getElementById('my_modal_2').showModal()}>Batafsil ma'lumot...</a>
                                        </a>
                                    </div>
                                    <div class="col-span-12 lg:col-span-5 lg:max-w-md max-lg:mx-auto ">
                                        <img src={img1} alt="Warehouse image" class="w-full h-full max-lg:rounded-3xl object-cover" />
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section class="py-12  mx-auto">
                            <div class="w-full max-w-7xl mx-auto">
                                <div class="grid grid-cols-12 gap-y-11">
                                    <div
                                        class="col-span-12 lg:col-span-7 py-12 px-4 lg:px-11 bg-gray-50 max-lg:rounded-2xl lg:rounded-l-2xl flex flex-col justify-between max-lg:max-w-lg max-lg:mx-auto">
                                        <h2 class="font-manrope font-bold text-2xl sm:text-4xl leading-10 text-black mb-9">Majmuada "28-aprel - Butunjahon mehnatni muhofaza qilish kuni" tadbiri bo'lib o'tdi</h2>
                                        <p className="text-gray-600">Xalqaro mehnat tashkilotining tashabbusi bilan 2003-yildan boshlab 28-aprel — “Butunjahon mehnatni muhofaza qilish kuni” deb e’lon qilingan.</p>
                                        <br />

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
                                            <a className='btn btn-gray text-darkBlue mt-6 w-full' onClick={() => document.getElementById('my_modal_2').showModal()}>Batafsil ma'lumot...</a>
                                        </a>
                                    </div>
                                    <div class="col-span-12 lg:col-span-5 lg:max-w-md max-lg:mx-auto ">
                                        <img src={img1} alt="Warehouse image" class="w-full h-full max-lg:rounded-3xl object-cover" />
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
                                        <h2 class="font-manrope font-bold text-2xl sm:text-4xl leading-10 text-black mb-9">Etilen ishlab chiqarish sexida ta’mirlash ishlari olib borildi</h2>
                                        <p className="text-gray-600">"Shurtan gaz kimyo majmuasi" MCHJda Etilen ishlab chiqarish sexining Gazlarni ajratish qurilmasi EA-1821 C - tozalangan tabiiy gazni sovitish uchun mo‘ljallangan issiqlik almashinuv apparatida ta’mirlash ishlari olib borildi.</p>
                                        <br />

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
                                            <a className='btn btn-gray text-darkBlue mt-6 w-full' onClick={() => document.getElementById('my_modal_2').showModal()}>Batafsil ma'lumot...</a>
                                        </a>
                                    </div>
                                    <div class="col-span-12 lg:col-span-5 lg:max-w-md max-lg:mx-auto ">
                                        <img src={img2} alt="Warehouse image" class="w-full h-full max-lg:rounded-3xl object-cover" />
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
                                        <h2 class="font-manrope font-bold text-2xl sm:text-4xl leading-10 text-black mb-9">Etilen ishlab chiqarish sexida ta’mirlash ishlari olib borildi</h2>
                                        <p className="text-gray-600">"Shurtan gaz kimyo majmuasi" MCHJda Etilen ishlab chiqarish sexining Gazlarni ajratish qurilmasi EA-1821 C - tozalangan tabiiy gazni sovitish uchun mo‘ljallangan issiqlik almashinuv apparatida ta’mirlash ishlari olib borildi.</p>
                                        <br />

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
                                            <a className='btn btn-gray text-darkBlue mt-6 w-full' onClick={() => document.getElementById('my_modal_2').showModal()}>Batafsil ma'lumot...</a>
                                        </a>
                                    </div>
                                    <div class="col-span-12 lg:col-span-5 lg:max-w-md max-lg:mx-auto ">
                                        <img src={img2} alt="Warehouse image" class="w-full h-full max-lg:rounded-3xl object-cover" />
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
                                        <h2 class="font-manrope font-bold text-2xl sm:text-4xl leading-10 text-black mb-9">“Olam nurga to‘lsin sen bilan, Navro‘z!”</h2>
                                        <p className="text-gray-600">"Shurtan gaz kimyo majmuasi" MCHJda “Olam nurga to‘lsin sen bilan, Navro‘z!” deb nomlangan Navro‘z sayli bo‘lib o‘tdi.</p>
                                        <br />

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
                                            <a className='btn btn-gray text-darkBlue mt-6 w-full' onClick={() => document.getElementById('my_modal_2').showModal()}>Batafsil ma'lumot...</a>
                                        </a>
                                    </div>
                                    <div class="col-span-12 lg:col-span-5 lg:max-w-md max-lg:mx-auto ">
                                        <img src={img3} alt="Warehouse image" class="w-full h-full max-lg:rounded-3xl object-cover" />
                                    </div>
                                </div>
                            </div>
                        </section>
                    </Slider>
                </div>



            </div>
        </section>
    )
}

export default Future