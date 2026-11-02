import React from 'react';
import TextDivider from './TextDivider';
import ProjectCard from './ProjectCard';
import StyledButton from './StyledButton';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { games } from '../utils/games';

const featuredGames = games.filter((game) => game.featured);

const PersonalProjectsSection = () => {
	const [ref, isVisible] = useScrollAnimation({ threshold: 0.1 });
	const [gridRef, gridVisible] = useScrollAnimation({ threshold: 0.1, rootMargin: '0px 0px -100px 0px' });
	const [buttonRef, buttonVisible] = useScrollAnimation({ threshold: 0.1, rootMargin: '0px 0px -100px 0px' });

	return (
		<>
			<div className="mt-24" />

			<div ref={ref} className={`scroll-fade-in ${isVisible ? 'visible' : ''}`}>
				<TextDivider text="PERSONAL PROJECTS" />
			</div>

			<div ref={gridRef} className={`grid grid-cols-1 lg:grid-cols-2 min-[1600px]:grid-cols-3 gap-x-8 gap-y-8 mt-16 px-4 sm:px-8 xl:px-16 min-[1600px]:px-32 justify-items-center scroll-fade-in ${gridVisible ? 'visible' : ''}`}>
				{featuredGames.map((project) => (
					<ProjectCard
						key={project.link}
						imageSrc={project.imageSrc}
						name={project.name}
						link={project.link}
						variant="featured"
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

