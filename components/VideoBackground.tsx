import React, { useEffect, useRef, useState } from 'react';

const VideoBackground: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.defaultMuted = true;
      video.muted = true;
      
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsLoaded(true);
          })
          .catch((err) => {
            console.warn("Background video autoplay prevented, retrying muted play:", err);
            video.muted = true;
            video.play().catch(() => setHasError(true));
          });
      }
    }
  }, []);

  return (
    <div 
      className="fixed inset-0 z-0 overflow-hidden pointer-events-none select-none"
      id="video-background-container"
      aria-hidden="true"
    >
      {/* Background Video Element */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        referrerPolicy="no-referrer"
        crossOrigin="anonymous"
        onCanPlay={() => setIsLoaded(true)}
        onError={() => setHasError(true)}
        className="w-full h-full object-cover transition-opacity duration-1000 scale-105"
        style={{
          filter: 'blur(5px)',
          opacity: isLoaded ? 0.75 : 0,
          transform: 'scale(1.05)',
        }}
        id="bg-video"
      >
        {/* Local Cached Fallback Asset */}
        <source src="/videos/programmer-background.mp4" type="video/mp4" />
        {/* Primary Shutterstock Source */}
        <source 
          src="https://www.shutterstock.com/shutterstock/videos/3605368267/preview/stock-footage-programmer-working-at-desk-animation-hd-on-alpha.mp4" 
          type="video/mp4" 
        />
      </video>

      {/* Dark / Readable Transparent Overlay */}
      <div 
        className="absolute inset-0 bg-[#050608]/50 bg-gradient-to-b from-[#050608]/40 via-transparent to-[#050608]/80 pointer-events-none" 
        id="video-overlay"
      />
    </div>
  );
};

export default VideoBackground;
