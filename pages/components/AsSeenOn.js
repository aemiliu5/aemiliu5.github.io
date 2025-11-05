import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { leagueBold } from '../../utils/fonts';

const mediaOutlets = [
	{
		name: "IGN Greece",
		href: "https://gr.ign.com/abtos-covert/113879/review/abtos-covert-review",
		imageSrc: "/logos/ign-greece.png",
		width: 120,
		height: 60,
		className: "invert grayscale",
	},
	{
		name: "PC Mag Greece",
		href: "https://gr.pcmag.com/games-reviews/46247/abtos-covert-review",
		imageSrc: "/logos/pcmag-greece.png",
		width: 40,
		height: 50,
		className: "grayscale",
	},
	{
		name: "Unboxholics",
		href: "https://unboxholics.com/news/gaming/109811-to-abtos-covert-einai-to-neo-horror-paichnidi-apo-ellines-developers-vinteo",
		imageSrc: "/logos/unboxholics.png",
		width: 180,
		height: 60,
		className: "grayscale",
	},
	{
		name: "Enternity",
		href: "https://www.enternity.gr/Article/Games/News/kykloforise-to-elliniko-abtos-covert-videogame-trailer/85181.html",
		imageSrc: "/logos/enternity.png",
		width: 200,
		height: 60,
		className: "grayscale",
	},
	{
		name: "Star Channel",
		href: "https://youtu.be/si1kMa8ayxM?si=YP8_KThLO0HiljXP&t=40",
		imageSrc: "/logos/star-channel.png",
		width: 60,
		height: 60,
		className: "grayscale invert",
	},
	{
		name: "COSMOTE TV",
		href: "https://youtu.be/VUh3EQRw_4Q?si=EabY-Pkp1MCn1I8Q&t=676",
		imageSrc: "/logos/cosmote-tv.png",
		width: 240,
		height: 60,
		className: "grayscale brightness-75 contrast-150",
	},
];

const AsSeenOn = () => {
	return (
		<div className="mt-8">
			<div className={`text-[24px] ${leagueBold.className} sm:text-[32px] font-semibold`}>
				AS SEEN ON
			</div>
			<div className="grid grid-cols-6 gap-6 items-center justify-items-center max-w-4xl mx-auto">
				{mediaOutlets.map((outlet) => (
					<Link
						key={outlet.name}
						href={outlet.href}
						className="hover:opacity-80 transition-opacity"
						target="_blank"
						rel="noopener noreferrer"
					>
						<Image
							src={outlet.imageSrc}
							alt={outlet.name}
							width={outlet.width}
							height={outlet.height}
							className={outlet.className}
						/>
					</Link>
				))}
			</div>
		</div>
	);
};

export default AsSeenOn;

