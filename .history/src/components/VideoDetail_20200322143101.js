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
      
        <div style={{ width: 660, height: 'auto' }}>
            <ResponsiveEmbed aspectRatio="16by9">
                <embed src={videoSrc} />
            </ResponsiveEmbed>
        </div>
        <Card>
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
                </Card.Text>
            </Card.Body>
        </Card>
    </div>
  );
};

export default VideoDetail;