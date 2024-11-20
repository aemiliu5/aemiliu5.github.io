import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';

const Carousel = () => {
    const images = [
        '/abtos1.jpg',
        '/abtos3.jpg',
        '/abtos2.jpg',
        '/abtos4.jpg',
    ];

    return (
        <div className="sm:mx-48">
            <Splide
                options={{
                    type: 'loop',
                    rewind: true,
                    width: '100%', // Adjust the width of the carousel
                    height: '100%',
                    gap: '1rem',
                    perPage: 2, // Default to 2 per page for desktop
                    perMove: 2, // Default to 2 per move (desktop)
                    breakpoints: {
                        // On mobile devices (screen width ≤ 640px)
                        1040: {
                            perPage: 1, // Show 1 slide per page
                            perMove: 1, // Move 1 slide per click
                        },
                    },
                }}
                style={{ margin: 'auto' }} // Center the carousel horizontally
            >
                {images.map((image, index) => (
                    <SplideSlide key={index}>
                        <img
                            src={image}
                            alt={`Slide ${index + 1}`}
                            style={{ maxWidth: '100%', display: 'block', margin: 'auto' }}
                        />
                    </SplideSlide>
                ))}
            </Splide>
        </div>
    );
};

export default Carousel;
