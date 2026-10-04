import React from 'react';
import Background from './Background';

// Re-export Background to maintain backward compatibility with existing imports
const VideoBackground: React.FC = () => {
  return <Background />;
};

export default VideoBackground;
