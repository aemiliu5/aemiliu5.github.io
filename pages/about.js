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
import Link 							from 'next/link';

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
								<div className={`${league.className} text-[18px] leading-6 mt-8 sm:mt-0 sm:leading-normal sm:text-[22px]`}>Hey there! I'm Aimilios, a passionate, detail-oriented <b>software developer</b> from Athens, Greece. I specialize in immersive technologies and game development. I'm currently working in European R&D projects involving virtual and augmented reality, spatial computing, and human-computer interaction. I also have experience in web and mobile application development. Here are some of things I've done along the way.</div>
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
									<p className={`${league.className} text-[18px] sm:text-[20px]`}>
										I'm an avid participant of game jams and love the creative process that goes into them. Quick thinking, innovative ideas, community, and team work.
										<br /><br />
										I've participated over 15 times in various game jams: <b>The Global Game Jam [Athens]</b>, <b>Ludum Dare</b>, <b>The Extra Credits Jam</b>, among others, usually as the team lead and main programmer.
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
									<p className={`${league.className} text-[18px] sm:text-[20px]`}>
										I have a Bachelor's degree with Honours in Game Programming from <b>Middlesex University</b>, where I spent three years honing my skills both in solo and team projects. My thesis was on <Link href="/thesis.pdf">"Using Non-Speech Voice as Input in Video Games for Accessibility Purposes"</Link>.
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
									<p className={`${league.className} text-[18px] sm:text-[20px]`}>
									I worked at <b>IPHIGAMES</b> for two years, developing in-house video games and B2B experiences for a variety of established clients. During my time there, I worked with cutting edge technologies like <b>projection mapping</b> and <b>VR treadmills</b>.
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
									<h2 className={`${leagueBold.className} text-[32px] underline`}>Game Dev Talks</h2>
									<p className={`${league.className} text-[18px] sm:text-[20px]`}>
									I've had the opportunity to speak about my game development experience in some of the biggest gaming events in the country, including <b>GameAthlon 2023</b> at the Tae Kwon Do Stadium and the game developer meetup in <b>JOIST Larisa</b> in 2024. I've also participated in various interviews on podcasts, radio and TV shows promoting <b>Abtos Covert</b>.
									</p>
								</div>
							</div>

							{/* Fifth Pair - Image Left, Text Right */}
							<div className="flex flex-col lg:flex-row items-center justify-center">
							<div className="w-full sm:sm:h-[24em] lg:w-1/2 p-6 flex justify-center items-center">
									<Image 
										src="/isense_koropi_site.png" 
										alt="ISENSE Koropi"
										width={550}
										height={300}
										className="rounded-3xl border-double border-4 border-neutral-200 shadow-inner hover:scale-105 hover:rotate-[-1deg] transition-all duration-300"
									/>
								</div>
								<div className="w-full lg:w-1/2 p-6">
									<h2 className={`${leagueBold.className} text-[32px] underline`}>Research</h2>
									<p className={`${league.className} text-[18px] sm:text-[20px]`}>
										I currently work at the <b>I-SENSEGroup of ICCS</b>, the research branch of the National Technical University of Athens. As part of the <b>Extended Reality</b> team, I develop projects in the fields of digital twins, industrial safety, and human-computer interaction.
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
