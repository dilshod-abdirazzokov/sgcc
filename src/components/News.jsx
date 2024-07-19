
import React from 'react'
import BlogPage from './BlogPage'
import BlogCarousel from './BlogCarousel'

const News = () => {
  return (
    <section className='max-w-screen-2xl container mx-auto md:px-2 px-4 mt-[10rem] md:mt-4'>
      <div className='flex flex-col md:flex-row space-x-[3.5rem]'>
        <BlogPage />
      <div className='w-[35%] hidden md:block'>
        <h1 className="text-2xl font-bold mb-8 text-green ">Eng so'nggi yangiliklar</h1>
           <ul>
            {/* <li className='font-bold  text-2xl text-primary mb-8'>Eng so'nggi yangiliklar</li> */}

              <div className='flex-col space-y-8'>
              <div className='p-4'>
                <a href="https://sgcc.uz/uz/news/view/korrupsiya-taraqqiyotga-tahdid">
                    <h2 className='font-bold border-bottom border-base-200'>Korrupsiya - taraqqiyotga tahdid</h2>
                </a>
                    <span className='text-[.8rem]'>07.06.2024</span>
                </div>
              <div className='p-4'>
                <a href="https://sgcc.uz/uz/news/view/karyera-kuni">
                    <h2 className='font-bold border-bottom border-base-100'>KARYERA KUNI</h2></a>
                    <span className='text-[.8rem]'>07.06.2024</span>
                </div>
                <div className='p-4'>
                  <a href="https://sgcc.uz/uz/news/view/germaniyalik-delegatlar-2024-may"> 
                    <h2 className='font-bold border-bottom border-base-100'>Germaniyalik delegatlar "Sho‘rtan GKM" MCHJ faoliyati bilan yaqindan tanishishdi</h2></a>
                    <span className='text-[.8rem]'>07.06.2024</span>
                </div>
                <div className='p-4'>
                    <a href="https://sgcc.uz/uz/news/view/shgkm-shijoatli-xotin-qizlari-forumi-2024">
                    <h2 className='font-bold border-bottom border-base-100'>Majmua xotin-qizlari ishtirokida “SHGKM Shijoatli xotin-qizlari forumi” bo‘lib o‘tdi</h2></a>
                    <span className='text-[.8rem]'>07.06.2024</span>
                </div>
              </div>
           </ul>
        </div>
      </div>
    </section>
  )
}

export default News