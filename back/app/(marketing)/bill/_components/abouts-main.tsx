import React from "react";
import Link from "next/link";

export function AboutsMain() {
  return (
    <div className="w-full max-w-screen-lg mx-auto">
        <iframe
          src="https://script.google.com/macros/s/AKfycbyyQVK4hHNJZ6LngIYc889b1yCnzwuBfEl8xum4nDjZOGp1lHBXEbyts248HbZD6Eb28A/exec"
          width="300%"
          height="600" // Adjust the height as needed
          frameBorder="0"
          allowFullScreen
          title="Embedded Google Sheets"
          style={{ minHeight: "800px" }} // Set minimum height for responsiveness
        ></iframe>
      </div>
  );
}
