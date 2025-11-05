import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Layout from './components/Layout';
import { league, leagueBold, dmSans } from '../utils/fonts';
import Footer from './components/Footer';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

function AboutPair({ imageSrc, imageAlt, imageClass, title, content, isReversed }) {
	const [ref, isVisible] = useScrollAnimation({ threshold: 0.1 });
	
	return (
		<div ref={ref} className={`flex flex-col ${isReversed ? 'items-center justify-center lg:flex-row-reverse' : 'lg:flex-row items-center justify-center'} scroll-fade-in ${isVisible ? 'visible' : ''}`}>
			<div className={`w-full sm:h-[24em] lg:w-1/2 p-6 flex justify-center items-center`}>
				<Image 
					src={imageSrc}
					alt={imageAlt}
					width={550}
					height={300}
					className={imageClass}
				/>
			</div>
			<div className="w-full lg:w-1/2 p-6">
				<h2 className={`${leagueBold.className} text-[32px] underline`}>{title}</h2>
				<p className={`${dmSans.className} text-[18px] sm:text-[16px]`}>
					{content}
				</p>
			</div>
		</div>
	);
}

export default function About() {
	return (
		<>
			<Layout>
				<div id="home" className="relative flex items-center justify-center w-full h-full">
					<Head>
						<title>Aimilios Seimenis - Game Programmer</title>
						<link rel="icon" href="/favicons/favicon.ico" />
					</Head>

					<main className={`relative text-white ${league.className} page-background w-full h-full`}>
                    	<div className={`flex items-center`}>
                        	<div className={`p-6 sm:mx-48 h-[25%]`}>
								<div className={`${leagueBold.className} text-[40px] sm:text-[60px] text-bold`}>ABOUT</div>
								<div className={`${dmSans.className} text-[18px] leading-6 mt-8 sm:mt-0 sm:leading-normal sm:text-[18px]`}>Hey there! I'm Aimilios, a passionate, detail-oriented <b>software developer</b> from Athens, Greece.
								
								<br />
								 I specialize in immersive technologies and game development. I'm currently working on European R&D projects involving virtual and augmented reality, spatial computing, and human-computer interaction. I also have experience in web and mobile application development. Here's a brief overview of my professional journey.</div>
                        	</div>
                    	</div>

						{/* New Section: Alternating Images and Text */}
						<div className="sm:mx-48">
							{/* First Pair - Image Left, Text Right */}
							<AboutPair 
								imageSrc="/jams.png"
								imageAlt="Aimilios Seimenis and Team «Main Einai Mono Mia» at the Serafeio, Athens 2020."
								imageClass="rounded-3xl border-double border-4 border-neutral-200 shadow-inner hover:scale-105 hover:rotate-[-1deg] transition-all duration-300"
								title="Game Jams"
								content={<>I'm an avid participant of game jams and love the creative process that goes into them. Quick thinking, innovative ideas, community, and team work.
									<br /><br />
									I've participated over 15 times in various game jams: <b>The Global Game Jam [Athens]</b>, <b>Ludum Dare</b>, <b>The Extra Credits Jam</b>, among others, usually as the team lead and main programmer.</>}
								isReversed={false}
							/>

							{/* Second Pair - Text Left, Image Right */}
							<AboutPair 
								imageSrc="/sae.png"
								imageAlt="Game Project 2"
								imageClass="rounded-xl border-double border-4 border-neutral-200 shadow-inner hover:scale-105 hover:rotate-[1deg] transition-all duration-300"
								title="Middlesex University"
								content={<>I have a Bachelor's degree with Honours in Game Programming from <b>Middlesex University</b>, where I spent three years honing my skills both in solo and team projects. My thesis was on <Link href="/thesis.pdf">"Using Non-Speech Voice as Input in Video Games for Accessibility Purposes"</Link>.</>}
								isReversed={true}
							/>

							{/* Third Pair - Image Left, Text Right */}
							<AboutPair 
								imageSrc="/iphi.jpg"
								imageAlt="Game Project 3"
								imageClass="rounded-xl border-double border-4 border-neutral-200 shadow-inner hover:scale-105 hover:rotate-[-1deg] transition-all duration-300"
								title="IPHIGAMES"
								content={<>I worked at <b>IPHIGAMES</b> for two years, developing in-house video games and B2B experiences for a variety of established clients. During my time there, I worked with cutting edge technologies like <b>projection mapping</b> and <b>VR treadmills</b>.</>}
								isReversed={false}
							/>

							{/* Fourth Pair - Text Left, Image Right */}
							<AboutPair 
								imageSrc="/gameathlon.jpg"
								imageAlt="Game Project 4"
								imageClass="rounded-xl border-double border-4 border-neutral-200 shadow-inner hover:scale-105 hover:rotate-[1deg] transition-all duration-300"
								title="Game Dev Talks"
								content={<>I've had the opportunity to speak about my game development experience in some of the biggest gaming events in the country, including <b>GameAthlon 2023</b> at the Tae Kwon Do Stadium and the game developer meetup in <b>JOIST Larisa</b> in 2024. I've also participated in various interviews on podcasts, radio and TV shows promoting <b>Abtos Covert</b>.</>}
								isReversed={true}
							/>

							{/* Fifth Pair - Image Left, Text Right */}
							<AboutPair 
								imageSrc="/isense_koropi_site.png"
								imageAlt="ISENSE Koropi"
								imageClass="rounded-3xl border-double border-4 border-neutral-200 shadow-inner hover:scale-105 hover:rotate-[-1deg] transition-all duration-300"
								title="Research"
								content={<>I currently work at the <b>I-SENSEGroup of ICCS</b>, the research branch of the National Technical University of Athens. As part of the <b>Extended Reality</b> team, I develop projects in the fields of digital twins, industrial safety, and human-computer interaction.</>}
								isReversed={false}
							/>
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
