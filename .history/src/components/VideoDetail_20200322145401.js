import React from 'react';
import {Card, ResponsiveEmbed} from 'react-bootstrap';
import './VideoDetail.css';


const VideoDetail = ({ video }) => {
  if (!video) {
    return <div>Loading...</div>;
  }

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

  return (
    <div>
      
        <div className="frame">
            <ResponsiveEmbed aspectRatio="16by9">
                
                <iframe title="video player" src={videoSrc} />
            </ResponsiveEmbed>
        </div>
        <Card>
            <Card.Body>
                <Card.Title>{video.snippet.title}</Card.Title>
                <Card.Text>
                {video.snippet.description}
                </Card.Text>
            </Card.Body>
        </Card>
    </div>
  );
};

export default VideoDetail;