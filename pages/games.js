import React, { useState } from 'react';
import Head from 'next/head';
import Layout from './components/Layout'; // Adjust path as necessary
import { league, leagueBold } from '../utils/fonts'; // Adjust path as necessary
import Footer from './components/Footer';
import GamesItem from './components/GamesItem'; // Import ScrollableItemGrid component

export default function Games() {
    const [selectedCategory, setSelectedCategory] = useState(null);

    // Define all projects in an array with their categories
    const projects = [
        { imageSrc: "/bubblin.png",         name: "BUBBLIN' TO THE TOP!",                   link: "https://globalgamejam.org/games/2025/cat-bubble-1",                      category: "jam" },
        { imageSrc: "/chuckles.png",        name: "CHUCKLES WITH THE FURRY CROWN",          link: "https://globalgamejam.org/games/2024/jester-2",                          category: "jam" },
        { imageSrc: "/paternitree.png",     name: "PATERNITREE",                            link: "https://nickzouk.itch.io/paternitree",                                   category: "jam" },
        { imageSrc: "/abtos.jpg",           name: "ABTOS COVERT",                           link: "https://store.steampowered.com/app/1694230/Abtos_Covert/",               category: "personal" },
        { imageSrc: "/audissey.png",        name: "2022: A SPACE AUDISSEY",                 link: "https://drive.google.com/file/d/14sS3vebAAYV8vpeuQ7pmCvkzHnS2-3Oy/view", category: "student" },
        { imageSrc: "/glitsa.jpg",          name: "GLITSA",                                 link: "https://aemiliu5.itch.io/glitsa",                                        category: "student" },
        { imageSrc: "/hymettus.png",        name: "HYMETTUS: THE HIDDEN LAB",               link: "https://aemiliu5.itch.io/hymettus",                                      category: "student" },
        { imageSrc: "/infil.png",           name: "INFILTRATION",                           link: "https://aemiliu5.itch.io/infiltration",                                  category: "student" },
        { imageSrc: "/baggatch.png",        name: "BAGGATCH",                               link: "https://nickzouk.itch.io/baggatch",                                      category: "jam" },
        { imageSrc: "/atermon.png",         name: "ATERMON",                                link: "https://aemiliu5.itch.io/atermon",                                       category: "jam" },
        { imageSrc: "/canine.png",          name: "CANINE INVERSUM",                        link: "https://aemiliu5.itch.io/canine-inversum",                               category: "student" },
        { imageSrc: "/pandormou.png",       name: "PANDORMOU",                              link: "https://aemiliu5.itch.io/pandormou",                                     category: "jam" },
        { imageSrc: "/brekanoid.webp",      name: "BREKANOID",                              link: "https://gamejolt.com/games/brekanoid/473495",                            category: "student" },
        { imageSrc: "/stranded.png",        name: "STRANDED",                               link: "https://v3.globalgamejam.org/2020/games/stranded-1",                     category: "jam" },
        { imageSrc: "/kidnapping.webp",     name: "THE KIDNAPPING",                         link: "https://gamejolt.com/games/the-kidnapping/443473",                       category: "jam" },
        { imageSrc: "/pathway.png",         name: "PATHWAY TO ASCENSION",                   link: "https://aemiliu5.itch.io/pathway-to-ascension",                          category: "jam" },
        { imageSrc: "/alien.webp",          name: "ALIEN ESCAPE",                           link: "https://gamejolt.com/games/alien-escape/383058",                         category: "jam" },
        { imageSrc: "/running.webp",        name: "RUNNING MISADVENTURES",                  link: "https://gamejolt.com/games/running-misadventures/361182",                category: "jam" },
        { imageSrc: "/topdowngrounds.webp", name: "TOPDOWNGROUNDS",                         link: "https://gamejolt.com/games/topdowngrounds/335478",                       category: "jam" },
        { imageSrc: "/soul.webp",           name: "SOUL CHASE",                             link: "https://gamejolt.com/games/soulchase/301656",                            category: "jam" },
        { imageSrc: "/energia.webp",        name: "ENERGIA",                                link: "https://gamejolt.com/games/energia/273401",                              category: "jam" },
        { imageSrc: "/downtop.webp",        name: "THE DOWNTOP MASSACRE: PEPPER INVASION",  link: "https://gamejolt.com/games/the-downtop-massacre-pepper-invasion/217627", category: "jam" },
        { imageSrc: "/nfs.webp",            name: "NEED FOR SHIFT",                         link: "https://gamejolt.com/games/need-for-shift/141974",                       category: "jam" },
        { imageSrc: "/sunflower.webp",      name: "THE DANCING SUNFLOWER",                  link: "https://gamejolt.com/games/the-dancing-sunflower/113845",                category: "jam" },
        { imageSrc: "/nbs.webp",            name: "NOTHING BUT SPACE",                      link: "https://gamejolt.com/games/nothing-but-space/93699",                     category: "personal" },
    ];

    // Handle the filtering logic
    const filteredProjects = selectedCategory
        ? projects.filter(project => project.category === selectedCategory)
        : projects;

    // Handle category selection/deselection
    const handleCategorySelect = (category) => {
        setSelectedCategory(selectedCategory === category ? null : category);
    };

    return (
        <>
            <Layout>
                <div id="home" className="relative flex items-center justify-center w-full h-full">
                    <Head>
                        <title>Aimilios Seimenis - Game Programmer</title>
                        <link rel="icon" href="/favicons/favicon.ico" />
                    </Head>

                    <main className={`relative text-white ${league.className} bg-[#070707] w-full h-full`}>
                        <div className={`flex items-center`}>
                            <div className={`p-6 sm:mx-48 h-[25%]`}>
                                <div className={`${leagueBold.className} text-[40px] sm:text-[60px] text-bold`}>GAMES</div>
                                <div className={`${league.className} text-[26px] sm:text-[32px]`}>The complete library.</div>
                                <div className={`${league.className} text-[18px] leading-6 mt-8 sm:mx-0 sm:mt-0 sm:leading-normal sm:text-[24px]`}>This is the complete list of projects I've been involved in as a game programmer, sorted from most recent and also categorized for your convenience. Click on the categories below to filter projects accordingly.</div>

                                {/* Filter Buttons with fade effect */}
                                <div className="grid grid-cols-3 gap-2 sm:gap-0 sm:mx-32 justify-center mt-8 mb-4">
                                    <button
                                        type="button"
                                        className={`text-white text-[20px] text-center bg-[#5E51CB] rounded-full sm:px-12 py-2 sm:mr-8 transition-opacity duration-300 ${selectedCategory === 'student' ? 'opacity-100' : 'opacity-50 hover:opacity-100'}`}
                                        onClick={() => handleCategorySelect('student')}
                                    >
                                        Student project
                                    </button>
                                    <button
                                        type="button"
                                        className={`text-white text-[20px] text-center bg-[#3EB17E] rounded-full sm:px-12 py-1 sm:py-2 sm:mr-8 transition-opacity duration-300 ${selectedCategory === 'jam' ? 'opacity-100' : 'opacity-50 hover:opacity-100'}`}
                                        onClick={() => handleCategorySelect('jam')}
                                    >
                                        Game Jam
                                    </button>
                                    <button
                                        type="button"
                                        className={`text-white text-[20px] text-center bg-[#9251CB] rounded-full sm:px-12 py-2 sm:mr-8 transition-opacity duration-300 ${selectedCategory === 'personal' ? 'opacity-100' : 'opacity-50 hover:opacity-100'}`}
                                        onClick={() => handleCategorySelect('personal')}
                                    >
                                        Personal Project
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Wrapper to center the grid */}
                        <div className="flex justify-center items-center mt-4 mb-16">
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8 max-w-[120rem] mx-auto px-2">
                                {filteredProjects.map((project, index) => (
                                    <div
                                        key={index}
                                        className="transition-transform transform hover:scale-105"
                                        style={{ animationDelay: `${index * 0.1}s` }} // Staggered animation
                                    >
                                        <GamesItem
                                            imageSrc={project.imageSrc}
                                            name={project.name}
                                            link={project.link}
                                            category={project.category}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>

                        <Footer />
                    </main>
                </div>
            </Layout>
        </>
    );
}
