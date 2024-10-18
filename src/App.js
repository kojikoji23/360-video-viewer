import React, { useState } from 'react';
import VideoPlayer from './components/VideoPlayer';
import VideoUpload from './components/VideoUpload';
import './App.css';

const App = () => {
  const [videoSrc, setVideoSrc] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [videoTitle, setVideoTitle] = useState('');

  const handleUpload = (url) => {
    setVideoSrc(url);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    setIsEditing(false);
    // This can include the functionality to save the edited content, but we will skip that for now.
  };

  return (
    <div>
      <h1>360 Video Viewer</h1>
      <VideoUpload onUpload={handleUpload} />
      {videoSrc && (
        <>
          <VideoPlayer videoSrc={videoSrc} />
          <h2>{videoTitle}</h2>
          <button onClick={handleEdit}>Edit Video Title</button>
          {isEditing && (
            <div>
              <input
                type="text"
                value={videoTitle}
                onChange={(e) => setVideoTitle(e.target.value)}
                placeholder="Enter video title"
              />
              <button onClick={handleSave}>Save</button>
              <button onClick={() => setIsEditing(false)}>Cancel</button>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default App;
