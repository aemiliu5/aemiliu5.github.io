import React from 'react';
import TextDivider from './TextDivider';
import ScrollableItem from './ScrollableItem';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const professionalWorkItems = [
	{
		imageSrc: "/sixt.png",
		name: "SIXT CARSLING",
		description: "Arcade videogame for SIXT's Greek airport branches, rewarding customers while they wait for car pickup.",
	},
	{
		link: "https://www.youtube.com/watch?v=zWEElV3jX3k",
		imageSrc: "/opap.png",
		name: "OPAP MARATHON VR",
		description: "Running game with parallel projection to a video-wall, played using a KAT VR for Athens Marathon 2023.",
	},
	{
		link: "https://vimeo.com/884704127",
		imageSrc: "/magic_carpet.jpg",
		name: "MAGIC CHRISTMAS CARPET",
		description: "The biggest interactive projection mapping project in Greece, made for The Ellinikon in 2022.",
	},
	{
		imageSrc: "/cosmopop.png",
		name: "COSMOTE APPS",
		description: "Quiz applications made for Cosmopop 2021, organized by COSMOTE, the largest telecom company in Greece.",
	},
	{
		link: "https://eduapps.gr/",
		imageSrc: "/istoria_app.jpg",
		name: "ISTORIA APP",
		description: "Educational application for the preparation of high-school students on Greek university entrance exams.",
	},
];

const ProfessionalWorkSection = () => {
	const [ref, isVisible] = useScrollAnimation({ threshold: 0.1 });

	return (
		<>
			<div ref={ref} className={`scroll-fade-in ${isVisible ? 'visible' : ''}`}>
				<TextDivider className="flex-row" text="PROFESSIONAL WORK" />
			</div>

			<div className={`mt-16 sm:px-[170px] overflow-hidden scroll-fade-in ${isVisible ? 'visible' : ''}`}>
				<div className="flex overflow-x-scroll scrollbar scrollbar-thumb-gray-400 space-x-8 h-[400px] sm:h-[500px]">
					{professionalWorkItems.map((item, index) => (
						<ScrollableItem
							key={index}
							link={item.link || ""}
							imageSrc={item.imageSrc}
							name={item.name}
							description={item.description}
						/>
					))}
				</div>
			</div>
		</>
	);
};

export default ProfessionalWorkSection;

