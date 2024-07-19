import React, { Component } from "react";
import BlogPost from './BlogPost';
import Slider from "react-slick";

// images 
import imageSrc from "../assets/images/yangiliklar/img4.png"
import imageSrc2 from "../assets/images/yangiliklar/img5.png"
import imageSrc3 from "../assets/images/yangiliklar/img6.png"
import imageSrc4 from "../assets/images/yangiliklar/img9.png"


const BlogPage = () => {
    
  const posts = [
    {
      title: 'Germaniyalik delegatlar "Sho‘rtan GKM" MCHJ faoliyati bilan yaqindan tanishishdi',
      date: '05.03.2024',
      content: 'This is the content of my first blog post.',
      imageSrc:`${imageSrc}`
    },
    {
      title: 'Majmua xotin-qizlari ishtirokida “SHGKM Shijoatli xotin-qizlari forumi” bo‘lib o‘tdi',
      date: '10.04.2024',
      content: 'This is the content of another blog post.',
      imageSrc:`${imageSrc2}`
    },
    {
        title: "Majmuada 28-aprel - Butunjahon mehnatni muhofaza qilish kuni tadbiri bo'lib o'tdi",
        date: '15.05.2024',
        content: 'This is the content of another blog post.',
        imageSrc:`${imageSrc3}`
    },
    {
        title: 'Etilen ishlab chiqarish sexida ta’mirlash ishlari olib borildi',
        date: '10.06.2024',
        content: 'This is the content of another blog post.',
        imageSrc:`${imageSrc4}`
    }
    // Add more posts here
  ];

  return (
    <div className="max-w-screen-xl container mx-auto mb-[3rem]">
      <h1 className="text-3xl font-bold mb-8 ">Majmua yangiliklar</h1>
       <div className='grid grid-cols-1 md:grid-cols-2 grid-rows-4 md:grid-rows-2 gap-[2.5rem] '>
        {posts.map((post, index) => (
            <BlogPost key={index} title={post.title} date={post.date}  imageSrc={post.imageSrc} />
        ))}
       </div>
    </div>
  );
};

export default BlogPage;
