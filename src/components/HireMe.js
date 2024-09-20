import React from 'react';
import { CircularText } from './Icons';
import Image from 'next/image';

const HireMe = () => {
  return (
    <div className='w-48 h-48 fixed left-10 bottom-10 z-20 flex items-center justify-center md:right-8 md:left-auto md:top-0 md:bottom-auto md:absolute sm:right-0
    '>
    <div className='w-full h-full relative flex items-center justify-center overflow-hidden md:w-25'>
      <Image className="circular-text w-full h-full z-20 fill-dark animate-spin-slow" src="../../public/circular-text.png" alt='some texts' width={800} height={800} />

      <a href='mailto:ammralfer@gmail.com' className='flex items-center justify-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
        bg-dark text-light shadow-md border border-solid
        border-dark w-20 h-20 rounded-full font-semibold
        hover:bg-light hover:text-dark z-50

         dark:bg-light dark:text-dark hover:dark hover:dark:text-light
                  hover:dark:border-light
                  md:w-25 md:h-25 md:text-[15px]
        
        '>
        Hire Me
      </a>
      </div>
    </div>
  );
};

export default HireMe;
