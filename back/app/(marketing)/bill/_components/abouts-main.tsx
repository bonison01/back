import React from "react";
import Link from "next/link";

export function AboutsMain() {
  return (
    <div className="text-center pt-20 pb-10 sm:pt-32 flex flex-col justify-center items-center space-y-4">
      {/* Embedded Google Sheets iframe */}
      <div className="w-full max-w-screen-lg mx-auto">
        {/* Apply styles to the iframe */}
        <iframe
          className="w-full h-auto border border-gray-300 shadow-md"
          src="https://script.google.com/macros/s/AKfycbyhKZikvxQtO01js866bw-08g2526Nzn58hiZYgPaKYlEcjkii-0k9aCjBv7KElSimlLg/exec"
          title="Embedded Google Sheet"
          scrolling="no"
        ></iframe>
      </div>
    </div>
  );
}

export default AboutsMain;
