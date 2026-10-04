import React, { useState } from 'react';

const Background: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const imageUrl = "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR6fN9KxWdMOkGJ5ghbgwD-tmeNDfJ-Ll2nmsuDV5sMHQ&s=10&utm_source=chatgpt.com";
  const localFallbackUrl = "/images/background.jpg";

  return (
    <div 
      className="fixed inset-0 z-0 overflow-hidden pointer-events-none select-none"
      id="portfolio-background-container"
      aria-hidden="true"
    >
      {/* Background Image Layer with Medium Blur & Scale */}
      <div 
        className="absolute -inset-4 w-[calc(100%+32px)] h-[calc(100%+32px)] overflow-hidden"
      >
        <img
          src={imageUrl}
          onError={(e) => {
            // Fallback to locally cached copy if external network blocks hotlinking
            const target = e.currentTarget;
            if (target.src !== window.location.origin + localFallbackUrl) {
              target.src = localFallbackUrl;
            }
          }}
          onLoad={() => setIsLoaded(true)}
          alt="Portfolio Visual Background"
          className="w-full h-full object-cover object-center transition-opacity duration-700"
          style={{
            filter: 'blur(5px)',
            transform: 'scale(1.06)',
            opacity: isLoaded ? 0.85 : 0.6,
          }}
          referrerPolicy="no-referrer"
          loading="eager"
        />
      </div>

      {/* Dark / Readable Transparent Overlay */}
      <div 
        className="absolute inset-0 bg-[#050608]/55 bg-gradient-to-b from-[#050608]/60 via-[#050608]/35 to-[#050608]/85 pointer-events-none" 
        id="background-overlay"
      />
    </div>
  );
};

export default Background;
