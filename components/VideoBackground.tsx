
import React from 'react';

const VideoBackground: React.FC = () => {
  return (
    <div 
      className="fixed inset-0 -z-10 overflow-hidden pointer-events-none"
      id="video-background-container"
    >
      <video
        autoPlay
        muted
        loop
        playsInline
        className="w-full h-full object-cover scale-110 blur-[10px] opacity-40"
        id="bg-video"
      >
        <source src="https://www.shutterstock.com/shutterstock/videos/3605368267/preview/stock-footage-programmer-working-at-desk-animation-hd-on-alpha.mp4" type="video/mp4" />
      </video>
      <div 
        className="absolute inset-0 bg-gradient-to-b from-dark-bg via-dark-bg/20 to-dark-bg backdrop-blur-[4px]" 
        id="video-overlay"
      ></div>
    </div>
  );
};

export default VideoBackground;
