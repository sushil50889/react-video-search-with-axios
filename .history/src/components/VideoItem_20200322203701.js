import React from 'react';
import {Media} from 'react-bootstrap';
import './main.css';

const VideoItem = ({ video, onVideoSelect }) => {


    return (
      <div onClick={() => onVideoSelect(video)} className="mb-2">
        <Media>
        <img            
            className="image mr-2"
            src={video.snippet.thumbnails.medium.url}
            alt="Generic placeholder"
        />
        <Media.Body>
            <p className="title-text">{video.snippet.title.substring(0,35)}</p>
            <p className="details-text">
            {video.snippet.description.substring(0, 35)}
            </p>
        </Media.Body>
        </Media>
      </div>
    );
  };
  
  export default VideoItem;