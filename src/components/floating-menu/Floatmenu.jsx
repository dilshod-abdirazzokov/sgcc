import React from 'react';
import './floatmenu.css';

import { RiContactsLine } from "react-icons/ri";
import { FaEye } from "react-icons/fa";
import { LuSmartphone } from "react-icons/lu";
import { AiOutlineSound } from "react-icons/ai";
import { PiTreeStructure } from "react-icons/pi";
import { MdOutlineLightMode } from "react-icons/md";
import { FaSearch } from "react-icons/fa";

const FloatMenu = () => {
  return (
    <div className="floating-menu">
      <ul>
      <li><a className="tooltip tooltip-left" data-tip="Ma'lumotlarni qidirish"><FaSearch onClick={()=>document.getElementById('my_modal_1').showModal()} /></a></li>
        <li><a className="tooltip tooltip-left" data-tip="Biz bilan bog'lanish"><RiContactsLine /></a></li>
        <li><a className="tooltip tooltip-left" data-tip="Zaif ko'ruvchilar uchun" href="#about"><FaEye /></a></li>
        <li><a className="tooltip tooltip-left" data-tip="Mobil talqin"><LuSmartphone /></a></li>
        <li><a><MdOutlineLightMode/></a></li>
        <li><a className="tooltip tooltip-left" data-tip="Ovozli o'qish"><AiOutlineSound /></a></li>
        <li><a className="tooltip tooltip-left" data-tip="Sayt xaritasi"><PiTreeStructure /></a></li>
      </ul>
    </div>
  );
};

export default FloatMenu;