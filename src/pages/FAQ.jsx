import React from 'react'
import Head from '../components/Head'
import Navbar from '../components/Navbar'

const FAQ = () => {
  return (
    <>
      <Head />
      <Navbar />
       <div className='w-full md:w-[50%] mx-auto space-y-3 mb-[4rem]' >
       <div className="collapse collapse-arrow bg-base-200">
            <input type="radio" name="my-accordion-2" defaultChecked /> 
            <div className="collapse-title text-xl font-medium">
            Majmuaga qanday qilib ishga joylashish mumkin?
            </div>
            <div className="collapse-content bg-white text-darkBlue py-6"> 
            <p>Ishga joylashish uchun avvalo bo'sh ish o'rinlari mavjudligi haqida majmuaning rasmiy veb-saytidan yoki kadrlar bo'limidan ma'lumot oling.</p>
            </div>
        </div>
        <div className="collapse collapse-arrow bg-base-200">
            <input type="radio" name="my-accordion-2" /> 
            <div className="collapse-title text-xl font-medium">
            Mahsulotlarni qanday tartibda sotib olish mumkin?
            </div>
            <div className="collapse-content bg-white text-darkBlue py-6"> 
            <p>Saytda mahsulotlar sahifasi mavjud bo'lib, sotib olinadigan mahsulotning sotib olish tartibi va prays-listi joylashtirilgan. Mahsulotning batafsil ma'lumot sahifasi orqali tanishishingiz mumkin.</p>
            </div>
        </div>
        <div className="collapse collapse-arrow bg-base-200">
            <input type="radio" name="my-accordion-2" /> 
            <div className="collapse-title text-xl font-medium">
            Shurtan gaz kimyo majmuasi qayerda joylashgan?
            </div>
            <div className="collapse-content bg-white text-darkBlue py-6"> 
            <p>Qashqadaryo viloyati, G'uzor tumani, Sho'rtan qo'rg'onida.</p>
            </div>
        </div>
        <div className="collapse collapse-arrow bg-base-200">
            <input type="radio" name="my-accordion-2" /> 
            <div className="collapse-title text-xl font-medium">
            Rahbariyat qabuliga qanday qilib yozilish yoki murojaat yo'llash mumkin?
            </div>
            <div className="collapse-content bg-white text-darkBlue py-6"> 
            <p>Buning uchun yuqoridagi "Majmua" menyusidan "Murojaat qilish" bo'limiga kiring. Shu yerdan murojaatingizni yo'llashingiz mumkin.</p>
            </div>
        </div>
        <div className="collapse collapse-arrow bg-base-200">
            <input type="radio" name="my-accordion-2" /> 
            <div className="collapse-title text-xl font-medium">
            Shurtan gaz kimyo majmuasi ishlab chiqaradigan asosiy mahsulotlarni to'g'ridan-to'g'ri sotib olish mumkinmi?
            </div>
            <div className="collapse-content bg-white text-darkBlue py-6"> 
            <p>Mumkin emas</p>
            </div>
        </div>
        <div className="collapse collapse-arrow bg-base-200">
            <input type="radio" name="my-accordion-2" /> 
            <div className="collapse-title text-xl font-medium">
            ShGKM «Medservis» sog'lomlashtirish markaziga yo'llanma olish tartibi qanday?
            </div>
            <div className="collapse-content bg-white text-darkBlue py-6"> 
            <p>ShGKM «Medservis» sog'lomlashtirish markazida davolanish tartibi:</p>
            <p>Majmua ishchi xodimlari mehnat ta'tiliga chiqqanda majmua kasaba uyushmasi qo'mitasi tomonidan imtiyozli ravishda (ish stajiga qarab) yuboriladi.</p>
            <p>Boshqa tashkilotlardan hamda fuqarolar shartnoma asosida, naqd pul to'lash yoki pul ko'chirish orqali qabul qilinadi.</p>    
            </div>
        </div>
       </div>
    </>
  )
}

export default FAQ