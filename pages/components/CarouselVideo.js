import React, { useRef, useState, useEffect } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import YouTubeVideo from "./YouTubeVideo";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import "@splidejs/splide-extension-video/dist/css/splide-extension-video.min.css";

const CarouselVideo = () => {
    const splideRef = useRef(null);
    const [isMobile, setIsMobile] = useState(false);

    // Detect screen width
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768); // Adjust breakpoint as needed
        };

        // Initialize state and add resize listener
        handleResize();
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

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
        "https://www.youtube.com/embed/jB_74EuQPJc",
        "https://www.youtube.com/embed/E6dRKYpR4v0",
        "https://www.youtube.com/embed/XiKO-LdqbAM",
        "https://www.youtube.com/embed/miZmaox1syc",
        "https://www.youtube.com/embed/AZn97qkpGvk",
        "https://www.youtube.com/embed/PbbqCgWMHls",
        "https://www.youtube.com/embed/jhWttSVpVY8",
    ];

    // Splide options for desktop
    const desktopOptions = {
        type: "loop",
        perPage: 3,
        gap: "1rem",
        padding: "5rem",
        heightRatio: 0.225,
        focus: "center",
    };

    // Splide options for mobile
    const mobileOptions = {
        type: "loop",
        perPage: 1,
        gap: "0rem",
        padding: "0rem",
        heightRatio: 1,
        focus: "center",
    };

    return (
        <Splide
            ref={splideRef}
            options={isMobile ? mobileOptions : desktopOptions}
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
