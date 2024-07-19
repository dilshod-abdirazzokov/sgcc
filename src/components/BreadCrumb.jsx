import React from 'react'

// icon
import { IoHomeOutline } from "react-icons/io5";

// router
import { NavLink,Link } from 'react-router-dom';

const BreadCrumb = () => {
  return (
    <section id='breadcrumb' className='w-full bg-whiter px-24 py-[4rem]'>
        <div className="text-sm breadcrumbs">
        <ul className='text-[1.1rem]'>
          <li><a><IoHomeOutline /></a></li>
          <li><Link to="/">Asosiy sahifa</Link></li> 
          <li><a>Majmua faoliyati</a></li> 
        </ul>
        </div>
    </section>
  )
}

export default BreadCrumb