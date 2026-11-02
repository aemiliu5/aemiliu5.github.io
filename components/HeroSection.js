import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { league, leagueBold, dmSans } from '../utils/fonts';

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
		<div className="flex flex-col-reverse lg:flex-row justify-center items-center lg:items-stretch mt-[100px] lg:mt-0">
			<div
				className={`text-[2rem] ${dmSans.className} text-center lg:text-left sm:text-[2.5rem] lg:text-[3rem] lg:px-4 pt-6 pb-16 lg:py-48`}
			>
				Hello there!<br />
				<div className={`text-[2rem] ${dmSans.className} text-center lg:text-left sm:text-[3rem] lg:text-[4rem] leading-[1.3] py-3`}>
					I'm <b>Aimilios Seimenis</b><br />
					& I work on:
				</div>
				{/* Sized so the longest phrase ("PHOTOGRAPHY") fits the column at every width */}
				<div className="slidingTextContainer relative h-[3rem] sm:h-[5rem] xl:h-[7.5rem]">
					<div
						className={`slidingText text-[2rem] sm:text-[3.5rem] xl:text-[5.3125rem] bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 text-transparent bg-clip-text ${leagueBold.className}`}
					>
						{phrases[currentPhrase]}
					</div>
				</div>
			</div>

			{/* Desktop (lg+): side by side, full size; mr-6 keeps the crosshair's 105% scale on screen.
			    Phones: scale-60, tablets: scale-75, centred above the text. Negative margins cancel the unscaled box. */}
			<div
				className="relative w-[500px] h-[500px] scale-[0.6] -m-[100px] mb-[-78px] sm:scale-75 sm:-m-[62.5px] sm:mb-[-40px] origin-center self-center lg:self-auto lg:m-0 lg:mr-6 lg:py-36 lg:ml-16 lg:mb-64 lg:scale-100 flex-shrink-0"
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
