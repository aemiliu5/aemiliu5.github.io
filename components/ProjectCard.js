import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { leagueBold, dmSans } from '../utils/fonts';
import { categories } from '../utils/categories';

// One preset per place the card appears; class strings stay literal so Tailwind keeps them.
const variants = {
  // 75vw on phones lets the next card peek in, so the strip reads as swipeable
  work: { width: "w-[360px] max-w-[75vw] sm:w-[480px] sm:max-w-none", card: "", image: "h-[240px] sm:h-[300px]", title: "text-[1.875rem]", sizes: "(max-width: 640px) 75vw, 480px" },
  featured: { width: "w-[360px] max-w-[calc(100vw-2rem)] sm:w-[450px] sm:max-w-none", card: "h-[350px]", image: "h-full", title: "text-[1.625rem]", sizes: "(max-width: 640px) 360px, 450px" },
  // Fluid: fills its grid column up to 400px, so two columns fit on tablets
  games: { width: "w-full max-w-[400px]", card: "h-[300px]", image: "h-full", title: "text-[1.625rem]", sizes: "(max-width: 768px) 100vw, 400px" },
};

const ProjectCard = ({ imageSrc, name, link = "", description, category, variant = "games" }) => {
  const v = variants[variant];
  const categoryMeta = categories[category];

  // The width goes on the outermost element (the Link when there is one) so grids and the strip size it.
  const card = (
    <div className={`${link ? "w-full" : v.width} ${v.card} bg-[#101010] text-white p-4 rounded-2xl flex-shrink-0`}>
      <div className={`relative ${v.image} w-full overflow-hidden rounded-2xl`}>
        <Image
          src={imageSrc}
          alt={name}
          fill
          sizes={v.sizes}
          className="object-cover duration-200"
        />
        {categoryMeta && (
          <span
            className={`absolute top-2 left-2 rounded-full px-3 py-1 text-[0.8125rem] ${dmSans.className}`}
            style={{ backgroundColor: categoryMeta.color }}
          >
            {categoryMeta.label}
          </span>
        )}
        <h3 className={`absolute bottom-0 left-0 right-0 flex min-h-[64px] items-center justify-center bg-[#191919de] px-4 text-center ${v.title} leading-tight ${leagueBold.className}`}>
          {name}
        </h3>
      </div>
      {description && (
        <div className="mt-4 min-h-[80px]">
          <p className="text-[1.25rem] text-gray-300">{description}</p>
        </div>
      )}
    </div>
  );

  if (!link) {
    return card;
  }

  return (
    <Link
      href={link}
      className={`${v.width} flex flex-shrink-0 rounded-2xl transition-all duration-200 hover:scale-[103%] hover:opacity-75 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white`}
    >
      {card}
    </Link>
  );
};

export default ProjectCard;
