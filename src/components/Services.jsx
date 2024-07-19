import React from 'react'

// img
import services from "../assets/images/zavod.png";
import logo from "../assets/logo.png"

// react icon
import { FaArrowsTurnRight } from "react-icons/fa6";
import { CiSettings } from "react-icons/ci";
import { FaHandHoldingHeart } from "react-icons/fa6";
import { GiExplodingPlanet } from "react-icons/gi";
import { MdElderlyWoman } from "react-icons/md";
import { GiElderberry } from "react-icons/gi";

import { RxVideo } from "react-icons/rx";

import CountUp from 'react-countup'


const Services = () => {
  return (
    <div className='bg-[#265073]' id='service'>
        <div className='max-w-screen-3xl container mx-auto md:px-2 px-4 flex flex-col md:flex-row pt-12 pb-[7rem] space-x-12 '>
              <section class="text-gray-600 body-font">
                <div class="container   mx-auto flex flex-wrap">
                  <div class="flex flex-wrap -mx-4 mt-auto mb-auto lg:w-1/2 sm:w-2/3 content-start sm:pr-10">
                    <div class="w-full sm:p-4 px-4 mb-6">
                    <br />
                      <h1 class="title-font font-medium text-2xl mb-2 text-white">“SHURTAN GAZ KIMYO MAJMUASI”
MAS'ULIYATI CHEKLANGAN JAMIYATI</h1>
                      {/* <div class="leading-relaxed">Pour-over craft beer pug drinking vinegar live-edge gastropub, keytar neutra sustainable fingerstache kickstarter.</div> */}
                    </div>
                    <div class="p-4 sm:w-1/2 lg:w-full w-full">
                      <h2 class="title-font  text-4xl font-bold text-white">3665</h2>
                      <p class="leading-relaxed text-xl text-white">Jamodagi barcha xodimlar soni</p>
                    </div>
                    <div class="p-4 sm:w-1/2 lg:w-1/2 w-1/2">
                      <h2 class="title-font font-bold text-4xl text-white">1881</h2>
                      <p class="leading-relaxed text-xl text-white">Ishlab chiqarish xodimlari</p>
                    </div>
                    <div class="p-4 sm:w-1/2 lg:w-1/2 w-1/2">
                      <h2 class="title-font font-bold text-4xl text-white">244</h2>
                      <p class="leading-relaxed text-xl text-white">Rahbar xodimlar</p>
                    </div>
                    <div class="p-4 sm:w-1/2 lg:w-1/2 w-1/2">
                      <h2 class="title-font font-bold text-4xl text-white">643</h2>
                      <p class="leading-relaxed text-xl text-white">Xotin-qizlar</p>
                    </div>
                    <div class="p-4 sm:w-1/2 lg:w-1/2 w-1/2">
                      <h2 class="title-font font-bold text-4xl text-white">673</h2>
                      <p class="leading-relaxed text-xl text-white">Mutaxassislar</p>
                    </div>
                    <div class="p-4 sm:w-1/2 lg:w-1/2 w-1/2">
                      <h2 class="title-font font-bold text-4xl text-white">250</h2>
                      <p class="leading-relaxed text-xl text-white">Texniklar</p>
                    </div>
                    <div class="p-4 sm:w-1/2 lg:w-1/2 w-1/2">
                      <h2 class="title-font font-bold text-4xl text-white">611</h2>
                      <p class="leading-relaxed text-xl text-white">Xizmatchilar</p>
                    </div>
                  </div>
                  <div class="lg:w-1/2 sm:w-1/3 w-full rounded-lg overflow-hidden mt-6 sm:mt-0">
                    <img class="object-cover object-center w-full h-full" src={services} alt="stats" />
                        {/* Open the modal using document.getElementById('ID').showModal() method */}
                        <button className="absolute bg-gray-400 w-1/3 py-1 text-white flex items-center px-[5rem] space-x-3" onClick={()=>document.getElementById('my_modal_2').showModal()}><RxVideo /> <span>Batafsil video</span></button>
                        <dialog id="my_modal_2" className="modal">
                        <div className="modal-box">
                        <h3 className="font-bold text-lg">Hello!</h3>
                        <p className="py-4">Press ESC key or click outside to close</p>
                        </div>
                        <form method="dialog" className="modal-backdrop">
                        <button>close</button>
                        </form>
                        </dialog>
                  </div>
                </div>
              </section>
          </div> 
    </div>
  )
}

export default Services