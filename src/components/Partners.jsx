import React from 'react'
import Slider from "react-slick"

// img links
import img1 from "../assets/links/5ce7d60dd0784.png";
import img2 from "../assets/links/5ce7d98ac9d6a.png";
import img3 from "../assets/links/5ce7da174ef81.png";
import img4 from "../assets/links/5ce7da67abfb6.png";
import img5 from "../assets/links/5d9b041939044.png";
import img6 from "../assets/links/61b911032913b.png";

// react icon


const Partners = () => {
    var settings = {
        dots: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
        speed: 4000,
        autoplaySpeed: 2000,
        cssEase: "linear",
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2,
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            }
          }
        ]
    }

  return (
   <div className='w-full bg-[#EEF7FF] py-6 mt-[7rem]'>
         <section id='partners' className='max-w-screen-2xl container mx-auto md:px-2 px-4 mt-14'>
     <div className='container  xl:pb-[4rem]'>
        <div className='xl:mb-[2rem]'>
            <div className='flex items-center space-x-5'>
                <span className='font-bold text-[2.2rem]'>Foydali manbalar</span>
            </div>
        </div>
            <Slider {...settings}>
                <div className='text-center'>
                    <img className='w-full md:w-[5rem] mx-auto mb-[1.2rem]' src={img1} alt="link-1" />
                    <a href="https://gov.uz/" target='_blank'><span>Hukumat portali</span></a>
                </div>
                <div className='text-center'>
                    <img className='w-full md:w-[5rem] xl:mx-auto mb-[1.2rem]' src={img2} alt="link-1" />
                    <a href="https://ung.uz/" target='_blank'><span>"Oʻzbekneftgaz" AJ</span></a>
                </div>
                <div className='text-center'>
                    <img className='w-full md:w-[5rem] xl:mx-auto mb-[1.2rem]' src={img3} alt="link-1" />
                    <a href="https://library.ziyonet.uz/ru" target='_blank'><span>Ziyonet kutubxonasi</span></a>
                </div>
                <div className='text-center'>
                    <img className='xl:w-[5rem] xl:mx-auto mb-[1.2rem]' src={img4} alt="link-1" />
                    <a href="https://uzex.uz/" target='_blank'><span>Oʻzbekiston Respublikasi <br /> tovar homashyo birjasi</span></a>
                </div>
                <div className='text-center'>
                    <img className='w-full md:w-[5rem] xl:mx-auto mb-[1.2rem] xl:h-[5rem]' src={img5} alt="link-1" />
                    <a href="https://minenergy.uz/uz" target='_blank'><span>Energetika Vazirligi</span></a>
                </div>
                <div className='text-center'>
                    <img className='w-full md:w-[5rem] xl:mx-auto mb-[1.2rem]' src={img6} alt="link-1" />
                    <a href="https://data.gov.uz/" target='_blank'><span>Ochiq maʼlumotlar portali</span></a>
                </div>
            </Slider>
     </div>
   </section>
   </div>
  )
}

export default Partners