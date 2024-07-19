import React from 'react'

const Form = () => {
  return (
      <div className='bg-white p-4 form rounded-xl shadow-md'>
          <div className="pb-12">
              <h2 className="text-base font-semibold leading-7 text-gray-900 text-[28px] text-darkBlue mb-[1.3rem]">Shaxsiy ma'lumot</h2>

          <div className="mt-3 grid grid-cols-1 gap-x-6 gap-y-2 sm:grid-cols-6">
            <div className="sm:col-span-6">
              <label htmlFor="first-name" className="block lines text-sm font-medium leading-6 text-gray-900 b">
                1.Ism
              </label>
            </div>
            <div className="sm:col-span-6">
              <label htmlFor="first-name" className="block lines text-sm font-medium leading-6 text-gray-900">
                2.Familya
              </label>
                  </div>
                  <div className="sm:col-span-6">
              <label htmlFor="first-name" className="block lines text-sm font-medium leading-6 text-gray-900">
                3.Pochta manzil
              </label>
                  </div>
                  <div className="sm:col-span-6">
                    <label htmlFor="age" className="block lines text-sm font-medium leading-6 text-gray-900">
                     4.Yosh
                      </label>
                  </div>
                  <div className="sm:col-span-6">
                    <label htmlFor="age" className="block lines text-sm font-medium leading-6 text-gray-900">
                     5.Telefon raqam
                      </label>
                  </div>
              </div>
              <button className='btn bg-green text-white w-full mt-6' onClick={() => document.getElementById('my_modal_5').showModal()}>Forma to'ldirish</button>
        </div>

    </div>
  )
}

export default Form