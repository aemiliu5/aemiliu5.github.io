import React from "react";

const YouTubeVideo = ({ videoUrl }) => {
  return (
    <div className="video-embed">
      <iframe
        src={`${videoUrl}?enablejsapi=1`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default YouTubeVideo;
