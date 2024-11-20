// pages/index.js (or your Home component file)
import React, { useState, useEffect } 	from 'react';
import Head 							from 'next/head';
import Image 							from 'next/image';
import Layout 							from './components/Layout'; // Adjust path as necessary
import { league, leagueBold } 			from '../utils/fonts'; // Adjust path as necessary
import TextDivider 						from './components/TextDivider';
import SocialMediaLink 					from './components/SocialMediaLink';
import Carousel 						from './components/Carousel';
import ScrollableItem 					from './components/ScrollableItem'; // Import ScrollableItem component
import ScrollableItemGrid 				from './components/ScrollableItemGrid'; // Import ScrollableItemGrid component
import Footer 							from './components/Footer';

import { faSteam } from '@fortawesome/free-brands-svg-icons';

import '@fortawesome/fontawesome-svg-core/styles.css';
import 'tailwind-scrollbar';

export default function About() {

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
								<div className={`${leagueBold.className} text-[40px] sm:text-[60px] text-bold`}>ABOUT</div>
								<div className={`${league.className} text-[26px] sm:text-[32px]`}>My path to Game Development.</div>
								<div className={`${league.className} text-[18px] leading-6 mt-8 sm:mt-0 sm:leading-normal sm:text-[24px]`}>Hey there! I'm Aimilios, a passionate, detail-oriented game developer from Athens, Greece. Video games are my main line of work, but other areas I work on include web development, mobile applications, virtual & augmented reality, and non-game interactive media. During my game development journey, I've done many interesting things along the way.</div>
                        	</div>
                    	</div>

						{/* New Section: Alternating Images and Text */}
						<div className="sm:mx-48">
							{/* First Pair - Image Left, Text Right */}
							<div className="flex flex-col lg:flex-row items-center justify-center">
							<div className="w-full sm:sm:h-[24em] lg:w-1/2 p-6 flex justify-center items-center">
									<Image 
										src="/jams.png" 
										alt="Aimilios Seimenis and Team «Main Einai Mono Mia» at the Serafeio, Athens 2020."
										width={550}
										height={300}
										className="rounded-3xl border-double border-4 border-neutral-200 shadow-inner hover:scale-105 hover:rotate-[-1deg] transition-all duration-300"
									/>
								</div>
								<div className="w-full lg:w-1/2 p-6">
									<h2 className={`${leagueBold.className} text-[32px] underline`}>Game Jams</h2>
									<p className={`${league.className} text-[18px] sm:text-[24px]`}>
										I'm an avid participant of game jams and love the creative process that goes into them. Quick thinking, innovative ideas, community, and team work.
										<br /><br />
										I've participated over 15 times in various game jams: The Global Game Jam [Athens], Ludum Dare, The Extra Credits Jam, among others, usually as the team lead and main programmer.
									</p>
								</div>
							</div>

							{/* Second Pair - Text Left, Image Right */}
							<div className="flex flex-col items-center justify-center lg:flex-row-reverse">
								<div className="w-full sm:h-[24em] lg:w-1/2 p-6 flex justify-center items-center">
									<Image 
										src="/sae.png"  
										alt="Game Project 2"
										width={550}
										height={300}
										className="rounded-xl border-double border-4 border-neutral-200 shadow-inner hover:scale-105 hover:rotate-[1deg] transition-all duration-300"
									/>
								</div>
								<div className="w-full lg:w-1/2 p-6">
									<h2 className={`${leagueBold.className} text-[32px] underline`}>Middlesex University</h2>
									<p className={`${league.className} text-[18px] sm:text-[24px]`}>
										I have a Bachelor's degree with Honours in Game Programming from Middlesex University, where I spent three years honing my skills both in solo and team projects. My thesis was on 
										"Using Non-Speech Voice as Input in Video Games for Accessibility Purposes".
									</p>
								</div>
							</div>

							{/* Third Pair - Image Left, Text Right */}
							<div className="flex flex-col lg:flex-row items-center justify-center">
							<div className="w-full sm:h-[24em] lg:w-1/2 p-6 flex justify-center items-center">
									<Image 
										src="/iphi.jpg"  
										alt="Game Project 3"
										width={550}
										height={300}
										className="rounded-xl border-double border-4 border-neutral-200 shadow-inner hover:scale-105 hover:rotate-[-1deg] transition-all duration-300"
									/>
								</div>
								<div className="w-full lg:w-1/2 p-6">
									<h2 className={`${leagueBold.className} text-[32px] underline`}>IPHIGAMES</h2>
									<p className={`${league.className} text-[18px] sm:text-[24px]`}>
										I've spent most of my professional life working for IPHIGAMES, a visionary startup, part of Tomako Group, an established player in the creative media field in Greece. Aside from games, during my time here I've worked with technologies like projection mapping and VR treadmills.
									</p>
								</div>
							</div>

							{/* Fourth Pair - Text Left, Image Right */}
							<div className="flex flex-col items-center justify-center lg:flex-row-reverse">
							<div className="w-full sm:h-[24em] lg:w-1/2 p-6 flex justify-center items-center">
									<Image 
										src="/gameathlon.jpg" 
										alt="Game Project 4"
										width={550}
										height={300}
										className="rounded-xl border-double border-4 border-neutral-200 shadow-inner hover:scale-105 hover:rotate-[1deg] transition-all duration-300"
									/>
								</div>
								<div className="w-full lg:w-1/2 p-6">
									<h2 className={`${leagueBold.className} text-[32px] underline`}>GameAthlon & JOIST Larisa</h2>
									<p className={`${league.className} text-[18px] sm:text-[24px]`}>
										I've had the opportunity to speak about my game development experience in some of the biggest gaming events in the country, including GameAthlon 2023 at the Tae Kwon Do Stadium and the game developer meetup in JOIST Larisa in 2024.
									</p>
								</div>
							</div>
						</div>

						<div className="pt-8 sm:pt-32">
                    		<Footer />
						</div>
					</main>
				</div>
			</Layout>
		</>
	);
}
