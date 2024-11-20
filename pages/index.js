import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { Inter, Roboto, Plus_Jakarta_Sans } from 'next/font/google';

import { Splide, SplideTrack, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/css';
import { LOOP } from '@splidejs/splide';

import { FontAwesomeIcon }  									from '@fortawesome/react-fontawesome';
import { faArrowDown } 											from '@fortawesome/free-solid-svg-icons';
import { faEnvelope, faPhone, faF } 							from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faLinkedinIn, faYoutube }  				from '@fortawesome/free-brands-svg-icons';

import '@fortawesome/fontawesome-svg-core/styles.css';

import Layout 			from './components/Layout'
import CompanyItem 		from './components/CompanyItem';
import ServicesItem 	from './components/ServicesItem';
import AwardItem 		from './components/AwardItem';
import TeamMember 		from './components/TeamMember';
import SocialMediaLink 	from './components/SocialMediaLink';
import FadeInOnScroll 	from './components/FadeInOnScroll';


const interT 	= Inter ({ weight: '300', subsets: ['latin'], })
const inter 	= Inter ({ weight: '400', subsets: ['latin'], })
const interB 	= Inter ({ weight: '600', subsets: ['latin'], })
const roboto 	= Roboto ({ weight: '400', subsets: ['latin'], })
const PJS 		= Plus_Jakarta_Sans ({ weight: '600', subsets: ['latin'], })

const splideOptionsCollaborators = {
	type: 'loop',
	perPage: 4,
	focus: 'center',
	autoplay: true,
	pauseOnHover: false,
	arrows: false,
	pagination: false,
	resetProgress: false,
	speed: 2500, // Adjust speed as needed (ms)
	interval: 3500,
	trimSpace: false, // Prevent unwanted gaps
	rewindSpeed: 'linear', // Smooth rewind transition
	easing: 'ease', // Add easing for smoother animations
}

const splideOptionsClients = {
	type: 'loop',
	perPage: 8,
	focus: 0,
	autoplay: true,
	pauseOnHover: false,
	arrows: false,
	pagination: false,
	resetProgress: false,
	speed: 2500, // Adjust speed as needed (ms)
	interval: 3500,
	trimSpace: false, // Prevent unwanted gaps
	rewindSpeed: 'linear', // Smooth rewind transition
	easing: 'ease', // Add easing for smoother animations
}

export default function Home() {
  return (
	<>
	<Layout>
		<div id="home" style={{ position: 'relative', width: '100%', height: 'calc(100vh - 66px)' }}>
		<Head>
			<title>Tomako Group</title>
			<link rel="icon" href="/favicon.ico" />
		</Head>

		<main className="relative text-white flex items-center justify-center h-[132vh] bg-[#6157da]">
			<Image
				src="/logos/internal/tomako_group.png"
				alt="Video Placeholder"
				width="280"
				height="200"
				style={{ opacity: 0, transition: 'opacity 1.2s ease-in' }}
				onLoad={(e) => e.target.style.opacity = 1}
				className="translate-y-[-15vh]"
			/>
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 310" className="absolute bottom-0 left-0 w-full">
			<path fill="#fff" fillOpacity="1" d="M0,224L48,213.3C96,203,192,181,288,170.7C384,160,480,160,576,165.3C672,171,768,181,864,192C960,203,1056,213,1152,213.3C1248,213,1344,203,1392,197.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
		</svg>
		</main>

		<div className="flex bg-white text-black justify-center h-[2500px] sm:h-[1480px]">
			<div className="sm:mx-[6%] min-w-[240px] max-w-[1000px] mt-[20px] mb-[400px]">
				<FadeInOnScroll>
					<div className={`text-[37px] text-center text-black ${interB.className}`}>
						Shaping your evolution, together
					</div>

					<div className={`text-[#585858] text-[20px] text-center mx-12 sm:mx-0 leading-8 mt-2 mb-16 ${inter.className}`}>
						We are dedicated to helping businesses and organizations evolve through experiential
						technologies and immersive content. Our interconnected teams, with multidisciplinary
						skills, produce cutting-edge solutions and unparalleled experiences for our clients
						and their communities.
					</div>
				</FadeInOnScroll>

				<FadeInOnScroll>
					<div className={`text-[#585858] text-[22px] text-center ${inter.className}`}>
						Discover the tomako.group companies
					</div>

					<div className="text-center mt-16">
						<Link href="#companies">
							<FontAwesomeIcon icon={faArrowDown} className={`text-[32px] text-center text-[#6157da] hover:scale-[150%] ease-out transition-all duration-400`} />
						</Link>
					</div>
				</FadeInOnScroll>

				<div id="companies"></div>

				<FadeInOnScroll>
					<div className="grid grid-rows-4 sm:grid-rows-2 sm:grid-cols-2 gap-16 scale-75">
						<CompanyItem href="https://dtmh.gr" 			src="/logos/internal/dtmh.png" 		alt="DTMH" 			hoverText="IMMERSIVE TECHNOLOGY AND VIDEO PRODUCTION STUDIO" 			/>
						<CompanyItem href="https://iphigames.com" 		src="/logos/internal/iphi.png" 		alt="Iphigames" 	hoverText="GAME DEVELOPMENT STUDIO SPECIALIZED IN GAMIFIED SOLUTIONS"	/>
						<CompanyItem href="https://multitools.events" 	src="/logos/internal/multitools.png" alt="Multitools" 	hoverText="EVENT PRODUCTION AND TECHNOLOGY INTEGRATION SPECIALIST"		/>
						<CompanyItem href="https://above.ge" 			src="/logos/internal/above.png" 		alt="Above Digital" hoverText="MODERN SOFTWARE DEVELOPMENT HOUSE"							/>
					</div>
				</FadeInOnScroll>
			</div>
		</div>

		<div className="flex bg-[#efefef] text-black justify-center">
			<div className="sm:mx-[6%] min-w-[240px] max-w-[700px] mb-[300px] sm:mb-[160px]">
				<div className={`mt-16 ${PJS.className} text-[37px] text-center`}>What we love doing</div>

				<div className={`text-[#585858] text-[20px] leading-8 mt-6 mx-8 sm:mx-0 mb-16 ${roboto.className}`}>
						We believe in delivering top-quality results in a timely manner, and strive to create memorable experiences for all those involved.
				</div>

				<FadeInOnScroll>
					<div className="grid grid-cols-1 grid-rows-8 sm:grid-cols-4 sm:grid-rows-2 gap-8">
						<ServicesItem image="/services/cask.png" 			text="XR Experiences" 			/>
						<ServicesItem image="/services/edu.png" 			text="Immersive Edu Tech" 		/>
						<ServicesItem image="/services/video_prod.png" 		text="Video Production" 		/>
						<ServicesItem image="/services/joystick.png" 		text="Game Development" 		/>
						
						<ServicesItem image="/services/game-controller.png" text="Gamification Services" 	/>
						<ServicesItem image="/services/coding.png" 			text="Software Development" 	/>
						<ServicesItem image="/services/calendar.png" 		text="Events Production" 		/>
						<ServicesItem image="/services/team.png" 			text="Dedicated Dev Teams" 		/>
					</div>
				</FadeInOnScroll>
			</div>
		</div>

		<div className="flex items-center justify-center bg-[url('/Parallax.png')] bg-fixed bg-center h-screen">
			<div className="mx-auto mb-12">
				<div className={`text-white text-[32px] sm:text-[50px] sm:mx-64 mx-0 text-center ${interT.className}`}>
					Fueled with renewable energy sources we connect digital and physical worlds.
				</div>
			</div>
		</div>

	<div className="flex bg-[#fafafa] text-black justify-center">
		<div className="mb-[200px]">
			<div className={`mt-16 ${PJS.className} text-[37px] text-center`}>Our Collaborators</div>

			<div className="flex justify-center mt-8 translate-x-[-5%]">
				<Splide options={ splideOptionsCollaborators } hasTrack={ false } aria-label="Our Collaborators">
					<SplideTrack>
						<SplideSlide><Image src="/logos/collaborators/pact.png" 			alt="PACT.gr"				width="250" height="250" />	</SplideSlide>
						<SplideSlide><Image src="/logos/collaborators/igdagreece.png" 		alt="IGDA Greece"			width="250" height="250" />	</SplideSlide>
						<SplideSlide><Image src="/logos/collaborators/i4bydesign.png" 		alt="I4ByDesign"			width="250" height="250" />	</SplideSlide>
						<SplideSlide><Image src="/logos/collaborators/euromersive.png" 		alt="Euromersive"			width="250" height="250" />	</SplideSlide>
						<SplideSlide><Image src="/logos/collaborators/vrara.png" 			alt="VR/AR Association"		width="250" height="250" />	</SplideSlide>
					</SplideTrack>
				</Splide>
			</div>

			<div className={`mt-16 ${PJS.className} text-[37px] text-center`}>Our Clients</div>

			<div className="mt-16 justify-items-center items-center">
				<Splide options={ splideOptionsClients } hasTrack={ false } aria-label="Our Clients">
					<SplideTrack>
						<SplideSlide><Image src="/logos/clients/cocacola.png" 			alt="Coca-Cola"			width="200" height="200" />				</SplideSlide>
						<SplideSlide><Image src="/logos/clients/vodafone.png" 			alt="Vodafone"			width="200" height="200" />				</SplideSlide>
						<SplideSlide><Image src="/logos/clients/heineken.png" 			alt="I4ByDesign"		width="200" height="200" />				</SplideSlide>
						<SplideSlide><Image src="/logos/clients/pfizer.png" 			alt="Euromersive"		width="200" height="200" />				</SplideSlide>
						<SplideSlide><Image src="/logos/clients/microsoft.png" 			alt="Microsoft"			width="200" height="200" />				</SplideSlide>
						<SplideSlide><Image src="/logos/clients/sunlight.png" 			alt="Sunlight"			width="200" height="200" />				</SplideSlide>
						<SplideSlide><Image src="/logos/clients/unknown.png" 			alt="Unknown"			width="200" height="200" />				</SplideSlide>
						<SplideSlide><Image src="/logos/clients/nespresso.png" 			alt="Nespresso"			width="200" height="200" />				</SplideSlide>
						<SplideSlide><Image src="/logos/clients/neurofenix.png" 		alt="Neurofenix"		width="200" height="200" />				</SplideSlide>
						<SplideSlide><Image src="/logos/clients/gopro.png" 				alt="GoPro"				width="200" height="200" />				</SplideSlide>
						<SplideSlide><Image src="/logos/clients/cosmote.png" 			alt="Cosmote"			width="200" height="200" />				</SplideSlide>
						<SplideSlide><Image src="/logos/clients/global-school.png" 		alt="Global School"		width="200" height="200" />				</SplideSlide>
						<SplideSlide><Image src="/logos/clients/samsung.png" 			alt="Samsung"			width="200" height="200" />				</SplideSlide>
						<SplideSlide><Image src="/logos/clients/bmw.png" 				alt="BMW"				width="200" height="200" />				</SplideSlide>
					</SplideTrack>
				</Splide>
			</div>

			<div className={`mt-24 ${PJS.className} text-[37px] text-center`}>Our Awards</div>

			<div className="grid grid-cols-4 grid-rows-1 gap-8 mt-8 justify-items-center items-center">
				<AwardItem src="/logos/awards/ermis_winner-2019.png"			/>
				<AwardItem src="/logos/awards/event-awards.png" 				/>
				<AwardItem src="/logos/awards/indie-awards.png" 				/>
				<AwardItem src="/logos/awards/ermis_winner-2021.png" 			/>
			</div>

		</div>
	</div>

	<div className="flex bg-[#dfdfdf] text-black justify-center h-[3800px] lg:h-[1850px]">
		<div className="sm:mx-[6%] min-w-[240px] max-w-[1200px]">
			<div className={`mt-16 ${PJS.className} text-[37px] text-center`}>Our Core Team</div>

			<FadeInOnScroll>
				<div className="grid grid-rows-2 sm:grid-cols-2 gap-32 mt-8 sm:mx-16 md:mx-2 lg:mx-16 xl:mx-64 sm:h-[800px]">
					<TeamMember
						imageSize="350"
						src="/team/christos-bikos.png"
						name="CHRIS BIKOS"
						position="CEO & CO-FOUNDER"
						linkedin="https://www.linkedin.com/in/christosbikos"
						bio="A seasoned executive and entrepreneur whose expertise spans technology, education, and gaming. He has built a remarkable track record of success with an illustrious career of over 20 years in international leadership roles."
					/>

					<TeamMember
						imageSize="350"
						src="/team/tom-kolokithas.png"
						name="TOM KOLOKITHAS"
						position="CINO & CO-FOUNDER"
						linkedin="https://www.linkedin.com/in/tomkolokithas/"
						bio="Inspired by an unwavering commitment to innovation, Tom is an experienced entrepreneur who embarks on entrepreneurial ventures with a genuine desire to redefine industries and drive transformative change."
					/>
				</div>
			</FadeInOnScroll>

			<FadeInOnScroll>
				<div className="grid grid-rows-3 lg:grid-cols-3 gap-2 lg:h-[800px]">
					<TeamMember
						imageSize="300"
						src="/team/akis-zachariadis.png"
						name="AKIS ZACHARIADIS"
						position="CTO"
						linkedin="https://www.linkedin.com/in/akiszachariadis/"
						bio="An experienced technology executive and a true visionary in the gaming and education industry. As co-founder of Iphigames, he has been instrumental in the development and success of the company."
					/>

					<TeamMember
						imageSize="300"
						src="/team/yannis-antsaklis.png"
						name="YANNIS ANTSAKLIS"
						position="CFO"
						linkedin="https://www.linkedin.com/in/yiannis-antsaklis-b27aba3b"
						bio="Yannis is a visionary leader at the helm of our Financial Strategy. With an illustrious career of over 20 years marked by fiscal acumen, he brings a wealth of expertise to our organisation."
					/>

					<TeamMember
						imageSize="300"
						src="/team/aris-markou.png"
						name="ARIS MARKOU"
						position="CCO"
						linkedin="https://www.linkedin.com/in/aris-markou-a7544b/"
						bio="With over two decades of invaluable experience in the Telecommunications and IT sector, Aris is a seasoned sales and business development executive renowned for a stellar track record."
					/>

				</div>
			</FadeInOnScroll>
		</div>
	</div>


	<div className="flex bg-[#6157da] text-black justify-center h-[520px]">
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1240 310" className="absolute w-full translate-y-[-90px] md:translate-y-[-180px] lg:translate-y-[-260px] min-[1150px]:translate-y-[-320px] min-[1280px]:translate-y-[-340px]">
			<path fill="#6157da" fillOpacity="1" d="M0,224L48,213.3C96,203,192,181,288,170.7C384,160,480,160,576,165.3C672,171,768,181,864,192C960,203,1056,213,1152,213.3C1248,213,1344,203,1392,197.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
		</svg>

		<div className="sm:mx-[6%] min-w-[240px] max-w-[1200px] translate-y-[-100px]">
			<div className={`text-white text-[37px] text-center mt-32 ${PJS.className}`}>
				Connect with us
			</div>

			<div className={`text-white text-[23px] text-center mt-8 lg:mx-96 ${inter.className}`}>
				We welcome you to contact us for more information and new projects.
			</div>

			<div className={`flex justify-center items-center align-middle text-white text-[23px] text-center mt-8 lg:mx-96 ${inter.className}`}>
				<Link href="mailto:contact@tomako.group">
					<FontAwesomeIcon icon={faEnvelope} className={`mx-2 text-[32px] text-[#ffffff] hover:text-[#da5761] transition-all duration-400 ${PJS.className}`} />
					contact@tomako.group
					</Link>
				
			</div>

			<div className={`flex justify-center items-center align-middle text-white text-[23px] text-center mt-8 lg:mx-96 ${inter.className}`}>
				<Link href="tel:+302155000610">
					<FontAwesomeIcon icon={faPhone} className={`mx-2 text-[32px] text-[#ffffff] hover:text-[#da5761] transition-all duration-400 ${PJS.className}`} />
					+30 21 5500 0610
				</Link>
			</div>

			<div className={`flex flex-rows-3 mt-8 mb-32 justify-center items-center`}>
				<SocialMediaLink fa={faLinkedinIn} 	href="https://www.linkedin.com/company/tomako-group/" 	/>
				<SocialMediaLink fa={faYoutube} 	href="https://www.youtube.com/@TomakoGroup" 			/>
				<SocialMediaLink fa={faFacebook} 	href="https://www.facebook.com/tomako.group" 			/>
			</div>
		</div>
	</div>
</div>
	</Layout>
	</>
  );
}
