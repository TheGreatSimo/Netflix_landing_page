"use client"

import Image from 'next/image';
import { useState } from 'react';


const FAQOne = ({ question, answer }) => {
  const [expanded, setExpanded] = useState(false);

  const handleClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div className={`bg-[#2D2D2D] w-[1200px]  border-[#B1B1B1] border-2 overflow-hidden shadow-md`}>
      <div className={`flex mx-10 items-center h-[80px] justify-between`}>
        <div>
          <h1 className='  text-white text-2xl font-normal ' >{question}</h1>
        </div>
        <div onClick={handleClick} className="cursor-pointer">
          <Image src={expanded ? '/icons/close.png' : '/icons/add.png'} width={36} height={36} alt="haja" />
        </div>
      </div>
      {expanded && (
        <div className="  text-white text-2xl font-normal max-lg-w px-10 mt-4 mb-10 ">{answer}</div>
      )}
    </div>
  );
};

export default FAQOne;
