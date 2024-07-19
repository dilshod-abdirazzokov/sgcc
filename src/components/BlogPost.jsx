import React from 'react';

const BlogPost = ({ title, date, content, imageSrc }) => {
  return (
        <div className="card w-full  bg-base-100  mb-4">
            <div className="card-body p-0">
                <img src={imageSrc} className="max-h-[15rem] object-cover" alt="yangiliklarga tegishli rasm" />
                 <div className='py-3 px-4'>
                    <p className="text-sm text-gray-300">{date}</p>
                    <h2 className="card-title">{title}</h2>
                    <p>{content}</p>
                 </div>
            </div>
        </div>
  );
};

export default BlogPost;