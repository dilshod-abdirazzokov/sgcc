import React from "react";

import { FaArrowRight } from "react-icons/fa";

const TdStyle = {
  ThStyle: `w-1/6 min-w-[160px] border-b border-white border-2 py-4 px-3 text-lg font-medium text-black lg:py-7 lg:px-4 bg-[#F3F6FF]`,
  TdStyle: `text-dark border-b border-l border-white bg-[#F3F6FF] dark:bg-dark-3 dark:border-dark dark:text-dark-7 py-5 px-2 text-center text-base font-medium`,
  TdStyle2: `text-dark bg-white dark:border-dark dark:bg-dark-2 dark:text-dark-7 py-5 px-7 text-base font-medium`,
  TdButton: `flex items-center text-[1.2rem] space-x-3 px-6 py-2.5  text-primary hover:bg-gray hover:text-black font-medium`,
}

const OpenTable = () => {
  return (

    <section className='bg-white dark:bg-dark py-20 lg:py-[120px]'>
      <div className='container'>
        <div className='flex flex-wrap -mx-4'>
          <div className='w-full '>
            <div className='max-w-full overflow-x-auto'>
              <table className='w-full table-auto'>
                <thead className='text-center bg-primary'>
                  <tr>
                    <th className={TdStyle.ThStyle}> Id </th>
                    <th className={TdStyle.ThStyle}> Nomi </th>
                    <th className={TdStyle.ThStyle}> Til </th>
                    <th className={TdStyle.ThStyle}> Ochish </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className={TdStyle.TdStyle}>1</td>
                    <td className={TdStyle.TdStyle2}>"Sho‘rtan gaz kimyo majmuasi" MCHJ Jamoatchilik kengashining a’zolari haqidagi ma’lumotlar</td>
                    <td className={TdStyle.TdStyle}>Oʻzbekcha</td>
                    <td className={TdStyle.TdStyle2}>
                      <a href='/#' className={TdStyle.TdButton}>
                      <FaArrowRight /> <span>Ochish</span>
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className={TdStyle.TdStyle}>2</td>
                    <td className={TdStyle.TdStyle2}>ShGKM avtotransport bilan taʼminlash xizmatiga qarashli yengil-maxsus transport vositalari ro'yxati</td>
                    <td className={TdStyle.TdStyle}>Oʻzbekcha</td>
                    <td className={TdStyle.TdStyle2}>
                    <a href='/#' className={TdStyle.TdButton}>
                      <FaArrowRight /> <span>Ochish</span>
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className={TdStyle.TdStyle}>3</td>
                    <td className={TdStyle.TdStyle2}>"ShGKM" MChJning 2019 yil 31 dekabr kuni mustaqil auditorlik hisoboti bilan yakunlangan yil uchun alohida moliyaviy hisobotlari</td>
                    <td className={TdStyle.TdStyle}>Oʻzbekcha</td>
                    <td className={TdStyle.TdStyle2}>
                    <a href='/#' className={TdStyle.TdButton}>
                      <FaArrowRight /> <span>Ochish</span>
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
};

export default OpenTable;
