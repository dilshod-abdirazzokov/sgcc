import React from 'react'

import ms1 from '../../assets/images/ms/ms-poli.png'
import ms2 from '../../assets/images/ms/ms-gaz.png'
import ms3 from '../../assets/images/ms/ms-oltin.png'
import ms4 from '../../assets/images/ms/ms-kondensat.png'
import ms5 from '../../assets/images/ms/ms-tovar.png'
import ms6 from '../../assets/images/ms/ms-birja.png'


const CardProduct = () => {
    const marks = [
        {
          "id": 1,
          "title":"Polietilen",
          "subtitle":"Quick and Reliable Service",
          "desc":"Ushbu texnologiyaning asosiy afzalligi bu — quvurli va avtoklav turdagi reaktorlarning ketma-ket rejimidan foydalangan holda polietilenning fizik-kimyoviy va reologik ko‘rsatkichlarni o‘zgartirish imkoniyati hisoblanadi.",
          "productImg":`${ms1}`,
          "btnText":"Batafsil ma'lumot"
        },
        {
          "id": 2,
          "title":"Suyultirilgan gaz",
          "subtitle":"Quick and Reliable Service",
          "desc":"Suyultirilgan gaz, tabiiy gazni chuqur qayta ishlash natijasida asosiy tarkibiy qismi propan-butan aralashmasidan iborat boʻlgan mahsulot boʻlib hisoblanadi.",
          "productImg":`${ms2}`,
          "btnText":"Batafsil ma'lumot"
        },
        {
          "id": 3,
          "title":"Oltingugurt",
          "subtitle":"Quick and Reliable Service",
          "desc":"Oltingugurt tabiiy gaz tarkibidan ajratib olingan vodorod sulfidni (H2S) toʻgʻridan-toʻgʻri oksidlash jarayoni yordamida ishlab chiqariladi. Hosil boʻlgan oltingugurt granulalar koʻrinishida 25kg dan polietilen qoplarga qadoqlanadi.",
          "productImg":`${ms3}`,
          "btnText":"Batafsil ma'lumot"
        },
        {
          "id": 4,
          "title":"Kondensat",
          "subtitle":"Gaz kondensati",
          "desc":"Gaz kondensati, tabiiy gazni chuqur qayta ishlash natijasida ogʻir uglevodorodlarni ajratib olish natijasida hosil boʻlgan mahsulot boʻlib hisoblanadi. Uning oʻrtacha zichligi 0,715 - 0,735 g/sm3 ni tashkil qiladi.",
          "productImg":`${ms4}`,
          "btnText":"Batafsil ma'lumot"
        },
        {
          "id": 5,
          "title":"Tovar gazi",
          "subtitle":"Quick and Reliable Service",
          "desc":"Tovar gazi, tabiiy gazni chuqur qayta ishlash natijasida asosiy tarkibiy qismi metandan iborat boʻlgan gaz boʻlib hisoblanadi. Tovar gazning sifati Oʻz DSt 948:2016 standarti shartlari asosida nazorat qilib boriladi. Tovar gazi “Oʻztransgaz” AJning magistral gaz quvurlariga yetkazib beriladi.",
          "productImg":`${ms5}`,
          "btnText":"Batafsil ma'lumot"
        },
        {
            "id": 6,
            "title":"Tovar gazi",
            "subtitle":"Quick and Reliable Service",
            "desc":"Tovar gazi, tabiiy gazni chuqur qayta ishlash natijasida asosiy tarkibiy qismi metandan iborat boʻlgan gaz boʻlib hisoblanadi. Tovar gazning sifati Oʻz DSt 948:2016 standarti shartlari asosida nazorat qilib boriladi. Tovar gazi “Oʻztransgaz” AJning magistral gaz quvurlariga yetkazib beriladi.",
            "productImg":`${ms6}`,
            "btnText":"Batafsil ma'lumot"
        },
      ]
    
  return (
    <>
        <section class="text-gray-600 body-font">
            <div class="container px-5 py-24 mx-auto">
                <div class="flex flex-wrap -m-4">
                  {marks.map((mark) => (
                    <div  key={mark.id} class="p-4 md:w-1/3">
                    <div class=" border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                    <img class="lg:h-72 md:h-36 w-full object-cover object-center" src={mark.productImg} alt="blog" />
                    <div class="p-6">
                        <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">{mark.subtitle}</h2>
                        <h1 class="title-font text-lg font-medium text-gray-900 mb-3">{mark.title}</h1>
                        <div class="flex items-center flex-wrap ">
                        <a class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">{mark.btnText}
                            <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M5 12h14"></path>
                            <path d="M12 5l7 7-7 7"></path>
                            </svg>
                        </a>
                        <span class="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 ">
                            <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                            <circle cx="12" cy="12" r="3"></circle>
                            </svg>1.2K
                        </span>
                        </div>
                    </div>
                    </div>
                </div>
                  ))}
                </div>
            </div>
        </section>
    </>
  )
}

export default CardProduct