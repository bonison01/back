import React from "react";
import Link from "next/link";

function AboutsMain() {
  return (
    <div>
      {/* Button container with flex layout */}
      <div></div>
        {/* Buttons with Link components */}
        <button>
          <Link href="/911-today">
            <a>Today Orders</a>
          </Link>
        </button>
        {/* Add similar buttons for other links */}
      </div>
    </div>
  );
}

