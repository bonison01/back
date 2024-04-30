import React from "react";

export default function AboutsMain() {
  // Styles defined as JavaScript objects
  const fullScreenStyle = {
    width: '100vw',   // 100% of the viewport width
    height: '100vh',  // 100% of the viewport height
    margin: 0,
    padding: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  };

  const iframeStyle = {
    width: '100%',    // 100% of the parent container
    height: '100%'    // 100% of the parent container
  };

  return (
    <div style={fullScreenStyle}>
      <iframe
        style={iframeStyle}
        src="https://script.google.com/macros/s/AKfycbyyQVK4hHNJZ6LngIYc889b1yCnzwuBfEl8xum4nDjZOGp1lHBXEbyts248HbZD6Eb28A/exec"
        title="Track your Order"
        frameBorder="0"
        allowFullScreen
      ></iframe>
    </div>
  );
}
