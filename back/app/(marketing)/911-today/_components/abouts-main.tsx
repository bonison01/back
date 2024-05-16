import React from "react";
import Link from "next/link";

export function AboutsMain() {
  return (
       <iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQ4lGvSRnYQUInoFIyzTRnl5uT-0H3bumKa7mAPL-Tkx9wErmZiXrhywV5zERfS2wryuhrhMmdhg_9w/pubhtml?gid=2145206756&amp;single=true&amp;widget=true&amp;headers=false"></iframe>

      {/* Embedded Google Sheets iframe */}
      <div className="w-full max-w-screen-lg mx-auto">
        <iframe
          src="https://docs.google.com/spreadsheets/d/e/2PACX-1vS_mahjlomhCW9nR8UGCePcaNb7rchT0hhhdYhMc8Syk5nNlPN1UN7wRJZ1pi23UpalLe76D0kKjNi9/pubhtml?gid=1385903661&single=true"
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
