"use client";

import { useRef } from "react";

export default function YouTubeVideo() {
  const iframeRef = useRef(null);

  const handleMouseEnter = () => {
    if (iframeRef.current) {
      iframeRef.current.src = "https://www.youtube.com/embed/H4x8UEKP3ls?autoplay=1&mute=1";
    }
  };

  const handleMouseLeave = () => {
    if (iframeRef.current) {
      iframeRef.current.src = "https://www.youtube.com/embed/H4x8UEKP3ls?autoplay=0";
    }
  };

  return (
    <div className="mb-8">
      <div
        className="relative w-full h-0 pb-[56.25%]" // 16:9 aspect ratio
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <iframe
          ref={iframeRef}
          className="absolute top-0 left-0 w-full h-full"
          src="https://www.youtube.com/embed/H4x8UEKP3ls?autoplay=0"
          title="Legal Support Video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}