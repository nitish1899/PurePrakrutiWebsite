import React from 'react';

export const BenefitCard = ({ passed }) => {
  return (
    <div className='p-6 pt-4 bg-opacity-75 flex flex-col hover:text-black h-auto w-auto box-content bg-gradient-to-b from-white to-white border-4 border-blue-200 rounded-xl shadow-lg'
      style={{ boxShadow: '0 10px 20px rgba(0, 0, 0, 0.9)' }}>

      {/* Dynamic Icon at the top */}
      <div className="text-blue-400 top-4 left-4 text-4xl mb-4">
        {passed.icon}
      </div>

      {/* Heading */}
      <div className='font-semibold text-2xl pb-2 text-black'
        style={{ textShadow: "1px 1px 2px rgba(0, 0, 0, 0.8)" }}>
        {passed.heading}
      </div>

      {/* Paragraph */}
      <div className='text-black'>
        {passed.paragraph}
      </div>
    </div>
  );
};
