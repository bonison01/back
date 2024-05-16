import React from "react";
import Link from "next/link";

export function AboutsMain() {
  return (
    <div className="text-left">
      {/* Embedded Google Sheets iframe */}
      <div className="w-full max-w-screen-lg mx-auto">
        <iframe
          src="https://script.google.com/macros/s/AKfycbyvFoKs5_zfX2PNoaSAIIKjKgkryZkitxfBw21PG6mq0m1SJpByGZf-twzGlhBOb0Sw/exec"
          width="300%"
          height="600" // Adjust the height as needed
          frameBorder="0"
          allowFullScreen
          title="Embedded Google Sheets"
          style={{ minHeight: "800px" }} // Set minimum height for responsiveness
        ></iframe>
      </div>

      {/* Optional: Add a button or link */}
      <div className="flex justify-center mt-4">
        <Link href="/test">
          <a className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Test Button
          </a>
        </Link>
      </div>
    </div>
  );
}

export default AboutsMain;
