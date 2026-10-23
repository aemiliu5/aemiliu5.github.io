// pages/index.js (or your Home component file)
import React, { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Layout from "./components/Layout"; // Adjust path as necessary
import { league, leagueBold, dmSans } from "../utils/fonts"; // Adjust path as necessary
import TextDivider from "./components/TextDivider";
import CarouselVideo from "./components/CarouselVideo";
import Footer from "./components/Footer";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import Masonry from "react-masonry-css";
import Lightbox from "yet-another-react-lightbox";
import Captions from "yet-another-react-lightbox/plugins/captions";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/captions.css";

const images = [
	{ 
		src: "/photos/kythnos1.jpg", 
		alt: "Kythnos Ferry",
		title: "Kythnos Ferry",
		description: "📷 Camera: Fujifilm X100VI 🔍 Aperture: f/2⏱️ Shutter Speed: 1/3200s🌡️ ISO: 125"
	},
	{ 
		src: "/photos/kythnos2.jpg", 
		alt: "Kythnos Kolona Beach",
		title: "Kythnos Kolona Beach",
		description: "📷 Camera: Fujifilm X100VI 🔍 Aperture: f/2 ⏱️ Shutter Speed: 1/6400s🌡️ ISO: 125"
	},
	{ 
		src: "/photos/milies.png", 
		alt: "Milies Train Tracks",
		title: "Milies Train Tracks",
		description: "📷 Camera: Nikon D7500 🔍 Aperture: f/3.5 ⏱️ Shutter Speed: 1/200s🌡️ ISO: 1600"
	},
	{ 
		src: "/photos/salonika.png", 
		alt: "Salonika",
		title: "Thessaloniki",
		description: "📷 Camera: Nikon D7500 🔍 Aperture: f/3.5 ⏱️ Shutter Speed: 1/1250s🌡️ ISO: 100"
	},
	{ 
		src: "/photos/kea.jpg", 
		alt: "Mt. Profitis Ilias, Kea",
		title: "Mt. Profitis Ilias, Kea",
		description: "📷 Camera: Nikon D7500 🔍 Aperture: f/3.5 ⏱️ Shutter Speed: 20s🌡️ ISO: 3200"
	},
	{ 
		src: "/photos/zakros.jpg", 
		alt: "Zakros",
		title: "Zakros",
		description: " 📷 Camera: Samsung Galaxy S21 Ultra 🔍 Aperture: f/2.4⏱️ Shutter Speed: 1/800s🌡️ ISO: 50"
	},
	{ 
		src: "/photos/vohaiko.jpg", 
		alt: "Vohaiko",
		title: "Vohaiko",
		description: "📷 Camera: Nikon D5100 🔍 Aperture: f/10⏱️ Shutter Speed: 1/200s🌡️ ISO: 6400"
	},
	{ 
		src: "/photos/tritsis1.jpg", 
		alt: "Tritsis Park",
		title: "Tritsis Park, Athens",
		description: "📷 Camera: Nikon D5100 🔍 Aperture: f/5.6 ⏱️ Shutter Speed: 1/100s🌡️ ISO: 160"
	},
	{ 
		src: "/photos/pedion.jpg", 
		alt: "Pedion tou Areos",
		title: "Pedion tou Areos",
		description: " 📷 Camera: Nikon D5100 🔍 Aperture: f/5.6 ⏱️ Shutter Speed: 1/320s🌡️ ISO: 1250"
	},

	{ 
		src: "/photos/milky1.jpg", 
		alt: "Milky Way in Zakros",
		title: "Milky Way in Zakros",
		description: "📷 Camera: Nikon D7500 🔍 Aperture: f/3.5 ⏱️ Shutter Speed: 30s🌡️ ISO: 3200"
	},
	{ 
		src: "/photos/milky2.jpg", 
		alt: "Milky Way in Zakros",
		title: "Milky Way in Zakros",
		description: "📷 Camera: Nikon D7500 🔍 Aperture: f/3.5⏱️ Shutter Speed: 30s🌡️ ISO: 3200"
	},
];

// Helper function to create a React element for description with bold labels (horizontal layout)
const createDescriptionElement = (description) => {
	// Split by emoji patterns and create React elements with bold labels
	const items = [];
	
	// Process each field
	const processField = (emoji, label, pattern) => {
		const match = description.match(pattern);
		if (match) {
			const value = match[1].trim();
			items.push(
				React.createElement('span', { key: label, style: { marginRight: '1.5rem', whiteSpace: 'nowrap' } },
					emoji, ' ',
					React.createElement('strong', { style: { fontWeight: 600 } }, label + ' '),
					value
				)
			);
		}
	};
	
	// Location removed - inferred from title
	processField('📷', 'Camera:', /📷 Camera: ([^🔘🔍⏱️📶🌡️🎨]+)/);
	// Support both old (🔍) and new (🔘) Aperture emojis
	const apertureMatch = description.match(/🔘 Aperture: ([^📷⏱️📶🌡️🎨]+)/) || description.match(/🔍 Aperture: ([^📷⏱️📶🌡️🎨]+)/);
	if (apertureMatch) {
		const value = apertureMatch[1].trim();
		items.push(
			React.createElement('span', { key: 'Aperture:', style: { marginRight: '1.5rem', whiteSpace: 'nowrap' } },
				'🔘', ' ',
				React.createElement('strong', { style: { fontWeight: 600 } }, 'Aperture: '),
				value
			)
		);
	}
	processField('⏱️', 'Shutter Speed:', /⏱️ Shutter Speed: ([^📷🔘🔍📶🌡️🎨]+)/);
	// Support both old (🌡️) and new (📶) ISO emojis
	const isoMatch = description.match(/📶 ISO: ([^📷🔘🔍⏱️🎨]+)/) || description.match(/🌡️ ISO: ([^📷🔘🔍⏱️🎨]+)/);
	if (isoMatch) {
		const value = isoMatch[1].trim();
		items.push(
			React.createElement('span', { key: 'ISO:', style: { marginRight: '1.5rem', whiteSpace: 'nowrap' } },
				'📶', ' ',
				React.createElement('strong', { style: { fontWeight: 600 } }, 'ISO: '),
				value
			)
		);
	}
	processField('🎨', 'White Balance:', /🎨 White Balance: ([^📷🔘🔍⏱️📶🌡️]+)/);
	
	return React.createElement('div', { style: { display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem' } }, ...items);
};

function PhotoSection({ lightboxIndex, setLightboxIndex, images, formattedImages, breakpointColumns }) {
	const [ref, isVisible] = useScrollAnimation({ threshold: 0.1 });

	return (
		<div ref={ref} className={`mt-4 scroll-fade-in ${isVisible ? 'visible' : ''}`}>
			<TextDivider className="flex-row" text="PHOTOGRAPHY" />

			<div className="flex flex-col justify-center items-center mx-12 sm:mx-32 mb-16">
				<Masonry
					breakpointCols={breakpointColumns}
					className="my-masonry-grid"
					columnClassName="my-masonry-grid_column"
				>
					{images.map((image, index) => (
						<div key={index} className="hover:scale-105 duration-200 transition-all pt-4">
							<Image
								src={image.src}
								width="320"
								height="220"
								alt={image.alt}
								className="cursor-pointer rounded-md"
								onClick={() => setLightboxIndex(index)}
							/>
						</div>
					))}
				</Masonry>
			</div>

			{/* Lightbox */}
			<Lightbox
				open={lightboxIndex >= 0}
				close={() => setLightboxIndex(-1)}
				slides={formattedImages}
				index={lightboxIndex}
				plugins={[Captions]}
				captions={{
					descriptionTextAlign: "center",
					descriptionMaxLines: 10,
					showToggle: true
				}}
				on={{
					slideChange: (newIndex) => setLightboxIndex(newIndex),
				}}
			/>
		</div>
	);
}

function VideoSection() {
	const [ref, isVisible] = useScrollAnimation({ threshold: 0.1 });

	return (
		<div ref={ref} className={`scroll-fade-in ${isVisible ? 'visible' : ''}`}>
			<TextDivider className="flex-row" text="VIDEOGRAPHY" />
			<div className="my-8 items-center video-splide">
				<CarouselVideo />
			</div>
		</div>
	);
}

export default function Photo() {
	const [lightboxIndex, setLightboxIndex] = useState(-1); // Track active image index

	const breakpointColumns = {
		default: 4,
		768: 2,
	};

	// Transform images to include formatted descriptions as React elements
	const formattedImages = images.map((image) => ({
		...image,
		description: createDescriptionElement(image.description),
	}));

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
								<div className={`${leagueBold.className} text-[40px] sm:text-[60px] text-bold`}>PHOTO/VIDEO</div>
								<div
									className={`${dmSans.className} text-[18px] leading-6 mt-8 sm:mt-0 sm:leading-normal sm:text-[18px]`}
								>
									What began as a personal passion for photography has become something I pursue both creatively and professionally alongside my main career. As a <b>photographer, videographer</b>, and <b>editor</b>, I've shot weddings, events, interviews, music videos, among others. If you like what you see, I'd love to hear from you.
								</div>
							</div>
						</div>

						<PhotoSection lightboxIndex={lightboxIndex} setLightboxIndex={setLightboxIndex} images={images} formattedImages={formattedImages} breakpointColumns={breakpointColumns} />

						<VideoSection />

						<Footer />
					</main>
				</div>
			</Layout>
		</>
	);
}
