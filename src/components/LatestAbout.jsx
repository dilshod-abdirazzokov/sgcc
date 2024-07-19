import React from 'react'
import about1 from "../assets/images/zavod2.png"
import about2 from "../assets/images/zavod3.png"

const LatestAbout = () => {
  return (
    <section className="bg-[#265073] py-24 relative my-24">
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
                        <h2 className="text-white text-4xl font-bold font-manrope leading-normal lg:text-start text-center">Bizning jamoamiz</h2>
                        <p className='text-gray-900 font-bold'>“Shurtan gaz kimyo majmuasi” MCHJ da mehnat qilayotgan  ishchi xodimlar soni toʻgʻrisida batafsil ma'lumot</p>
                    </div>
                    <div className="w-full lg:justify-start justify-center items-center sm:gap-10 gap-5 inline-flex">
                        <div className="flex-col justify-start items-start inline-flex">
                            <h3 className="text-white text-4xl font-bold font-manrope leading-normal">3641</h3>
                            <h6 className="text-gray-500 text-base font-normal leading-relaxed">Jamoadagi barcha</h6>
                        </div>
                        <div className="flex-col justify-start items-start inline-flex">
                            <h4 className="text-white text-4xl font-bold font-manrope leading-normal">244</h4>
                            <h6 className="text-gray-500 text-base font-normal leading-relaxed">Rahbar xodimlar</h6>
                        </div>
                        <div className="flex-col justify-start items-start inline-flex">
                            <h4 className="text-white text-4xl font-bold font-manrope leading-normal">249</h4>
                            <h6 className="text-gray-500 text-base font-normal leading-relaxed">Texnik xodimlar</h6>
                        </div>
                        <div className="flex-col justify-start items-start inline-flex">
                            <h4 className="text-white text-4xl font-bold font-manrope leading-normal">643</h4>
                            <h6 className="text-gray-500 text-base font-normal leading-relaxed">Xotin-qizlar</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
                                        
  )
}

export default LatestAbout