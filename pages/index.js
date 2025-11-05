import React from 'react';
import Head from 'next/head';
import Layout from './components/Layout';
import { league } from '../utils/fonts';
import HeroSection from './components/HeroSection';
import AbtosCovertSection from './components/AbtosCovertSection';
import ProfessionalWorkSection from './components/ProfessionalWorkSection';
import PersonalProjectsSection from './components/PersonalProjectsSection';
import Footer from './components/Footer';
import '@fortawesome/fontawesome-svg-core/styles.css';
import 'tailwind-scrollbar';

export default function Home() {
	return (
		<>
			<Layout>
				<div id="home" className="relative flex items-center justify-center w-full h-full">
					<Head>
						<title>Aimilios Seimenis - Game Programmer</title>
						<link rel="icon" href="/favicons/favicon.ico" />
					</Head>

					<main className={`relative text-white ${league.className} page-background w-full h-full`}>
						<HeroSection />
						<AbtosCovertSection />
						<ProfessionalWorkSection />
						<PersonalProjectsSection />
						<Footer />
					</main>
				</div>
			</Layout>
		</>
	);
}
