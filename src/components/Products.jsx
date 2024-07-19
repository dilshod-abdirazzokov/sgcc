import React from 'react'

// img
import poli from "../assets/mahsulotlar/politelin.png";
import gaz from "../assets/mahsulotlar/gaz.png";
import oltingugurt from '../assets/mahsulotlar/oltingugurt.png';
import kondensat from "../assets/mahsulotlar/kondensat.png";
import tovargaz from "../assets/mahsulotlar/tovargaz.png";

// react icon
import { FaArrowsTurnRight } from "react-icons/fa6";

import cartoonImg from "../assets/images/news3.jpg";
import logo from "../assets/images/logo.png"

const Products = () => {
  const products = [
    {
      "id": 1,
      "title":"Polietilen",
      "subtitle":"Quick and Reliable Service",
      "counter":4512,
      "desc":"Ushbu texnologiyaning asosiy afzalligi bu — quvurli va avtoklav turdagi reaktorlarning ketma-ket rejimidan foydalangan holda polietilenning fizik-kimyoviy va reologik ko‘rsatkichlarni o‘zgartirish imkoniyati hisoblanadi.",
      "productImg":`${poli}`,
      "btnText":"Batafsil ma'lumot"
    },
    {
      "id": 2,
      "title":"Suyultirilgan gaz",
      "subtitle":"Quick and Reliable Service",
      "counter":4512,
      "desc":"Suyultirilgan gaz, tabiiy gazni chuqur qayta ishlash natijasida asosiy tarkibiy qismi propan-butan aralashmasidan iborat boʻlgan mahsulot boʻlib hisoblanadi.",
      "productImg":`${gaz}`,
      "btnText":"Batafsil ma'lumot"
    },
    {
      "id": 3,
      "title":"Oltingugurt",
      "subtitle":"Quick and Reliable Service",
      "counter":3512,
      "desc":"Oltingugurt tabiiy gaz tarkibidan ajratib olingan vodorod sulfidni (H2S) toʻgʻridan-toʻgʻri oksidlash jarayoni yordamida ishlab chiqariladi. Hosil boʻlgan oltingugurt granulalar koʻrinishida 25kg dan polietilen qoplarga qadoqlanadi.",
      "productImg":`${oltingugurt}`,
      "btnText":"Batafsil ma'lumot"
    },
    {
      "id": 4,
      "title":"Kondensat",
      "subtitle":"Gaz kondensati, tabiiy gazni chuqur qayta ishlash natijasida ogʻir uglevodorodlarni ajratib olish natijasida hosil boʻlgan mahsulot boʻlib hisoblanadi. Uning oʻrtacha zichligi 0,715 - 0,735 g/sm3 ni tashkil qiladi.",
      "counter":4512,
      "desc":"Gaz kondensati, tabiiy gazni chuqur qayta ishlash natijasida ogʻir uglevodorodlarni ajratib olish natijasida hosil boʻlgan mahsulot boʻlib hisoblanadi. Uning oʻrtacha zichligi 0,715 - 0,735 g/sm3 ni tashkil qiladi.",
      "productImg":`${kondensat}`,
      "btnText":"Batafsil ma'lumot"
    },
    {
      "id": 5,
      "title":"Tovar gazi",
      "subtitle":"Quick and Reliable Service",
      "counter":4512,
      "desc":"Tovar gazi, tabiiy gazni chuqur qayta ishlash natijasida asosiy tarkibiy qismi metandan iborat boʻlgan gaz boʻlib hisoblanadi. Tovar gazning sifati Oʻz DSt 948:2016 standarti shartlari asosida nazorat qilib boriladi. Tovar gazi “Oʻztransgaz” AJning magistral gaz quvurlariga yetkazib beriladi.",
      "productImg":`${tovargaz}`,
      "btnText":"Batafsil ma'lumot"
    },
  ]

  return (
    <div >
        <section id='products' className='max-w-screen-2xl container mx-auto md:px-2 px-4  md:flex-row py-12'>
           <div className='flex md:flex-row items-center justify-between'>
               <div>
                  <div className='flex items-center space-x-5'>
                  </div>
                  <h3 className='text-4xl font-bold text-slate-600 mt-4 txt1'>
                    Shurtan gaz kimyo majmuasi <br />ishlab chiqarilayotgan  mahsulotlar
                  </h3>
               </div>
               <div className='hidden md:block'>
                   <img className='w-28' src={logo} alt="logo" />
               </div>
           </div>

           <div className='grid grid-cols-1 md:grid-cols-2  grid-rows-3 gap-[4rem] my-[4rem]'>
             {products.map(product =>                
             <div className='cartoon shadow-xl bg-white relative'>
                   <div className='flex space-x-4 py-4 px-6 bg-gray-100 items-center'>
                      <img className='object-cover rounded-[50%]' style={{width:"50px",height:"50px"}} src={product.productImg} alt="cartoon img" />
                      <h2 className='text-[1.8rem] font-bold'>{product.title}</h2>
                   </div>
                   {/* cartoon description */}
                  <div className='cartoon-desc mt-[1rem] px-4 py-2'>
                      <p>{product.desc}</p>
                  </div>
                  {/* cartoon stick */}
                  <div className='cartoon-stick absolute top-7 right-8'>
                      {/* <span className='bg-green p-8 text-white text-[1.5rem]'>{product.counter}</span> */}
                  </div>
             </div>)}
           </div>
        </section>
    </div>
  )
}

export default Products