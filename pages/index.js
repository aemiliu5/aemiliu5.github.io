import React from 'react';
import Layout from '../components/Layout';
import { league } from '../utils/fonts';
import HeroSection from '../components/HeroSection';
import AbtosCovertSection from '../components/AbtosCovertSection';
import ProfessionalWorkSection from '../components/ProfessionalWorkSection';
import PersonalProjectsSection from '../components/PersonalProjectsSection';
import Footer from '../components/Footer';
import '@fortawesome/fontawesome-svg-core/styles.css';

export default function Home() {
	return (
		<>
			<Layout description="Portfolio of Aimilios Seimenis, a game and XR programmer from Athens, Greece. Developer of the survival horror game Abtos Covert, game jam regular, and XR developer at ICCS.">
				<div id="home" className="relative flex items-center justify-center w-full h-full">
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
