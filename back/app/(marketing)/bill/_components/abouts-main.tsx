import React, { useState } from "react";
import Link from "next/link";
import { Content } from "./content";

export function AboutsMain() {
  const [inputValue, setInputValue] = useState(""); // State to hold the input value

  const handleInputChange = (event) => {
    setInputValue(event.target.value); // Update the state with the input value
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform any action with the input value, such as submitting a form or making an API call
    console.log("Input value:", inputValue);
    // Clear the input field after submission (optional)
    setInputValue("");
  };

  return (
    <div className="text-center pt-20 pb-10 sm:pt-32 flex flex-col justify-center items-center space-y-4">
      {/* Input Form */}
      <form onSubmit={handleSubmit} className="border border-gray-400 rounded-lg p-4">
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Enter something..."
          className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-2"
        >
          Submit
        </button>
      </form>

      {/* Links with Buttons */}
      <div className="border border-gray-400 rounded-lg p-4">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          <Link href="/padding_order">
            <a>Contact 1</a>
          </Link>
        </button>
      </div>

      <div className="border border-gray-400 rounded-lg p-4">
        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
          <Link href="/contact-us">
            <a>Contact 2</a>
          </Link>
        </button>
      </div>

      <div className="border border-gray-400 rounded-lg p-4">
        <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
          <Link href="/delivery-rates">
            <a>Contact 3</a>
          </Link>
        </button>
      </div>
    </div>
  );
}
