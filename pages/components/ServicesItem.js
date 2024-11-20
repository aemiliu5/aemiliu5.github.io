// components/ServicesItem.js

import React from 'react';
import Image from 'next/image';
import { Plus_Jakarta_Sans } from 'next/font/google';

const PJS = Plus_Jakarta_Sans ({ weight: '300', subsets: ['latin'], })

const ServicesItem = ({ image, text }) => {
  return (
    <div className="bg-white p-4  rounded-xl flex flex-col items-center">
      {image && (
        <div className="mb-2">
          <Image src={image} width={75} height={75} />
        </div>
      )}
      <div className="text-center">
        <div className={`font-bold mb-1 ${PJS.className}`}>{text}</div>
      </div>
    </div>
  );
};

export default ServicesItem;
