import React from 'react';

// custom style
import './spinner.css'

import logo from "../../assets/logo.png"

const Loader = () => {
    return (
     <div className='clouder'>
        <div className='spinner'>
         <img src={logo} style={{width:"130px"}} alt='logo'/>
         <div class="loader"></div>
      </div>
     </div>
    );
  };
  
export default Loader;