import React from 'react'

// icon
import { PiTelegramLogo } from "react-icons/pi"
import { LuInstagram } from "react-icons/lu"
import { CiFacebook } from "react-icons/ci"

// img resource
import logo from "../assets/images/logo.png";

const Footer = () => {
  return (
  <div className='w-full bg-neutral py-4'>
      <footer className="footer py-[7rem] text-[1rem] text-neutral-content w-[80%] md:mx-[17rem] mx-auto">
        <nav>
          <img src={logo} className='w-32' alt="logo-footer" />
          <div className='socials flex mx-auto space-x-5 mt-5'>
                <PiTelegramLogo className='text-white text-[1.3rem]' />
                <LuInstagram className='text-white text-[1.3rem]' />
                <CiFacebook className='text-white text-[1.3rem]' />
          </div>
        </nav> 
          <nav>
            <a className="link link-hover">Bosh sahifa</a>
            <a className="link link-hover">Mahsulotlar</a>
            <a className="link link-hover">Rahbariyat</a>
            <a className="link link-hover">Ochiqlik indeksi (Ochiq ma’lumotlar)</a>
            <a className="link link-hover">Bog‘lanish</a>
          </nav> 
          <nav>
            <h6 className="footer-title">Devonxona</h6> 
            <a className="link link-hover mt-[-1rem]">+998 75 552 41 58</a>
            <br />
            <h6 className="footer-title">Ishonch telefoni</h6> 
            <a className="link link-hover mt-[-1rem]">+998 75 552 42 54</a>
            <br />
            <h6 className="footer-title">Sotish va marketing</h6> 
            <a className="link link-hover mt-[-1rem]">+998 75 552 41 88</a>
          </nav> 
          <nav>
            <h6 className="footer-title">Saytdagi maʼlumotlardan foydalanish <br /> vaqtida manba sifatida sgcc.uz saytini <br /> koʻrsatish shart. <br />
            © 1997-2024</h6> 
            <p>Rasmiy veb sayt <br /> Shurtan Gaz Kimyo Majmuasi tomonidan ishlab chiqilgan.</p>
          </nav>
      </footer>
    </div>
  )
}

export default Footer