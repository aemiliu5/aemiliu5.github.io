import React from 'react';
import TextDivider from './TextDivider';
import ScrollableItemGrid from './ScrollableItemGrid';
import StyledButton from './StyledButton';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const personalProjects = [
	{
		imageSrc: "/chuckles.png",
		name: "CHUCKLES WITH THE FURRY CROWN",
		link: "https://globalgamejam.org/games/2024/jester-2",
	},
	{
		imageSrc: "/paternitree.png",
		name: "PATERNITREE",
		link: "https://nickzouk.itch.io/paternitree",
	},
	{
		imageSrc: "/bubblin.png",
		name: "BUBBLIN' TO THE TOP!",
		link: "https://globalgamejam.org/games/2025/cat-bubble-1",
	},
	{
		imageSrc: "/glitsa.jpg",
		name: "GLITSA",
		link: "https://aemiliu5.itch.io/glitsa",
	},
	{
		imageSrc: "/hymettus.png",
		name: "HYMETTUS: THE HIDDEN LAB",
		link: "https://aemiliu5.itch.io/hymettus",
	},
	{
		imageSrc: "/baggatch.png",
		name: "BAGGATCH",
		link: "https://nickzouk.itch.io/baggatch/",
	},
];

const PersonalProjectsSection = () => {
	const [ref, isVisible] = useScrollAnimation({ threshold: 0.1 });
	const [gridRef, gridVisible] = useScrollAnimation({ threshold: 0.1, rootMargin: '0px 0px -100px 0px' });
	const [buttonRef, buttonVisible] = useScrollAnimation({ threshold: 0.1, rootMargin: '0px 0px -100px 0px' });

	return (
		<>
			<div className="mt-24" />

			<div ref={ref} className={`scroll-fade-in ${isVisible ? 'visible' : ''}`}>
				<TextDivider className="flex-row" text="PERSONAL PROJECTS" />
			</div>

			<div ref={gridRef} className={`grid grid-cols-1 min-[1340px]:grid-cols-2 min-[1600px]:grid-cols-3 gap-x-8 gap-y-8 mt-16 px-4 sm:px-8 min-[1340px]:px-16 min-[1600px]:px-32 justify-items-center scroll-fade-in ${gridVisible ? 'visible' : ''}`}>
				{personalProjects.map((project, index) => (
					<ScrollableItemGrid
						key={index}
						imageSrc={project.imageSrc}
						name={project.name}
						link={project.link}
					/>
				))}
			</div>

			<div ref={buttonRef} className={`flex flex-row gap-x-12 mt-12 sm:mb-16 justify-center scroll-fade-in ${buttonVisible ? 'visible' : ''}`}>
				<StyledButton href="/games">
					VIEW ALL
				</StyledButton>
			</div>
		</>
	);
};

export default PersonalProjectsSection;

