import React from 'react';
import bannerPic from '../../../Pictures/Image/bannerPic.jpg'

const Banner = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse mx-10">
        <img src={bannerPic} className="max-w-sm rounded-lg shadow-2xl" />
        <div>
          <h1 className="text-5xl font-bold">Parts Manufacturer Website</h1>
          <p className="py-6">Computers and laptops / notebooks have become a part of our life. Life without a computer is next to impossible in this age of fast growing world of electronics and technology.As the demand for computers grew, more and more companies stepped in the business to manufacture computers and computer hardware and software. Some of these companies manufacture all computer parts and sell under their own brand, while others manufacture only some of the hardware and few others develop only software.</p>
        </div>
      </div>
    </div>
  );
};

export default Banner;