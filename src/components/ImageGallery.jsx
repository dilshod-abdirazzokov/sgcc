import React from 'react'

import banner1 from "../assets/hotel/banner1.png"
import banner2 from "../assets/hotel/banner2.png"
import banner3 from "../assets/hotel/banner3.png"
import banner4 from "../assets/hotel/banner4.png"
import banner5 from "../assets/hotel/banner5.png"
import banner6 from "../assets/hotel/banner6.png"
import banner7 from "../assets/hotel/banner7.png"
import banner8 from "../assets/hotel/banner8.png"
import banner9 from "../assets/hotel/banner9.png"
import banner10 from "../assets/hotel/banner10.png"




const ImageGallery = () => {
    const data = [
        // "https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
        {
          imgelink: `${banner1}`,
        },
        {
            imgelink: `${banner2}`,
        },
        {
            imgelink: `${banner3}`,
        },
        {
            imgelink: `${banner4}`,
        },
        {
            imgelink: `${banner5}`,
        },
        {
            imgelink: `${banner6}`,
        },
        {
            imgelink: `${banner7}`,
        },
        {
            imgelink: `${banner8}`,
        },
        {
            imgelink: `${banner9}`,
        },
        {
            imgelink: `${banner10}`,
        },
      ];
     
      const [active, setActive] = React.useState(
        `${banner2}`,
      );
     
  return (
    <div className='max-w-screen-xl container mx-auto md:px-2 px-4'>
        <div className="grid gap-4">
        <div>
        <img
            className="h-auto w-full max-w-full rounded-lg object-cover object-center md:h-[600px]"
            src={active}
            alt=""
        />
        </div>
        <div className="grid grid-cols-5 gap-4">
        {data.map(({ imgelink }, index) => (
            <div key={index}>
            <img
                onClick={() => setActive(imgelink)}
                src={imgelink}
                className="h-[10rem] w-full cursor-pointer rounded-lg object-cover object-center"
                alt="gallery-image"
            />
            </div>
        ))}
        </div>
    </div>
    </div>
  )
}

export default ImageGallery