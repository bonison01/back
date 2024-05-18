import React from "react";
import Link from "next/link";

export function AboutsMain() {
  return (
    <div className="text-center pt-20 pb-10 sm:pt-32 flex flex-col justify-center items-center space-y-4">
      <div className="font-semibold text-base sm:text-lg w-[70%]">
        Pleasee Click the button to check the order history by date
      </div>

      <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-10 pt-2 sm:pt-10">

        <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-1 px-2 rounded">
          <Link href="https://docs.google.com/spreadsheets/d/e/2PACX-1vSzACu-sIziPAqQrUGFPbZe9GG4iwrmWNo6JuGNjM-ws1fjI8Jetn2ZEd6BUtu95QIPPvXR5H-iKJQa/pub?gid=832371842&single=true&output=pdf">
            <a>Last 3 Days</a>
          </Link>
        </button>
        <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-1 px-2 rounded">
          <Link href="https://docs.google.com/spreadsheets/d/e/2PACX-1vSzACu-sIziPAqQrUGFPbZe9GG4iwrmWNo6JuGNjM-ws1fjI8Jetn2ZEd6BUtu95QIPPvXR5H-iKJQa/pub?gid=528949344&single=true&output=pdf">
            <a>Last 7 Days</a>
          </Link>
        </button>
        <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-1 px-2 rounded">
          <Link href="https://docs.google.com/spreadsheets/d/e/2PACX-1vSzACu-sIziPAqQrUGFPbZe9GG4iwrmWNo6JuGNjM-ws1fjI8Jetn2ZEd6BUtu95QIPPvXR5H-iKJQa/pub?gid=627863744&single=true&output=pdf">
            <a>Last 30 Days</a>
          </Link>
        </button>
        <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-1 px-2 rounded">
          <Link href="https://docs.google.com/spreadsheets/d/e/2PACX-1vSzACu-sIziPAqQrUGFPbZe9GG4iwrmWNo6JuGNjM-ws1fjI8Jetn2ZEd6BUtu95QIPPvXR5H-iKJQa/pub?gid=1541449755&single=true&output=pdf">
            <a>Pending Orders</a>
          </Link>
        </button>
        <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-1 px-2 rounded">
          <Link href="https://docs.google.com/spreadsheets/d/e/2PACX-1vSzACu-sIziPAqQrUGFPbZe9GG4iwrmWNo6JuGNjM-ws1fjI8Jetn2ZEd6BUtu95QIPPvXR5H-iKJQa/pub?gid=1837077581&single=true&output=pdf">
            <a>Total Delivery Orders</a>
          </Link>
        </button>
      </div>
      <iframe
          className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-1 px-2 rounded"
          src="https://script.google.com/macros/s/AKfycbyfWjk3KOGnttY8CUzUz1H3q_qkFm_W1ph1uxNYj1oqJSt68ZDHwTmhAqU_rxwv3bN5/exec"
          width="70%"
          height="1" // Adjust the height as needed
          title="Embedded Google Sheets"
          style={{ minHeight: "100px" }} // Set minimum height for responsiveness
        ></iframe>
     
        <iframe
          className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-10 pt-2 sm:pt-10"
          src="https://script.google.com/macros/s/AKfycbyWIl83UeDDxpAi6mt1Lwwy4XUYn06rMUGA0eRODmKOW3JulWhxbycPfIlr5u1Iofx0GQ/exec"
          width="240%"
          height="300" // Adjust the height as needed
          title="Embedded Google Sheets"
          style={{ minHeight: "800px" }} // Set minimum height for responsiveness
        ></iframe>
    </div>

  );
}
export default AboutsMain;