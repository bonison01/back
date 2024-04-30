import React from "react";
import Link from "next/link";

export function AboutsMain() {
  return (
    <div className="h-screen flex justify-center items-center overflow-x-auto">
      {/* This container will allow horizontal scrolling */}
      <div className="w-full h-full" style={{ minWidth: '300%' }}>
        <iframe
          className="w-full h-full"
          style={{ width: '100%', height: '100%' }}
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
