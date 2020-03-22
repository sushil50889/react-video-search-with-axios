import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({ videos, onVideoSelect }) => {
  const renderedList = videos.map(video => {
    return (
      <VideoItem className="mb-4" 
        key={video.id.videoId} 
        onVideoSelect={onVideoSelect}
        video={video}
      />
    );
  });

  return <div>{renderedList}</div>;
};

export default VideoList;