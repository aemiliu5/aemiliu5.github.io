import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import YouTubeVideo from "./YouTubeVideo";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import "@splidejs/splide-extension-video/dist/css/splide-extension-video.min.css";

const CarouselVideo = () => {
    const handlePauseVideos = (splide) => {
        const iframes = splide.Components.Elements.slides.map(
            (slide) => slide.querySelector("iframe")
        );

        iframes.forEach((iframe, index) => {
            if (iframe && index !== splide.index) {
                // Pause YouTube videos using postMessage
                iframe.contentWindow.postMessage(
                    '{"event":"command","func":"pauseVideo","args":""}',
                    "*"
                );
            }
        });
    };

    const videoUrls = [
        "https://www.youtube.com/embed/e2kJMjxjQfQ",
        "https://www.youtube.com/embed/jB_74EuQPJc",
        "https://www.youtube.com/embed/E6dRKYpR4v0",
        "https://www.youtube.com/embed/XiKO-LdqbAM",
        "https://www.youtube.com/embed/miZmaox1syc",
        "https://www.youtube.com/embed/AZn97qkpGvk",
        "https://www.youtube.com/embed/PbbqCgWMHls",
        "https://www.youtube.com/embed/jhWttSVpVY8",
    ];

    // Desktop options, with Splide's own breakpoint for phones and portrait tablets (≤ 768px, Tailwind md)
    const options = {
        type: "loop",
        perPage: 3,
        gap: "1rem",
        padding: "5rem",
        heightRatio: 0.225,
        focus: "center",
        breakpoints: {
            768: {
                perPage: 1,
                gap: "0.5rem",
                padding: { left: "1.75rem", right: "1.75rem" },
                heightRatio: 0.65,
            },
        },
    };

    return (
        <Splide
            options={options}
            onMoved={(splide) => handlePauseVideos(splide)}
            style={{ margin: "auto" }}
        >
            {videoUrls.map((videoUrl, index) => (
                <SplideSlide key={index}>
                    <YouTubeVideo videoUrl={videoUrl} />
                </SplideSlide>
            ))}
        </Splide>
    );
};

export default CarouselVideo;
