import React from "react";

const VideoSection = ({ videoKey }) => {
  return (
    <div className="ratio ratio-16x9 mt-5">
      <iframe
        src={`https://www.youtube.com/embed/${videoKey}?autoplay=1&mute=1`}
        title="YouTube video"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoSection;
