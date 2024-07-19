import React from 'react'
import { PiPhoneCallDuotone } from "react-icons/pi";
import "./agent.css"

const Agent = () => {
  return (
    <>
    <div className='agent bg-darkBlue rounded-full animate-bounce p-3' onClick={()=>document.getElementById('my_modal_2').showModal()}>
    <PiPhoneCallDuotone className='text-6xl text-white'/> 
    </div>
        <dialog id="my_modal_2" className="modal">
        <div className="modal-box">
            <h3 className="font-bold text-lg">Hello!</h3>
            <p className="py-4">Press ESC key or click outside to close</p>
        </div>
        <form method="dialog" className="modal-backdrop">
            <button>close</button>
        </form>
        </dialog>
    </>
  )
}

export default Agent