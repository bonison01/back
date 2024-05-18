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
          <Link href="https://docs.google.com/spreadsheets/d/e/2PACX-1vTM3_tWvGg6McJFSkIe5b2N0bXaDyFj3w1_KhYOb-wzz5GPeuVhWTLAtaGRg4NaXB4YJ_F1l3PcJgw8/pub?gid=832371842&single=true&output=pdf">
            <a>Last 3 Days</a>
          </Link>
        </button>
        <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-1 px-2 rounded">
          <Link href="https://docs.google.com/spreadsheets/d/e/2PACX-1vTM3_tWvGg6McJFSkIe5b2N0bXaDyFj3w1_KhYOb-wzz5GPeuVhWTLAtaGRg4NaXB4YJ_F1l3PcJgw8/pub?gid=528949344&single=true&output=pdf">
            <a>Last 7 Days</a>
          </Link>
        </button>
        <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-1 px-2 rounded">
          <Link href="https://docs.google.com/spreadsheets/d/e/2PACX-1vTM3_tWvGg6McJFSkIe5b2N0bXaDyFj3w1_KhYOb-wzz5GPeuVhWTLAtaGRg4NaXB4YJ_F1l3PcJgw8/pub?gid=627863744&single=true&output=pdf">
            <a>Last 30 Days</a>
          </Link>
        </button>
        <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-1 px-2 rounded">
          <Link href="https://docs.google.com/spreadsheets/d/e/2PACX-1vTM3_tWvGg6McJFSkIe5b2N0bXaDyFj3w1_KhYOb-wzz5GPeuVhWTLAtaGRg4NaXB4YJ_F1l3PcJgw8/pub?gid=1541449755&single=true&output=pdf">
            <a>Pending Orders</a>
          </Link>
        </button>
        <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-1 px-2 rounded">
          <Link href="https://docs.google.com/spreadsheets/d/e/2PACX-1vTM3_tWvGg6McJFSkIe5b2N0bXaDyFj3w1_KhYOb-wzz5GPeuVhWTLAtaGRg4NaXB4YJ_F1l3PcJgw8/pub?gid=1837077581&single=true&output=pdf">
            <a>Total Delivery Orders</a>
          </Link>
        </button>
      </div>
      <iframe
          className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-1 px-2 rounded"
          src="https://script.google.com/macros/s/AKfycbxCMuBpFRThZMBncjiOjoX7tqxG1CqtyeEBqNu1UgDAvqRSzlkgmvjHp1kvLHAuB86H/exec"
          width="70%"
          height="1" // Adjust the height as needed
          title="Embedded Google Sheets"
          style={{ minHeight: "100px" }} // Set minimum height for responsiveness
        ></iframe>
     
        <iframe
          className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-10 pt-2 sm:pt-10"
          src="https://script.google.com/macros/s/AKfycbzKlbW8ZD5xTQsKwQfHpsKg_uocmOM8nTzIs2iykmQUH6TzYoceQvMtYmsyjDHmvExg/exec"
          width="240%"
          height="300" // Adjust the height as needed
          title="Embedded Google Sheets"
          style={{ minHeight: "800px" }} // Set minimum height for responsiveness
        ></iframe>
    </div>

  );
}
export default AboutsMain;