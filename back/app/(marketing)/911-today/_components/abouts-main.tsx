import React from "react";
import Link from "next/link";

export function AboutsMain() {
  return (
    <div>
      {/* Button container with flex layout */}
      <div>
        {/* Buttons with Link components */}
        <button>
          <Link href="/911-today">
            <a>Today Orders</a>
          </Link>
        </button>
        <button>
          <Link href="/911-total">
            <a>Total Orders</a>
          </Link>
        </button>
        <button>
          <Link href="/911-pending">
            <a>Pending Orders</a>
          </Link>
        </button>
        <button>
          <Link href="/911-3day">
            <a>Last 3 day Orders</a>
          </Link>
        </button>
      </div>
    </div>
  );
}

export default AboutsMain;
