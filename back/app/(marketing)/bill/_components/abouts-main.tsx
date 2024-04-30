import React from "react";
import Link from "next/link";

export function AboutsMain() {
  return (
    // Use the min-h-screen class to ensure that the div takes at least the full height of the viewport
    <div className="min-h-screen flex justify-center items-center">
      <div className="w-full h-full">
        <iframe
          // Ensure that the iframe covers the full width and height of its container
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

export default AboutsMain;
