import React, { useState, useEffect } from "react";

const YouTubeVideo = ({ videoUrl }) => {
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

  return (
      <iframe
          width={isMobile ? "380" : "560"} // Adjust width based on screen size
          height="315" // Maintain aspect ratio
          src={`${videoUrl}?enablejsapi=1`} // Add `enablejsapi=1` to enable JavaScript API
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
      ></iframe>
  );
};

export default YouTubeVideo;
