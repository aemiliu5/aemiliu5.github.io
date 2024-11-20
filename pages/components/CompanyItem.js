// components/CompanyItem.js

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { Inter } from 'next/font/google';

const interB = Inter({
  weight: '500',
  subsets: ['latin'],
});

const CompanyItem = ({ href, src, alt, hoverText }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link href={href ?? ''}>
      <div
        className="relative flex items-center justify-center bg-[#3085a3] rounded-3xl overflow-hidden"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative">
          <Image src={src} alt={alt} width={512} height={512} />
          {hoverText && (
            <div
              className={`absolute inset-0 bg-gradient-to-b from-transparent to-gray-500 opacity-0 ${
                isHovered ? 'opacity-100 transition-opacity duration-300' : 'transition-opacity duration-300'
              }`}
            />
          )}
        </div>
        {hoverText && (
          <div
            className={`absolute bottom-0 w-full text-center text-[22px] mb-8 px-4 leading-8 text-white ${interB.className} ${
              isHovered ? 'opacity-100 translate-y-0 transition-all duration-300' : 'opacity-0 translate-y-[50%] transition-all duration-300'
            }`}
          >
            {hoverText}
          </div>
        )}
      </div>
    </Link>
  );
};

export default CompanyItem;
