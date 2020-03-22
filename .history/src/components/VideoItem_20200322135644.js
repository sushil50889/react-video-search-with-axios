import React from 'react';
import {Media} from 'react-bootstrap';

const VideoItem = ({ video, onVideoSelect }) => {


    return (
      <div onClick={() => onVideoSelect(video)}>
        <Media>
        <img
            
            className="mr-2"
            src={video.snippet.thumbnails.medium.url}
            alt="Generic placeholder"
        />
        <Media.Body>
            <h5>{video.snippet.title}</h5>
            <p>
            {video.snippet.description}
            </p>
        </Media.Body>
        </Media>
      </div>
    );
  };
  
  export default VideoItem;