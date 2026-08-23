import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { leagueBold } from '../../utils/fonts';

const ScrollableItemGrid = ({ imageSrc, name, link = "" }) => {
  const card = (
    <div className="w-[360px] max-w-[calc(100vw-2rem)] sm:w-[450px] sm:max-w-none h-[350px] bg-[#101010] text-white p-4 rounded-2xl flex-shrink-0">
      <div className="relative h-full w-full overflow-hidden rounded-2xl">
        <Image
          src={imageSrc}
          alt={name}
          fill
          sizes="(max-width: 640px) 360px, 450px"
          className="object-cover duration-200"
        />
        <h3 className={`absolute bottom-0 left-0 right-0 flex min-h-[64px] items-center justify-center bg-[#191919de] px-4 text-center text-[26px] leading-tight ${leagueBold.className}`}>
          {name}
        </h3>
      </div>
    </div>
  );

  if (!link) {
    return card;
  }

  return (
    <Link
      href={link}
      className="flex-shrink-0 rounded-2xl transition-all duration-200 hover:scale-[103%] hover:opacity-75 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
    >
      {card}
    </Link>
  );
};

export default ScrollableItemGrid;
