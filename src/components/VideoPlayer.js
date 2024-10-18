import React, { useState } from 'react';
import 'aframe';
import 'aframe-video-controls';

const VideoPlayer = ({ videoSrc }) => {
  const [annotation, setAnnotation] = useState('');

  const handleChange = (event) => {
    setAnnotation(event.target.value);
  }
  return (
    <div>
      <a-scene embedded top='10%'>
        <a-assets>
          <video id="video" autoplay="true" loop="true" src={videoSrc}></video>
        </a-assets>
        <a-videosphere src="#video"></a-videosphere>

        <a-entity position="0 2.5 -2.5" scale="5 5 5">
          <a-text value={annotation || "Enter your annotation here..."} color="white" align="center" width="4"></a-text>
        </a-entity>

        <a-camera position="0 0 5">
          <a-cursor id="cursor" color="yellow"></a-cursor>
        </a-camera>

        <a-entity video-controls="src: #video" position="0 0 -2" scale="2 2 2">
        </a-entity>
      </a-scene>

      <input
        type="text"
        onChange={handleChange}
        placeholder="Type your annotation here"
        style={{
          width: '30%',
          fontSize: '16px',
          borderRadius: '5px',
        }}
      />
    </div>
  );
};

export default VideoPlayer;