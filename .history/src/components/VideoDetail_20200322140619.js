import React from 'react';
import {Card} from 'react-bootstrap';



const VideoDetail = ({ video }) => {
  if (!video) {
    return <div>Loading...</div>;
  }

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

  return (
    <div>
      <Card>
        <div>
            <iframe title="video player" src={videoSrc} />
        </div>
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