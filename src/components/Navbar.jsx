import React, {useState} from 'react'
import HotelBooking from '../pages/booking/HotelBooking';

// router
import { NavLink } from 'react-router-dom';

// react router dom
import {Routes,Route,Link} from "react-router-dom";

// react icons
import CurrentTime from './CurrentTime';
import CurrentDate from './CurrentDate';
import calendar from "../assets/calendar.png"




const Navbar = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
      setDropdownOpen(!dropdownOpen);
    };


    const navItems = (
        <>
            <li>
                <NavLink to='/'>Asosiy sahifa</NavLink>
            </li>
            <li className='dropdown '>   
                <details>
                <summary className='text-white'>Majmua</summary>
                <ul  className="dropdown-content p-2 md:w-[12rem] ">
                <li>
                    <NavLink to='/aboutPage'>Majmua faoliyati</NavLink>
                </li>
                <li>
                    <NavLink to='/TimeLine'>Majmua tarixi</NavLink>
                </li>
                <li><NavLink to='/AimAndFunctions'>Maqsad va vazifalari</NavLink></li>
                <li><NavLink to='/Staff'>Rahbariyat</NavLink></li>
                <li><a>Tarkibiy tuzilma</a></li>
                <li><a>Ta'sis korxonalari</a></li>
                <li><a>Majmua tarixi</a></li>
                </ul>
                </details>
            </li>
            <li className='text-white'><NavLink to='/OpenData'>Ochiq ma'lumotlar </NavLink></li>
            <li className='dropdown'>
                <details>
                <summary className='text-white'>Mahsulotlar</summary>
                <ul className="dropdown-content p-2 w-[12rem]">
                <li><NavLink to='/MainProduct'>Ishlab chiqarilayotgan mahsulotlar</NavLink></li>
                <li><a>Ehtiyoji yo'q likvid va nolikvid tovarlarni sotish</a></li>
                </ul>
                </details>
            </li>
            <li className='dropdown'>
                <details>
                <summary className='text-white'>Xaridlar</summary>
                <ul className="dropdown-content p-2 w-[12rem]">
                <li><NavLink to='/MarketingSection'>Savdo bo'limi</NavLink></li>
                <li><a href='https://sgcc.uz/uz/purchases/commercial-requests' target='_blank'>Tijorat so'rovlari</a></li>
                <li><a href='https://sgcc.uz/uz/purchases/contests' target='_blank'>Tanlovlar va tenderlar</a></li>
                </ul>
                </details>
            </li>
            <li className='dropdown'>
                <details>
                <summary className='text-white'>Media</summary>
                <ul className="dropdown-content p-2 md:w-[12rem]">
                <li><Link to='/PhotoGallery'>Majmua fotosuratlari</Link></li>
                <li><a>Majmua videomateriallari</a></li>
                </ul>
                </details>
            </li>
            <li className='dropdown'>
                <details>
                <summary className='text-white'>Qayta aloqa</summary>
                <ul  className="dropdown-content p-2 absolute z-50 md:w-[12rem]">
                <li><NavLink to='/SendResume'>Rezyume yuborish</NavLink></li>
                <li><NavLink to='/AddressAndPhone'>Manzil va telefonlar</NavLink></li>
                <li><Link to="/JobPage">Murojaat qilish</Link></li>
                <li><NavLink to='/FAQ'>FAQ</NavLink></li>
                </ul>
                </details>
            </li>
            <li className='text-white'>
                <NavLink to='/HotelBooking'>Hotel Shurtan Plaza</NavLink>
            </li> 
        </>
    )
  return (
      <>
        <section className="w-full stick-navbar hidden md:block font-bold" style={{zIndex:"999"}}>
          <div className="navbar bg-[#09124240]  px-12 shadow-lg ">
            <div className="navbar-start"></div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-[15px]">
                {navItems}                       
                </ul>
            </div>
            <div className="navbar-end space-x-5 mr-[6rem]">
               <div><img className='h-[3rem]' src={calendar} alt="live time" /></div>
               <div className='flex flex-col items-center'>
                <CurrentTime />
                <CurrentDate />
               </div>
            </div>   
           </div>
        </section>
      </>
  )
}

export default Navbar