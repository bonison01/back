import React from "react";
import Link from "next/link";

export default function AboutsMain() {
  return (
    <div className="container">
      <div className="iframe-container">
        <iframe
          className="iframe-fullscreen"
          src="https://script.google.com/macros/s/AKfycbyyQVK4hHNJZ6LngIYc889b1yCnzwuBfEl8xum4nDjZOGp1lHBXEbyts248HbZD6Eb28A/exec"
          title="Track your Order"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}
