import React from "react";
import Link from "next/link";
import styles from "./AboutsMain.css"; // Import CSS module

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
    </div>
  );
}

export default AboutsMain;
