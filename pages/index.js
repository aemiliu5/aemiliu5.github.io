// pages/index.js (or your Home component file)
import React, { useState, useEffect } 	from 'react';
import Head 							from 'next/head';
import Image 							from 'next/image';
import Link 							from 'next/link';
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

const phrases = [
	"VIDEO GAMES",
	"AR/VR",
	"WEB DEVELOPMENT",
	"PHOTOGRAPHY",
	"VIDEOGRAPHY",
];

export default function Home() {
	const [currentPhrase, setCurrentPhrase] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentPhrase((prev) => (prev + 1) % phrases.length);
		}, 2500);
		return () => clearInterval(interval);
	}, []);

	const [rotate, setRotate] = useState(false);
	const [isAnimating, setIsAnimating] = useState(false);

	const handleClick = () => {
		if (isAnimating) return; // Prevent clicks during animation

		setIsAnimating(true);
		// Trigger the rotation animation
		setRotate(true);
		// Remove the animation class after it completes
		setTimeout(() => { setRotate(false); setIsAnimating(false) }, 500); // Adjust duration to match CSS
		// animation duration

	};

	return (
		<>
			<Layout>
				<div id="home" className="relative flex items-center justify-center w-full h-full">
					<Head>
						<title>Aimilios Seimenis - Game Programmer</title>
						<link rel="icon" href="/favicons/favicon.ico" />
					</Head>

<main className={`relative text-white ${league.className} bg-[#070707] w-full`}>
  <section className="flex flex-col md:flex-row items-center justify-between gap-12 max-w-[1100px] mx-auto px-6 sm:px-12 py-20 sm:py-28 min-h-[calc(100vh-96px)]">
    <div className="w-full max-w-xl text-center md:text-left">
      <p className="text-[32px] md:text-[42px] leading-tight">Hello there!</p>
      <div className="text-[32px] md:text-[64px] leading-[1.25] py-6">
        I'm Aimilios Seimenis<br />& I work on:
      </div>
      <div className="slidingTextContainer translate-x-[-50%] sm:translate-x-0 md:translate-x-0">
        <div className={`slidingText text-[32px] md:text-[72px] bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 text-transparent bg-clip-text ${leagueBold.className}`}>
          {phrases[currentPhrase]}
        </div>
      </div>
    </div>

    <div className="relative w-full max-w-[320px] sm:max-w-[420px] md:max-w-[500px] aspect-square mx-auto md:mx-0 flex items-center justify-center">
      <Image className="absolute inset-0 brightness-[33%]" src="/glow.png" fill alt="Aimilios" />
      <Image className="absolute inset-0 scale-[95%]" src="/aimilios.png" fill alt="Aimilios" />
      <Image
        className={`absolute inset-0 scale-105 hover:-hue-rotate-[60deg] hover:scale-[115%] transition-all ${rotate ? 'rotate-animation' : ''}`}
        src="/crosshair.png"
        fill
        alt="Aimilios"
        id="animatedButton"
        onClick={handleClick}
      />
    </div>
  </section>

						<TextDivider className="flex-row" text="ABTOS COVERT"/>

						<div className="flex flex-col justify-center">
							<div className="mt-8 justify-items-center items-center">
								<Carousel/>
							</div>

							<div className="text-[16px] sm:text-[28px] text-center mx-8 sm:mx-48 my-8">
								Abtos Covert is a survival horror game in which you play a lone soldier, tasked to guard
								a remote outpost in the Greek mountains. The player must fend off the mysterious
								entities haunting the outpost and find clues from previous soldiers who lived to tell
								the tale.

								<br/><br/>Developed by Team Abtos and published by Iphigames, Abtos Covert was released
								on Steam on December 8, 2023 to positive reviews.
								<br/><br/>The game received substantial press coverage from
								<Link href={"https://gr.ign.com/abtos-covert/113879/review/abtos-covert-review"}> IGN
									Greece</Link>,
								<Link href={"https://gr.pcmag.com/games-reviews/46247/abtos-covert-review"}> PC Mag
									Greece</Link>,
								<Link
									href={"https://unboxholics.com/news/gaming/109811-to-abtos-covert-einai-to-neo-horror-paichnidi-apo-ellines-developers-vinteo"}> Unboxholics</Link>,
								<Link
									href={"https://www.enternity.gr/Article/Games/News/kykloforise-to-elliniko-abtos-covert-videogame-trailer/85181.html"}> Enternity</Link> and
								reported on TV by
								<Link href={"https://youtu.be/si1kMa8ayxM?si=YP8_KThLO0HiljXP&t=40"}> Star
									Channel</Link> and
								<Link href={"https://youtu.be/VUh3EQRw_4Q?si=EabY-Pkp1MCn1I8Q&t=676"}> COSMOTE TV</Link>.

								<br/><br/>

								<SocialMediaLink fa={faSteam}
												 href="https://store.steampowered.com/app/1694230/Abtos_Covert/"
												 size="text-[60px] sm:text-[100px] hover:rotate-[20deg] hover:text-[#0ea5e9] transition-all duration-400 hover:scale-105 mb-16"/>
							</div>
						</div>

						<TextDivider className="flex-row" text="PROFESSIONAL WORK"/>

						<div className="mt-16 sm:px-[170px] overflow-hidden">
							<div
								className="flex overflow-x-scroll scrollbar scrollbar-thumb-gray-400 space-x-8 h-[400px] sm:h-[500px]">
								<ScrollableItem
									imageSrc="/sixt.png"
									name="SIXT CARSLING"
									description="Arcade videogame for SIXT's Greek airport branches, rewarding customers while they wait for car pickup."
								/>
								<ScrollableItem
									link="https://www.youtube.com/watch?v=zWEElV3jX3k"
									imageSrc="/opap.png"
									name="OPAP MARATHON VR"
									description="Running game with parallel projection to a video-wall, played using a KAT VR for Athens Marathon 2023."
								/>
								<ScrollableItem
									link="https://vimeo.com/884704127"
									imageSrc="/magic_carpet.jpg"
									name="MAGIC CHRISTMAS CARPET"
									description="The biggest interactive projection mapping project in Greece, made for The Ellinikon in 2022."
								/>
								<ScrollableItem
									imageSrc="/cosmopop.png"
									name="COSMOTE APPS"
									description="Quiz applications made for Cosmopop 2021, organized by COSMOTE, the largest telecom company in Greece."
								/>
								<ScrollableItem
									link="https://eduapps.gr/"
									imageSrc="/istoria_app.jpg"
									name="ISTORIA APP"
									description="Educational application for the preparation of high-school students on Greek university entrance exams."
								/>
							</div>
						</div>

						<div className="mt-24"/>

						<TextDivider className="flex-row" text="PERSONAL PROJECTS"/>

						<div
							className="grid grid-cols-1 min-[1340px]:grid-cols-2 min-[1600px]:grid-cols-3 gap-x-8 gap-y-8 mt-16 px-4 sm:px-8 min-[1340px]:px-16 min-[1600px]:px-32 justify-items-center">
							<ScrollableItemGrid
								imageSrc="/chuckles.png"
								name="CHUCKLES WITH THE FURRY CROWN"
								link="https://globalgamejam.org/games/2024/jester-2"
							/>
							<ScrollableItemGrid
								imageSrc="/paternitree.png"
								name="PATERNITREE"
								link="https://nickzouk.itch.io/paternitree"
							/>
							<ScrollableItemGrid
								imageSrc="/bubblin.png"
								name="BUBBLIN' TO THE TOP!"
								link="https://globalgamejam.org/games/2025/cat-bubble-1"
							/>
							<ScrollableItemGrid
								imageSrc="/glitsa.jpg"
								name="GLITSA"
								link="https://aemiliu5.itch.io/glitsa"
							/>
							<ScrollableItemGrid
								imageSrc="/hymettus.png"
								name="HYMETTUS: THE HIDDEN LAB"
								link="https://aemiliu5.itch.io/hymettus"
							/>
							<ScrollableItemGrid
								imageSrc="/baggatch.png"
								name="BAGGATCH"
								link="https://nickzouk.itch.io/baggatch/"
							/>
						</div>


						<div className="flex flex-row gap-x-12 mt-12 sm:mb-32 justify-center">
							<Link href="/games">
								<button type="button"
										className="text-white text-[30px] text-center bg-gradient-to-br from-green-400 to-blue-600 hover:ring-2 hover:ring-green-200 duration-400 transition-all rounded-full px-12 py-2">
									VIEW ALL
								</button>
							</Link>
						</div>

						<div className="mt-24"/>

						<Footer/>

					</main>
				</div>
			</Layout>
		</>
	);
}
