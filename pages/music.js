import React from "react";
import Head from "next/head";
import Layout from "./components/Layout";
import { league, leagueBold, dmSans } from "../utils/fonts";
import TextDivider from "./components/TextDivider";
import SoundCloudEmbed from "./components/SoundCloudEmbed";
import Footer from "./components/Footer";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const tracks = [
	{ title: "Neon City", url: "https://soundcloud.com/aemiliu5/neon-city" },
	{ title: "Voyage into The Depths", url: "https://soundcloud.com/aemiliu5/voyage-into-the-depths" },
];

function CompositionsSection() {
	const [ref, isVisible] = useScrollAnimation({ threshold: 0.1 });

	return (
		<div ref={ref} className={`mt-4 scroll-fade-in ${isVisible ? "visible" : ""}`}>
			<TextDivider text="COMPOSITIONS" />

			<div className="flex justify-center mt-12 mb-20 px-6 sm:px-12">
				<div className="w-full max-w-[1200px] grid grid-cols-1 lg:grid-cols-2 gap-x-10 gap-y-14">
					{tracks.map(({ title, url }) => (
						<div key={url} className="flex flex-col items-center gap-4">
							<div className="w-full hover:scale-[1.02] transition-transform duration-200">
								<SoundCloudEmbed trackUrl={url} title={title} />
							</div>
							<a
								href={url}
								target="_blank"
								rel="noopener noreferrer"
								className={`${leagueBold.className} text-[24px] uppercase tracking-wide hover:text-[#3EB17E] transition-colors rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white`}
							>
								{title}
							</a>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

export default function Music() {
	return (
		<>
			<Layout>
				<div id="home" className="relative flex items-center justify-center w-full h-full">
					<Head>
						<title>Aimilios Seimenis - Game Programmer</title>
						<link rel="icon" href="/favicons/favicon.ico" />
					</Head>

					<main className={`relative text-white ${league.className} page-background w-full h-full`}>
						<div className="flex items-center">
							<div className="p-6 sm:mx-48 h-[25%]">
								<div className={`${leagueBold.className} text-[40px] sm:text-[60px] text-bold`}>MUSIC</div>
								<div className={`${dmSans.className} text-[18px] leading-6 mt-8 sm:mt-0 sm:leading-normal sm:text-[18px] max-w-[70ch]`}>
									<p>
										I've always loved music and wanted to make my own. It started with the ringtone composers on my grandparents' old Nokia and Sony Ericsson phones; as a teenager it became piano lessons, a <b>Novation MiniNova</b> and <b>GarageBand</b>. For years I wrote little melodies that never grew into songs. Lately I've made a point of learning what makes a track whole, from structure to melody, and seeing them through. The finished ones are below.
									</p>
									<p className="mt-4">
										I also play keyboard in <b>L.N.P.</b>, recording and performing live with the band.
									</p>
								</div>
							</div>
						</div>

						<CompositionsSection />

						<Footer />
					</main>
				</div>
			</Layout>
		</>
	);
}
