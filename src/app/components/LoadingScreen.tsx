"use client";

import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleComplete = () => setLoading(false);
    if (document.readyState === "complete") {
      handleComplete();
    } else {
      window.addEventListener("load", handleComplete);
    }
    return () => window.removeEventListener("load", handleComplete);
  }, []);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black bg-opacity-90 animate-fade-in">
      <div className="flex flex-col items-center">
        {/* Simple Code Icon using SVG */}
        <svg
          className="w-16 h-16 text-accent animate-spin"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M8 4L3 12L8 20"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M16 4L21 12L16 20"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        <p className="mt-4 text-foreground text-lg font-space">Loading...</p>
      </div>
    </div>
  );
}
