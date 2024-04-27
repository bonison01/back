import React from "react";
import Link from "next/link";

export function AboutsMain() {
  return (
    <div className="h-screen flex justify-center items-center">
      {/* Embedded Google Sheets iframe */}
      <div className="w-full h-full">
        {/* Apply styles to the iframe */}
        <iframe
          className="w-full h-full"
          src="https://script.google.com/macros/s/AKfycbyhKZikvxQtO01js866bw-08g2526Nzn58hiZYgPaKYlEcjkii-0k9aCjBv7KElSimlLg/exec"
          title="Track your Order"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}

export default AboutsMain;
