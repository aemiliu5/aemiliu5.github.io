import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const ScrollableItemGrid = ({ imageSrc, name, link = "", category }) => {
  return (
    <Link href={link}>
      <div className="w-[360px] sm:w-[450px] h-[350px] bg-[#101010] text-white p-4 rounded-2xl flex-shrink-0 hover:scale-[103%] hover:opacity-75 duration-200">
        <div className="relative h-full w-full overflow-hidden">
          <Image
            src={imageSrc}
            alt={name}
            layout="fill"
            objectFit="cover"
            className="rounded-2xl duration-200"
          />
          <h3 className="absolute bottom-0 left-0 w-full bg-[#191919de] pl-4 pt-2 text-center text-[26px] rounded-b-xl">
            {name}
          </h3>
        </div>
      </div>
    </Link>
  );
};

export default ScrollableItemGrid;
