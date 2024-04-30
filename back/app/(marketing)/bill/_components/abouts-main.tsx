import React from "react";

export default function AboutsMain() {
  return (
    <div className="min-h-screen flex justify-center items-center">
      {/* This div will make sure the iframe is centered and covers the whole screen */}
      <div className="w-full h-full">
        <iframe
          className="w-full h-full"
          src="https://script.google.com/macros/s/AKfycbyyQVK4hHNJZ6LngIYc889b1yCnzwuBfEl8xum4nDjZOGp1lHBXEbyts248HbZD6Eb28A/exec"
          title="Track your Order"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}
