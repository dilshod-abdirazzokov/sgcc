import React, { useState, useEffect } from 'react';



// Component for displaying current date
const CurrentDate = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const intervalID = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);

    return () => clearInterval(intervalID);
  }, []);

  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  const formattedDate = currentDate.toLocaleDateString('en-GB', options);

  return (
    <div>
      <p className='text-white text-[.9rem] font-bold flex items-center space-x-3'><span>{formattedDate}</span></p>
    </div>
  );
};

export default CurrentDate;
