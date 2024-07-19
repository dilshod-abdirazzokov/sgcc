import React from "react";

// source video
import video from '../assets/video/video7.mp4'

function Video() {

  return (
    <div className="slider-container w-full mx-auto">
       <video className='video' muted autoPlay loop src={video} type='video/mp4'></video>
    </div>
  );
}

export default Video;
