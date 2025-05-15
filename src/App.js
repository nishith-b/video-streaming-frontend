import React from "react";

const App = () => {
  return (
    <div>
      <h1>Video.js Player Demo</h1>
      <video
        width="720"
        height="420"
        controls
        autoPlay
        muted
        preload="auto"
        style={{ backgroundColor: "black" }}
      >
        <source src="http://localhost:5000/video" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default App;
