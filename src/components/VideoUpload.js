import React, { useState } from 'react';

const VideoUpload = ({ onUpload }) => {
  const [file, setFile] = useState(null);

  const handleChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      const url = URL.createObjectURL(selectedFile);
      setFile(url);
      onUpload(url);
    }
  };

  return (
    <div>
      <input type="file" accept="video/*" onChange={handleChange} />
      {file && <video src={file} controls width="700" />}
    </div>
  );
};

export default VideoUpload;
