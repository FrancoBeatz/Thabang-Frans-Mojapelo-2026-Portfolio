import React from 'react';

const VideoBackground: React.FC = () => {
  return (
    <div 
      className="fixed inset-0 -z-10 overflow-hidden pointer-events-none select-none"
      id="video-background-container"
      aria-hidden="true"
    >
      {/* Dynamic Ambient Blur Glow Layer */}
      <div className="absolute inset-0 bg-[#050608]/60 z-0" />

      {/* Colorful Programming Script Video with Creative Multi-Stage Depth Blur */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="w-full h-full object-cover scale-110 filter blur-[20px] md:blur-[28px] opacity-40 md:opacity-45 saturate-150 brightness-90 contrast-125 transition-opacity duration-1000 transform-gpu"
        id="bg-video"
      >
        <source 
          src="https://www.shutterstock.com/shutterstock/videos/3832716845/preview/stock-footage-colorful-programming-script-animation-k-video.mp4" 
          type="video/mp4" 
        />
      </video>

      {/* Secondary Depth Sharpening Accent (Soft Center Focus Layer) */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-electric-orange/10 via-transparent to-transparent opacity-60 mix-blend-screen" />

      {/* Vignette & Contrast Mask to Ensure Flawless Text Readability */}
      <div 
        className="absolute inset-0 bg-gradient-to-b from-[#050608]/90 via-[#050608]/50 to-[#050608] backdrop-blur-[2px]" 
        id="video-overlay"
      />

      {/* Radial Vignette Falloff */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_30%,_#050608_90%)] opacity-85" />
    </div>
  );
};

export default VideoBackground;
