import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const ScrollableItem = ({ link = "", imageSrc, name, description }) => {
  return (
    <Link href={link}>
      <div className="w-[360px] sm:w-[480px] bg-[#101010] text-white p-4 rounded-2xl hover:scale-[103%] hover:opacity-75 duration-200">
        <div className="relative h-[240px] sm:h-[300px]">
          <Image 
            src={imageSrc} 
            alt={name} 
            layout="fill" 
            objectFit="cover" 
            className="rounded-2xl duration-200" 
          />
          <h3 className="absolute bottom-0 left-0 w-full bg-[#191919de] pl-4 pt-2 text-center text-[30px] rounded-b-xl">
            {name}
          </h3>
        </div>
        <div className="mt-4 h-[80px]">
          <p className="text-[20px] text-gray-300">{description}</p>
        </div>
      </div>
    </Link>
  );
};

export default ScrollableItem;
