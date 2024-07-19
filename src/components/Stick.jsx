import React,{useState} from 'react'

// react icons
import { GoDotFill } from "react-icons/go";
import { FiUserPlus } from "react-icons/fi";

import axios from 'axios'; // if you're using Axios


const Stick = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [age, setAge] = useState('');
    const [address, setAdd] = useState('');
    const [phoneNumber, setPhone] = useState('');
    const [about, setAbout] = useState('');
    const [aim, setAim] = useState('');


    const handleSubmit = async(e) => {
        e.preventDefault();
        try {
            const res = await axios.post('http://localhost:7173/api/Volunteers/AddVolunteer', { name: name, email: email, age: age, address: address, phoneNumber: phoneNumber, about: about, aim: aim });
            console.log(res.data);
        } catch  (err){
            console.log(err);
        }
    }
      
  return (
      <section className='stick-section hidden md:block'>
          <div className='flex  w-[80%] mx-auto space-x-8'>
              <div className='w-full md:w-[30%] rounded-lg  shadow-xl p-8 bg-white'>
                  <div className='flex items-center space-x-4 text-yellow'>
                    <GoDotFill />
                    <h3 className='text-[1.7rem]  font-bold text-green'>Maqsadimiz</h3> 
                  </div>
                  <p className='my-4'>Volontyorlar va tashabbuskor guruhlarning salohiyatini ochish uchun qulay va qo‘llab-quvvatlovchi muhit yaratish</p>

              </div>
              <div className='w-full md:w-[30%] sm:w-[100%] rounded-lg  shadow-xl p-8 bg-white'>
                  <div className='flex items-center space-x-4 text-yellow'>
                    <GoDotFill />
                    <h3 className='text-[1.7rem] font-bold text-green'>Bizga qo'shiling</h3> 
                  </div>
                  <p className='my-4'>A'zo bo'ling va o‘zingiz uchun imkoniyatlar dunyosini oching, dunyo volontyorlari katta oilasining bir qismi bo‘ling</p>
                  <button className='btn bg-blue text-white text-uppercase'
                      onClick={() => document.getElementById('my_modal_5').showModal()}><FiUserPlus className='text-[1.5rem]' /> A'zo bo'lish</button>
                    {/* modal for form */}
                    <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                    <div className="modal-box">
                    <h3 className="font-bold text-lg">Ro'yxatdan o'tish</h3>
                          <div className='form-section'>
                              <form onSubmit={handleSubmit}>
                                  <div className='flex space-x-4 my-6'>
                                    <input
                                    type="text"
                                          name="name"
                                          id="name"
                                          value={name}
                                          onChange={(e) => setName(e.target.value)}
                                          autoComplete="given-name"
                                          placeholder='Ismingiz'
                                    className="block px-4 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                      />
                                                                          
                                 <input
                                    type="text"
                                    name="email"
                                          id="email"
                                          value={email}
                                          onChange={(e) => setEmail(e.target.value)}
                                          autoComplete="given-name"
                                          placeholder='Pochta manzil'
                                    className="block px-6 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                  </div>
                                  <div className='flex space-x-4 my-6'>
                                    <input
                                    type="number"
                                    name="age"
                                          id="age"
                                          value={age}
                                          onChange={(e) => setAge(e.target.value)}
                                          autoComplete="given-name"
                                          placeholder='Yoshingiz'
                                    className="block px-4 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                      />
                                                                          
                                 <input
                                    type="text"
                                    name="phoneNumber"
                                          id="phoneNumber"
                                          value={phoneNumber}
                                          onChange={(e) => setPhone(e.target.value)}
                                          autoComplete="given-name"
                                          placeholder='Telefon raqam kiriting'
                                    className="block px-6 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                  </div>
                                  <div className='flex space-x-4 my-6'>
                                    <input
                                    type="text"
                                    name="address"
                                          id="address"
                                          value={address}
                                          onChange={(e) => setAdd(e.target.value)}
                                          autoComplete="given-name"
                                          placeholder='Manzilingizni kiriting'
                                    className="block px-4 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                      />
                                                                          
                                 <input
                                    type="text"
                                    name="about"
                                          id="about"
                                          value={about}
                                          onChange={(e) => setAbout(e.target.value)}
                                          autoComplete="given-name"
                                          placeholder="O'zingiz haqida ma'lumot"
                                    className="block px-6 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                  </div>
                                  <div className='flex space-x-4 my-6'>
                                    <input
                                    type="text"
                                          name="aim"
                                          
                                          id="aim"
                                          value={aim}
                                          onChange={(e) => setAim(e.target.value)}
                                          autoComplete="given-name"
                                          placeholder="Maqsadingiz haqida batafsil ma'lumot kiriting"
                                    className="block px-4 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                      />
                                  </div>
                                  <button type="submit" className='btn bg-darkBlue text-white w-full'>Yuborish</button>
                              </form>
                    </div>
                    <div className="modal-action">
                    <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <button className="btn">Yopish</button>
                    </form>
                    </div>
                    </div>
                  </dialog>
                    {/* modal for form */}
              </div>
              <div className='w-[33%] shadow-xl rounded-lg p-8 bg-white'>
                  <div className='flex items-center space-x-4 text-yellow'>
                    <GoDotFill />
                    <h3 className='text-[1.7rem] font-bold text-green'>Loyihalar</h3> 
                  </div>
                  <p className='my-4'>Loyihalarimiz ezgulikni volontyorlik orqali insonlarga ulashishga qaratilgan va bizda buning iloji bor</p>
              </div>
          </div>
    </section>
  )
}

export default Stick