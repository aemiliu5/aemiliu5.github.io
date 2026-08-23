import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { league, leagueBold, dmSans } from '../../utils/fonts';

const phrases = [
	"VIDEO GAMES",
	"AR/VR",
	"WEB DEVELOPMENT",
	"PHOTOGRAPHY",
	"VIDEOGRAPHY",
];

const HeroSection = () => {
	const [currentPhrase, setCurrentPhrase] = useState(0);
	const [rotate, setRotate] = useState(false);
	const [isAnimating, setIsAnimating] = useState(false);

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentPhrase((prev) => (prev + 1) % phrases.length);
		}, 2500);
		return () => clearInterval(interval);
	}, []);

	const handleClick = () => {
		if (isAnimating) return;
		setIsAnimating(true);
		setRotate(true);
		setTimeout(() => {
			setRotate(false);
			setIsAnimating(false);
		}, 500);
	};

	return (
		<div className="flex flex-col-reverse md:flex-row justify-center items-center md:items-stretch mt-[100px] md:mt-0">
			<div
				className={`text-[32px] ${dmSans.className} text-center sm:text-left sm:text-[48px] sm:px-16 md:px-4 pt-6 pb-16 sm:py-48`}
			>
				Hello there!<br />
				<div className={`text-[32px] ${dmSans.className} text-center sm:text-left sm:text-[64px] leading-[1.3] py-3`}>
					I'm <b>Aimilios Seimenis</b><br />
					& I work on:
				</div>
				<div className="slidingTextContainer relative h-[48px] sm:h-[120px]">
					<div
						className={`slidingText text-[32px] sm:text-[85px] bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 text-transparent bg-clip-text ${leagueBold.className}`}
					>
						{phrases[currentPhrase]}
					</div>
				</div>
			</div>

			{/* Desktop: original left-0 layers + py-36 / ml-16 / mb-64.
			    Mobile: scale-75 + self-center so the frame sits in the middle of the column. */}
			<div
				className="relative w-[500px] h-[500px] scale-75 origin-center -m-[62.5px] mb-[-40px] self-center sm:self-auto sm:m-0 sm:py-36 sm:ml-16 sm:mb-64 sm:scale-100 sm:translate-y-0 flex-shrink-0"
			>
				<Image
					className="absolute left-0 brightness-[33%]"
					src="/glow.png"
					width={600}
					height={600}
					alt=""
					aria-hidden="true"
					priority
				/>
				<Image
					className="absolute left-0 scale-[95%]"
					src="/aimilios.png"
					width={600}
					height={600}
					alt="Portrait of Aimilios Seimenis"
					priority
				/>
				<Image
					className={`absolute left-0 scale-105 hover:-hue-rotate-[60deg] hover:scale-[115%] transition-all cursor-pointer ${
						rotate ? "rotate-animation" : ""
					}`}
					src="/crosshair.png"
					width={840}
					height={840}
					alt=""
					aria-hidden="true"
					id="animatedButton"
					onClick={handleClick}
				/>
			</div>
		</div>
	);
};

export default HeroSection;
