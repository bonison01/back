import React, { useState } from "react";
import Link from "next/link";
import { Content } from "./content";

export function AboutsMain() {
  // State to manage the input value
  const [inputValue, setInputValue] = useState("");

  // Function to handle input change
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div className="text-center pt-20 pb-10 sm:pt-32 flex flex-col justify-center items-center space-y-4">
      {/* Input field */}
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Enter something..."
        className="border border-gray-300 rounded px-4 py-2"
      />
      
      {/* Optional: Display the input value */}
      {inputValue && (
        <p className="mt-2">You entered: {inputValue}</p>
      )}
    </div>
  );
}
