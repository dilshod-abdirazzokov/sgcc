import React from 'react'
import Head from '../components/Head'
import Navbar from '../components/Navbar'

const SendResume = () => {
  return (
    <>
      <Head />
      <Navbar />
      <h2 className='font-semibold text-2xl text-center'>Bo'sh ish o'rinlari uchun ariza yuborish</h2>
      <br />
      <form className='w-full md:w-[50%] mx-auto px-6 md:px-0'>
         <div className='flex flex-col md:flex-row w-full md:space-x-6 space-y-6 md:space-y-0 '>
            <div className='form-span w-full'>
                <label htmlFor="firstname" className='font-bold'>Familiyasi, ismi va otasining ismi(Pasport bo'yicha) / F.I.O</label>
               <input type="text" name='firstname' id='firstname' className='input input-bordered w-full' />
            </div>
            <div className='form-span w-full'>
                <label htmlFor="lastname" className='font-bold'>Pochta manzilingiz</label>
               <input type="email" name='lastname' id='lastname' className='input input-bordered w-full' />
            </div>
         </div>
         <br />
         <div className='flex flex-col md:flex-row w-full md:space-x-6 space-y-6 md:space-y-0'>
            <div className='w-full'>
                <label htmlFor="gender" className="font-bold">
                   Jinsi / пол
                </label>
                <div>
                    <select
                    id="gender"
                    name="gender"
                    autoComplete="gender"
                    className="w-full rounded-md border-0 py-[.8rem] px-3 text-gray-900 ring-1 ring-inset ring-gray-300"
                    >
                    <option>Ayol</option>
                    <option>Erkak</option>
                    </select>
                </div>
            </div>
            <div className='w-full'>
               <label htmlFor="birthdaydate" className='font-bold'>Tug'ilgan kuni/ дата рождения</label>
               <input type="date" name='birthdaydate' id='birthdaydate' className='input input-bordered w-full' />
            </div>
         </div>
         <br />
         <div className='flex flex-col md:flex-row w-full md:space-x-6 space-y-6 md:space-y-0 '>
            <div className='form-span w-full'>
                <label htmlFor="birthPlace" className='font-bold'>Tug'ilgan joyi / место рождения</label>
               <input type="text" name='birthPlace' id='birthPlace' className='input input-bordered w-full' />
            </div>
            <div className='form-span w-full'>
                <label htmlFor="liveAddress" className='font-bold'>Yashash manzili / место жительства</label>
               <input type="text" name='liveAddress' id='liveAddress' className='input input-bordered w-full' />
            </div>
            <div className='form-span w-full'>
                <label htmlFor="phoneNumber" className='font-bold'>Telefon raqami/ номер телефона</label>
               <input type="tel" name='phoneNumber' id='phoneNumber' className='input input-bordered w-full' />
            </div>
         </div>
         <br />
         <div className='flex flex-col md:flex-row w-full md:space-x-6 space-y-6 md:space-y-0 '>
            <div className='form-span w-full'>
                <label htmlFor="graduatedUniversitet" className='font-bold'>Ta'lim olgan muassasa nomi / Название учебного заведения</label>
               <input type="text" name='graduatedUniversitet' id='graduatedUniversitet' className='input input-bordered w-full' />
            </div>
            <div className='form-span w-full'>
                <label htmlFor="profession" className='font-bold'>Mutaxassisligi / специальность</label>
               <input type="text" name='profession' id='profession' className='input input-bordered w-full' />
            </div>
         </div>
         <br />
         <div className='flex flex-col md:flex-row w-full md:space-x-6 space-y-6 md:space-y-0 '>
            <div className='form-span w-full'>
                <label htmlFor="graduatedUniversitetYear" className='font-bold'>Ta'lim muassasini tugatgan yili / год окончания ВУЗа</label>
               <input type="date" name='graduatedUniversitetYear' id='graduatedUniversitetYear' className='input input-bordered w-full' />
            </div>
            <div className='form-span w-full'>
                <label htmlFor="professionTopic" className='font-bold text-[.9rem]'>Bitiruv ishi mavzusi/ Тема выпускной квалификационной работы</label>
               <input type="text" name='professionTopic' id='professionTopic' className='input input-bordered w-full' />
            </div>
         </div>
          <br />
          <div className='flex flex-col md:flex-row w-full md:space-x-6 space-y-6 md:space-y-0 '>
            <div className='form-span w-full'>
                <label htmlFor="graduatedUniversitetYear" className='font-bold'>Ta'lim muassasini tugatgan yili / год окончания ВУЗа</label>
               <input type="date" name='graduatedUniversitetYear' id='graduatedUniversitetYear' className='input input-bordered w-full' />
            </div>
            <div className='form-span w-full'>
                <label htmlFor="professionTopic" className='font-bold text-[.9rem]'>Bitiruv ishi mavzusi/ Тема выпускной квалификационной работы</label>
               <input type="text" name='professionTopic' id='professionTopic' className='input input-bordered w-full' />
            </div>
         </div>
         <br />
        <div className='form-span w-full'>
            <label htmlFor="seminar" className='font-bold text-[.9rem]'>Seminar, trening, stajirovka va konferensiyalarda qatnashganmisiz? Qachon va nima maqsadda qatnashganingiz haqida qisqacha ma'lumot bering / Вам приходилось участвовать в стажировках, семинарах, тренингах, курсах и т.д.? если участвовали, предоставьте краткую информацию</label>
            <input type="text" name='seminar' id='seminar' className='input input-bordered w-full' />
        </div>
        <br />
        <div className='form-span w-full'>
            <label htmlFor="workExperience" className='font-bold text-[.9rem]'>Ish tajribangiz bormi? Agar bo'lsa ish joyi nomi, lavozim, asosiy vazifa va majburiyatlari haqida quyida ma'lumot bering / Имеется ли у вас опыт работы? Если имеется, дайте информацию о месте работы, своей должности, опишите основные функции и обязанности.</label>
            <input type="text" name='workExperience' id='workExperience' className='input input-bordered w-full' />
        </div>
        <br />
        <div className='form-span w-full'>
            <label htmlFor="workExperience" className='font-bold text-[.9rem]'>Rus tilini qanchalik darajada yaxshi bilasiz? O'z mutaxassisligingiz haqida rus tilida 50-60 ta so'zdan iborat qisqacha ma'lumot yozib bering / Насколько хорошо вы знаете русский язык? Пожалуйста, напишите краткую информацию о своей специальности (текст не более 50-60 слов) на русском языке.</label>
            <input type="text" name='workExperience' id='workExperience' className='input input-bordered w-full' />
        </div>
        <br />
        <div className='form-span w-full'>
            <label htmlFor="workExperience" className='font-bold text-[.9rem]'>Kompyuter savodxonligi, qaysi dasturlarda ishlay olasiz? / Навыки работы с компьютером, в каких программах умеете работать?</label>
            <input type="text" name='workExperience' id='workExperience' className='input input-bordered w-full' />
        </div>
        <br />
        <div className='form-span w-full'>
            <label htmlFor="workExperience" className='font-bold text-[.9rem]'>O'z vaqtingizdan qanchalik unumli foydalanasiz? / Насколько эффективно вы используете своё время?</label>
            <input type="text" name='workExperience' id='workExperience' className='input input-bordered w-full' />
        </div>
        <br />
        <div className='form-span w-full'>
            <label htmlFor="workExperience" className='font-bold text-[.9rem]'>O'z hayotingizda erishgan yutuqlar haqida yozing. O'qishingizda, ishingizda erishgan muvaffaqiyatlaringiz bilan bo'lishing / Напишите о своих жизненных достижениях. Поделитесь значительными на Ваш взгляд успехами в учёбе, на работе и т.д..</label>
            <input type="text" name='workExperience' id='workExperience' className='input input-bordered w-full' />
        </div>
        <br />
        <div className='form-span w-full'>
            <label htmlFor="workExperience" className='font-bold text-[.9rem]'>Kelgusida yaxshi mutaxassis bo'lishingiz va kar'era qilishingiz uchun ko'proq nimalarga e'tibor berishingiz va qanday zararli odatlardan saqlanishingiz kerak deb hisoblaysiz? / Как вы считаете, чему вы должны уделять больше внимания и какие вредные привычки необходимо избегать, чтобы стать хорошим специалистом и сделать карьеру в будущем?</label>
            <input type="text" name='workExperience' id='workExperience' className='input input-bordered w-full' />
        </div>
        <br />
        <div className='form-span w-full'>
            <label htmlFor="workExperience" className='font-bold text-[.9rem]'>Motivatsion xat yozib bering, xatingizda quyidagi savollarga javob berishingizni so'raymiz: - nima uchun Siz aynan ShGKMda ishlamoqchisiz? - suhbatlarda qatnashish va ShGKMda ishlash Sizning kelajakdagi kar'erangiz uchun qanday ta'sir etishi mumkin?____________________________________________________________________________
            <br />Напишите мотивационное письмо. В письме кратко отвечайте на следующие вопросы:  - Почему вы хотите работать именно в ШГXК?    - Как, по вашему мнению, участие в собеседование и работа в ШГXК может повлиять на вашу будущую карьеру?</label>
            <input type="text" name='workExperience' id='workExperience' className='input input-bordered w-full' />
        </div>

         <button className='btn btn-primary w-full my-8'>Ariza yuborish</button>
      </form>
    </>
  )
}

export default SendResume