import React, { useState } from 'react';
import Layout from '../components/Layout'; // Adjust path as necessary
import { league, leagueBold, dmSans } from '../utils/fonts'; // Adjust path as necessary
import Footer from '../components/Footer';
import ProjectCard from '../components/ProjectCard';
import { categories, categoryOrder } from '../utils/categories';
import { games } from '../utils/games';

export default function Games() {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [isFading, setIsFading] = useState(false);

    // Handle the filtering logic
    const filteredProjects = selectedCategory
        ? games.filter(project => project.category === selectedCategory)
        : games;

    // Handle category selection/deselection with fade animation
    const handleCategorySelect = (category) => {
        const newCategory = selectedCategory === category ? null : category;
        
        // Start fade-out animation
        setIsFading(true);
        
        // After fade-out completes, update category and fade in
        setTimeout(() => {
            setSelectedCategory(newCategory);
            // Small delay to ensure DOM update before fade-in
            setTimeout(() => {
                setIsFading(false);
            }, 10);
        }, 300); // 0.3 seconds for fade-out
    };

    return (
        <>
            <Layout title="Games" description="Every game Aimilios Seimenis has programmed, from game jam entries and student projects to Abtos Covert on Steam.">
                <div id="home" className="relative flex items-center justify-center w-full h-full">
                    <main className={`relative text-white ${league.className} page-background w-full h-full`}>
                        <div className="flex items-center w-full">
                            <div className="p-6 lg:mx-48 h-[25%]">
                                <div className={`${leagueBold.className} text-[2.5rem] sm:text-[3.75rem] text-bold`}>GAMES</div>
                                <div className={`${dmSans.className} text-[1.125rem] leading-6 mt-8 sm:mx-0 sm:mt-0 sm:leading-normal sm:text-[1.125rem] max-w-[70ch]`}>This is the complete list of projects I've been involved in as a game programmer, sorted from most recent and also categorized for your convenience. Click on the categories below to filter projects accordingly.</div>

                                {/* Filter Buttons with fade effect */}
                                <div className="flex flex-col md:flex-row gap-3 md:gap-8 justify-center items-center mt-8 mb-4">
                                    {categoryOrder.map((key) => {
                                        const isSelected = selectedCategory === key;
                                        return (
                                            <button
                                                key={key}
                                                type="button"
                                                aria-pressed={isSelected}
                                                className="text-white text-[1.25rem] text-center rounded-full px-6 md:px-12 py-2 transition-all duration-300 whitespace-nowrap hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                                                style={{
                                                    // Fade the pill background only, so the label keeps full contrast
                                                    backgroundColor: `${categories[key].color}${!selectedCategory || isSelected ? '' : '73'}`,
                                                }}
                                                onClick={() => handleCategorySelect(key)}
                                            >
                                                {categories[key].label}
                                            </button>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>

                        {/* Wrapper to center the grid */}
                        <div className="flex justify-center mt-12 mb-20 px-4 sm:px-6">
                            <div className="w-full max-w-[1200px]">
                                <div className={`grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-10 gap-y-14 justify-items-center transition-opacity duration-300 ${isFading ? 'opacity-0' : 'opacity-100'}`}>
                                    {filteredProjects.map((project, index) => (
                                        <ProjectCard
                                            key={project.link ?? index}
                                            imageSrc={project.imageSrc}
                                            name={project.name}
                                            link={project.link}
                                            category={project.category}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>

                        <Footer />
                    </main>
                </div>
            </Layout>
        </>
    );
}
