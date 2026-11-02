import React from "react";

const YouTubeVideo = ({ videoUrl }) => {
  const id = videoUrl.split("/").pop();
  // Shows only the thumbnail until clicked, then the iframe navigates to the real player.
  // srcdoc instead of React state because Splide's loop clones are plain DOM copies with no React handlers.
  const placeholder = `<style>html,body,a{height:100%;margin:0;overflow:hidden}img{width:100%;height:100%;object-fit:cover}a{display:flex;align-items:center;justify-content:center;position:relative}span{position:absolute;width:72px;height:72px;border-radius:50%;background:rgba(0,0,0,.65);color:#fff;font:32px/72px sans-serif;text-align:center}</style><a href="${videoUrl}?autoplay=1&amp;enablejsapi=1" aria-label="Play video"><img src="https://i.ytimg.com/vi/${id}/hqdefault.jpg" alt=""><span>&#9654;</span></a>`;

  return (
    <div className="video-embed">
      <iframe
        src={`${videoUrl}?enablejsapi=1`}
        srcDoc={placeholder}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default YouTubeVideo;
