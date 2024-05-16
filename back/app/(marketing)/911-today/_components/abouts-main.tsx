import React from "react";
import Link from "next/link";
import styles from "./AboutsMain.module.css"; // Import CSS module

function AboutsMain() {
  return (
    <div className={styles["full-screen-container"]}>
      {/* Button container with flex layout */}
      <div className={`${styles["text-center"]} ${styles["pt-20"]} ${styles["pb-10"]} ${styles["sm-pt-32"]}`}>
        {/* Buttons with Link components */}
        <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-1 px-2 rounded">
          <Link href="/911-today">
            <a>Today Orders</a>
          </Link>
        </button>
        {/* Add similar buttons for other links */}
      </div>

      {/* Embedded Google Sheets iframe */}
      <div className="w-full max-w-screen-lg mx-auto">
        <iframe
          src="https://docs.google.com/spreadsheets/d/e/2PACX-1vS_mahjlomhCW9nR8UGCePcaNb7rchT0hhhdYhMc8Syk5nNlPN1UN7wRJZ1pi23UpalLe76D0kKjNi9/pubhtml?gid=1385903661&single=true"
          width="100%"
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
