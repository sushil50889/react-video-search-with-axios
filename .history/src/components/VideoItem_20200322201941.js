import React from 'react';
import {Media} from 'react-bootstrap';
import './main.css';

const VideoItem = ({ video, onVideoSelect }) => {


    return (
      <div onClick={() => onVideoSelect(video)}>
        <Media>
        <img            
            className="image mr-2"
            src={video.snippet.thumbnails.medium.url}
            alt="Generic placeholder"
        />
        <Media.Body>
            <p>{video.snippet.title}</p>
            <p className="details-text">
            {video.snippet.description}
            </p>
        </Media.Body>
        </Media>
      </div>
    );
  };
  
  export default VideoItem;