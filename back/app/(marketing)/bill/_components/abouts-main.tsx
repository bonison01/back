import React from "react";
import Link from "next/link";

export function AboutsMain() {
  return (
    <div className="h-screen flex justify-center items-center">
      {/* Embedded Google Sheets iframe */}
      <div className="w-full h-full">
        {/* Apply styles to the iframe */}
        <iframe
          className="w-full h-full"
          src="https://script.google.com/macros/s/AKfycbxy4qYFPBKtM-cmCgyxnJhMpLtnDIkr5w1NPL3lNpA2zz66LQ6tWSFA52dK2X3Fq4mmuw/exec"
          title="Track your Order"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}

export default AboutsMain;
