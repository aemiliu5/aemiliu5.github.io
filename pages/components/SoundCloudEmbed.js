import React from "react";

// Matches the site's accent colour (navbar gradient, back-to-top button)
const PLAYER_COLOR = "#0acc95";

const SoundCloudEmbed = ({ trackUrl, title }) => {
  const params = new URLSearchParams({
    url: trackUrl,
    color: PLAYER_COLOR,
    auto_play: "false",
    hide_related: "true",
    show_comments: "false",
    show_user: "true",
    show_reposts: "false",
    show_teaser: "false",
    visual: "true",
  });

  return (
    <iframe
      src={`https://w.soundcloud.com/player/?${params.toString()}`}
      title={`${title} on SoundCloud`}
      width="100%"
      height="300"
      scrolling="no"
      frameBorder="0"
      allow="autoplay"
      loading="lazy"
      className="block rounded-xl shadow-lg"
    ></iframe>
  );
};

export default SoundCloudEmbed;
