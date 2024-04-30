import React from "react";
import Link from "next/link";  // Note: Link seems unused in this snippet.

export default function AboutsMain() {
  // Inline styles to make the iframe take the full width and height of the viewport
  const iframeStyle = {
    width: '100vw',  // 100% of the viewport width
    height: '100vh',  // 100% of the viewport height
    border: 'none'  // Remove the border for a cleaner look
  };

  return (
    <iframe
      style={iframeStyle}
      src="https://script.google.com/macros/s/AKfycbxy4qYFPBKtM-cmCgyxnJhMpLtnDIkr5w1NPL3lNpA2zz66LQ6tWSFA52dK2X3Fq4mmuw/exec"
      allowFullScreen
    ></iframe>
  );
}
