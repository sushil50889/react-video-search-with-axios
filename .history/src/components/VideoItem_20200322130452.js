import React from 'react';
import {Card, Button} from 'react-bootstrap';

const VideoItem = ({ video }) => {


    return (
      <div>
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={video.snippet.thumbnails.medium.url} />
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
  
  export default VideoItem;