import React from 'react'
import { MdPhoneInTalk } from "react-icons/md";
import { MdPerson } from "react-icons/md";
import { RiHotelBedFill } from "react-icons/ri";
import { PiStarThin } from "react-icons/pi";
import { FaStar } from "react-icons/fa6";


import about1 from "../../assets/images/zavod2.png"
import about2 from "../../assets/images/zavod3.png"
import logo from "../../assets/images/logo.png"
import building from "../../assets/hotel/bl.jpg"
import b2 from "../../assets/hotel/b2.jpg"
import room1 from "../../assets/hotel/hotel.png"

const HotelBooking = () => {
    return (
        <>
            {/* head */}
            <section className='py-3 px-[16%] bg-[#091242]'>
                <div className='flex justify-between items-center'>
                    <h2 className='text-gray-100'>Qashqadaryo viloyati, G‘uzor tumani,Shurtan Hotel plaza</h2>
                    <div className='text-gray-100 flex gap-x-6'>
                        <span><MdPhoneInTalk className='text-2xl' /></span>
                        <p>+99878 120-88-24</p>
                        <p>+99878 120-88-22</p>
                    </div>
                </div>
            </section>
            {/* header */}
            <header class="text-gray-600 body-font border-t border-b border-gray-200">
                <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <div className=' flex items-center space-x-4'>
                        <img className='h-[5rem] my-2' src={logo} alt="newlogo" />
                        {/* <img className='h-[5rem] shgkm'  src={shgkm} alt="newlogo" /> */}
                        <h2 className='text-[1.2rem] font-bold text-[#091242] mt-5 hidden md:block ddd'><span className='w'>“Shurtan gaz kimyo majmuasi”</span> <br />  <span className='text-[1rem] uppercase q text-[#091242] font-bold'>Hotel Shurtan Plaza</span></h2>
                    </div>
                    <nav class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center mt-5">
                        <a class="mr-5 hover:text-gray-900">Asosiy sahifa</a>
                        <a class="mr-5 hover:text-gray-900">Biz haqimizda</a>
                        <a class="mr-5 hover:text-gray-900">Xonalar katalogi</a>
                        <a class="mr-5 hover:text-gray-900">Xizmatlar</a>
                        <a class="mr-5 hover:text-gray-900">Bog'lanish</a>
                    </nav>
                    <div className='grid grid-cols-3 gap-x-3 mt-5'>
                        <button class="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">O'z</button>
                        <button class="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Ru</button>
                        <button class="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">En</button>
                    </div>
                </div>
            </header>

            {/* hero-section */}

            <div className='max-w-8xl mx-auto'>
              <img src={b2} alt="main-section" />
            </div>
            <section className='grid grid-cols-4 gap-x-5 items-center max-w-6xl bg-white mx-auto shadow-lg p-8 relative top-[-7rem] rounded-[30px]'>
                <div >
                    <label for="country" class="block text-sm font-medium leading-6 text-gray-900">Xonalar soni</label>
                    <div class="mt-2">
                        <select id="country" name="country" autocomplete="country-name" class="block w-full rounded-md border-0 py-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                            <option>United States</option>
                            <option>Canada</option>
                            <option>Mexico</option>
                        </select>
                    </div>
                </div>

                <div>
                    <label for="first-name" class="block text-sm font-medium leading-6 text-gray-900">Ismingizni kiriting</label>
                    <div class="mt-2">
                        <input type="text" name="first-name" id="first-name" autocomplete="given-name" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                    </div>
                </div>
                <div>
                    <label for="first-name" class="block text-sm font-medium leading-6 text-gray-900">Familyangizni kiriting</label>
                    <div class="mt-2">
                        <input type="text" name="first-name" id="first-name" autocomplete="given-name" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                    </div>
                </div>
                <div className='mt-8'>
                    <button type="submit" class="w-full rounded-md bg-[#091242]
                 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500">Buyurtma qilish</button>
                </div>
            </section>


            {/* about-us */}
            <section className="bg-[#efefef] contrast-100 py-24 relative my-24">
                <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
                    <div className="w-full justify-start items-center gap-12 grid lg:grid-cols-2 grid-cols-1">
                        <div className="w-full justify-center items-start gap-6 grid sm:grid-cols-2 grid-cols-1 lg:order-first order-last">
                            <div className="pt-24 lg:justify-center sm:justify-end justify-start items-start gap-2.5 flex">
                                <img className="" src={about1} alt="about Us image" />
                            </div>
                            <img className="sm:ml-0 ml-auto" src={about2} alt="about Us image" />
                        </div>
                        <div className="w-full flex-col justify-center lg:items-start items-center gap-10 inline-flex latest-about">
                            <div className="w-full flex-col justify-center items-start gap-8 flex">
                                <div className="w-full flex-col justify-start lg:items-start items-center gap-3 flex">
                                    <h2 className="text-[60px] font-bold font-manrope leading-normal lg:text-start text-center">Bizning jamoamiz</h2>
                                    <p className='text-gray-900 font-bold'>“Shurtan gaz kimyo majmuasi” MCHJ da mehnat qilayotgan  ishchi xodimlar soni toʻgʻrisida batafsil ma'lumot</p>
                                </div>
                                <div className="w-full lg:justify-start justify-center items-center sm:gap-10 gap-5 inline-flex">
                                    <div className="flex-col justify-start items-start inline-flex">
                                        <h3 className="text-4xl font-bold font-manrope leading-normal">3641</h3>
                                        <h6 className="text-gray-500 text-base font-normal leading-relaxed">Jamoadagi barcha</h6>
                                    </div>
                                    <div className="flex-col justify-start items-start inline-flex">
                                        <h4 className="text-4xl font-bold font-manrope leading-normal">244</h4>
                                        <h6 className="text-gray-500 text-base font-normal leading-relaxed">Rahbar xodimlar</h6>
                                    </div>
                                    <div className="flex-col justify-start items-start inline-flex">
                                        <h4 className="text-4xl font-bold font-manrope leading-normal">249</h4>
                                        <h6 className="text-gray-500 text-base font-normal leading-relaxed">Texnik xodimlar</h6>
                                    </div>
                                    <div className="flex-col justify-start items-start inline-flex">
                                        <h4 className="text-4xl font-bold font-manrope leading-normal">643</h4>
                                        <h6 className="text-gray-500 text-base font-normal leading-relaxed">Xotin-qizlar</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* room catalog */}
            <section>
                <div className='max-w-6xl mx-auto'>
                    <h2 className='text-[60px] text-center'>Xonalar katalogi</h2>
                    <div className='grid grid-cols-3 gap-x-8'>
                        <div className='card shadow-lg'>
                            <img src={room1} alt="room-1" />
                            <div className='flex justify-between items-center px-5 pt-4'>
                                <div className='grid grid-cols-5 gap-x-1'>
                                    <FaStar className='text-yellow text-2xl' />
                                    <FaStar className='text-yellow text-2xl' />
                                    <FaStar className='text-yellow text-2xl' />
                                    <FaStar className='text-yellow text-2xl' />
                                    <FaStar className='text-yellow text-2xl' />
                                </div>
                                <h2>5.0</h2>
                            </div>
                            <span className='text-[25px] px-5 py-3'><RiHotelBedFill className='inline text-primary text-2xl' /> Standart ikki kishilik xona</span>
                            <div className='px-5 flex justify-between items-center'>
                                <h2>225 000 so'm / kuniga</h2>
                                <h2 className='px-5 py-3'><MdPerson className='inline text-primary text-2xl' /> 1</h2>
                            </div>
                        </div>
                        <div className='card shadow-lg'>
                            <img src={room1} alt="room-1" />
                            <div className='flex justify-between items-center px-5 pt-4'>
                                <div className='grid grid-cols-5 gap-x-1'>
                                    <FaStar className='text-yellow text-2xl' />
                                    <FaStar className='text-yellow text-2xl' />
                                    <FaStar className='text-yellow text-2xl' />
                                    <FaStar className='text-yellow text-2xl' />
                                    <FaStar className='text-yellow text-2xl' />
                                </div>
                                <h2>5.0</h2>
                            </div>
                            <span className='text-[25px] px-5 py-3'><RiHotelBedFill className='inline text-primary text-2xl' /> Standart ikki kishilik xona</span>
                            <div className='px-5 flex justify-between items-center'>
                                <h2>225 000 so'm / kuniga</h2>
                                <h2 className='px-5 py-3'><MdPerson className='inline text-primary text-2xl' /> 1</h2>
                            </div>
                        </div>
                        <div className='card shadow-lg'>
                            <img src={room1} alt="room-1" />
                            <div className='flex justify-between items-center px-5 pt-4'>
                                <div className='grid grid-cols-5 gap-x-1'>
                                    <FaStar className='text-yellow text-2xl' />
                                    <FaStar className='text-yellow text-2xl' />
                                    <FaStar className='text-yellow text-2xl' />
                                    <FaStar className='text-yellow text-2xl' />
                                    <FaStar className='text-yellow text-2xl' />
                                </div>
                                <h2>5.0</h2>
                            </div>
                            <span className='text-[25px] px-5 py-3'><RiHotelBedFill className='inline text-primary text-2xl' /> Standart ikki kishilik xona</span>
                            <div className='px-5 flex justify-between items-center'>
                                <h2>225 000 so'm / kuniga</h2>
                                <h2 className='px-5 py-3'><MdPerson className='inline text-primary text-2xl' /> 1</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* services */}
            <section className='max-w-6xl mx-auto my-[12rem]'>
                <div className='flex justify-between items-center'>
                    <div className='w-[40%]'>
                        <h2 className='text-[35px]'>Why you should book hotel form us</h2>
                    </div>
                    <div className='w-[40%]'>
                        <p className='text-gray-500'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis, modi. Eaque distinctio quibusdam doloribus mollitia. Sequi deserunt sapiente</p>
                    </div>
                </div>
                <div className='grid grid-cols-3 gap-x-8'>
                    <div className='card shadow-lg p-8'>
                        <span className='bg-primary text-white p-2 w-[15%]'>
                          <MdPerson className='text-3xl' />
                        </span>
                        <h3 className='text-[20px] font-bold my-2'>Best guide</h3>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis, modi. Eaque distinctio</p>
                    </div>
                    <div className='card shadow-lg p-8'>
                        <span className='bg-primary text-white p-2 w-[15%]'>
                          <MdPerson className='text-3xl' />
                        </span>
                        <h3 className='text-[20px] font-bold my-2'>Best guide</h3>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis, modi. Eaque distinctio</p>
                    </div>
                    <div className='card shadow-lg p-8'>
                        <span className='bg-primary text-white p-2 w-[15%]'>
                          <MdPerson className='text-3xl' />
                        </span>
                        <h3 className='text-[20px] font-bold my-2'>Best guide</h3>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis, modi. Eaque distinctio</p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default HotelBooking