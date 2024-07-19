import React, { useState, useEffect } from 'react';

// Component for displaying current time
const CurrentTime = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalID = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(intervalID);
  }, []);

  return (
    <div>
       <span className='text-white font-bold'>{currentTime.toLocaleTimeString()}</span>
    </div>
  )

}

export default CurrentTime;