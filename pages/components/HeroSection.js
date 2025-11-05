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
		<div className="flex flex-col md:flex-row justify-center">
			<div
				className={`text-[32px] ${dmSans.className} text-center sm:text-left sm:text-[48px] sm:px-16 md:px-4 sm:py-48 pt-96`}
			>
				Hello there!<br />
				<div className={`text-[32px] ${dmSans.className} text-center sm:text-left sm:text-[64px] leading-[1.3] py-3`}>
					I'm <b>Aimilios Seimenis</b><br />
					& I work on:
				</div>
				<div className="slidingTextContainer translate-x-[-50%] sm:translate-x-0">
					<div
						className={`slidingText text-[32px] sm:text-[85px] bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 text-transparent bg-clip-text ${leagueBold.className}`}
					>
						{phrases[currentPhrase]}
					</div>
				</div>
			</div>

			<div
				className="sm:w-[500px] sm:h-[500px] mb-32 sm:py-36 sm:ml-16 sm:object-right sm:mb-64 sm:scale-100 sm:translate-y-0 relative -translate-y-[57vh] scale-75 object-center"
			>
				<Image
					className="absolute top-35 left-0 brightness-[33%]"
					src="/glow.png"
					width={600}
					height={600}
					alt="Aimilios"
				/>
				<Image
					className="absolute top-35 left-0 scale-[95%]"
					src="/aimilios.png"
					width={600}
					height={600}
					alt="Aimilios"
				/>
				<Image
					className={`absolute top-35 left-0 scale-105 hover:-hue-rotate-[60deg] hover:scale-[115%] transition-all ${
						rotate ? "rotate-animation" : ""
					}`}
					src="/crosshair.png"
					width={840}
					height={840}
					alt="Aimilios"
					id="animatedButton"
					onClick={handleClick}
				/>
			</div>
		</div>
	);
};

export default HeroSection;

