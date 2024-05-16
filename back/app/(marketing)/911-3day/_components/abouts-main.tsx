import React from "react";
import Link from "next/link";

export function AboutsMain() {
  return (
    <div className="text-center pt-20 pb-10 sm:pt-32">
      {/* Embedded Google Sheets iframe */}
      <div className="w-full max-w-screen-lg mx-auto">
        <iframe
          src="https://docs.google.com/spreadsheets/d/e/2PACX-1vRKFr7rh_ACgQ957gpeC0GOUxKS_z5jwk0-VywCjrqxd7_Q1IUNKCR6_gac9zLXco6ojRXgi4vkEuDX/pubhtml?gid=2033319182&single=true"
          width="300%"
          height="600" // Adjust the height as needed
          frameBorder="0"
          allowFullScreen
          title="Embedded Google Sheets"
          style={{ minHeight: "800px" }} // Set minimum height for responsiveness
        ></iframe>
      </div>
      {/* Button container with flex layout */}
      <div className="flex justify-center space-x-4 mb-4">
        {/* Buttons with Link components */}
        <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-1 px-2 rounded">
          <Link href="/911-today">
            <a>Today Orders</a>
          </Link>
        </button>
        <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-1 px-2 rounded">
          <Link href="/911-total">
            <a>Total Orders</a>
          </Link>
        </button>
        <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-1 px-2 rounded">
          <Link href="/911-pending">
            <a>Pending Orders</a>
          </Link>
        </button>
        <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-1 px-2 rounded">
          <Link href="/911-3day">
            <a>Last 3 day Orders</a>
          </Link>
        </button>
      </div>

      {/* Embedded Google Sheets iframe */}
      <div className="w-full max-w-screen-lg mx-auto">
        <iframe
          src="https://docs.google.com/spreadsheets/d/e/2PACX-1vRKFr7rh_ACgQ957gpeC0GOUxKS_z5jwk0-VywCjrqxd7_Q1IUNKCR6_gac9zLXco6ojRXgi4vkEuDX/pubhtml?gid=2033319182&single=true"
          width="300%"
          height="600" // Adjust the height as needed
          frameBorder="0"
          allowFullScreen
          title="Embedded Google Sheets"
          style={{ minHeight: "800px" }} // Set minimum height for responsiveness
        ></iframe>
      </div>
    </div>
  );
}

export default AboutsMain;
