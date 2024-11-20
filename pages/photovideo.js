// pages/index.js (or your Home component file)
import React, { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Layout from "./components/Layout"; // Adjust path as necessary
import { league, leagueBold } from "./utils/fonts"; // Adjust path as necessary
import TextDivider from "./components/TextDivider";
import CarouselVideo from "./components/CarouselVideo";
import Footer from "./components/Footer";
import Masonry from "react-masonry-css";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const images = [
	{ src: "/photos/milies.png", alt: "Milies" },
	{ src: "/photos/salonika.png", alt: "Salonika" },
	{ src: "/photos/kea.jpg", alt: "Kea" },
	{ src: "/photos/zakros.jpg", alt: "Zakros" },
	{ src: "/photos/vohaiko.jpg", alt: "Vohaiko" },
	{ src: "/photos/tritsis1.jpg", alt: "Tritsis Park" },
	{ src: "/photos/pedion.jpg", alt: "Pedion" },
	{ src: "/photos/milky1.jpg", alt: "Milky Way 1" },
	{ src: "/photos/milky2.jpg", alt: "Milky Way 2" },
];

export default function Photo() {
	const [lightboxIndex, setLightboxIndex] = useState(-1); // Track active image index

	const breakpointColumns = {
		default: 4,
		768: 2,
	};

	return (
		<>
			<Layout>
				<div id="home" className="relative flex items-center justify-center w-full h-full">
					<Head>
						<title>Aimilios Seimenis - Game Programmer</title>
						<link rel="icon" href="/favicon.ico" />
					</Head>

					<main className={`relative text-white ${league.className} bg-[#070707] w-full h-full`}>
						<div className={`flex items-center`}>
							<div className={`p-6 sm:mx-48 h-[25%]`}>
								<div className={`${leagueBold.className} text-[40px] sm:text-[60px] text-bold`}>PHOTO/VIDEO</div>
								<div className={`${league.className} text-[26px] sm:text-[32px]`}>
									Storytelling through the lens.
								</div>
								<div
									className={`${league.className} text-[18px] leading-6 mt-8 sm:mt-0 sm:leading-normal sm:text-[24px]`}
								>
									Alongside my main career, I’ve worked professionally as a photographer,
									videographer, and editor across various fields, while also capturing breathtaking landscapes as a
									personal passion. I hope my work inspires you, and if you’d like to collaborate, don’t hesitate to
									reach out.
								</div>
							</div>
						</div>

						<div className="mt-4">
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
												onClick={() => setLightboxIndex(index)} // Open lightbox on click
											/>
										</div>
									))}
								</Masonry>
							</div>
						</div>

						{/* Lightbox */}
						<Lightbox
							open={lightboxIndex >= 0} // Lightbox opens if index is valid
							close={() => setLightboxIndex(-1)} // Close lightbox handler
							slides={images} // Pass the images array as slides
							index={lightboxIndex} // Active image index
							on={{
								slideChange: (newIndex) => setLightboxIndex(newIndex), // Sync index on slide change
							}}
						/>

						<TextDivider className="flex-row" text="VIDEOGRAPHY" />
						<div className="my-8 items-center video-splide">
							<CarouselVideo />
						</div>

						<Footer />
					</main>
				</div>
			</Layout>
		</>
	);
}
