/** @format */
"use client";

import { ProgressBar } from "@/components/ProgressBar";
import { useState } from "react";

export default function Home() {
  const [progress, setProgress] = useState<number>(50); // Example progress value

  // Function to simulate progress change (you can implement your logic)
  const addProgress = () => {
    if (progress < 100) {
      setProgress((progress) => progress + 10);
    }
  };
  const minusProgress = () => {
    if (progress > 0) {
      setProgress((progress) => progress - 10);
    }
  };
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-bold mb-4">
        Progress Bar Component Example
      </h1>
      <div className="flex gap-2 items-center">
        <ProgressBar progress={progress} />
        <span>{progress}% </span>
      </div>
      <div className="flex gap-2 items-center">
        <button
          className="mt-4 px-3 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          onClick={addProgress}
        >
          +
        </button>
        <button
          className="mt-4 px-3 py-1 bg-red-400 text-white rounded-md hover:bg-red-500"
          onClick={minusProgress}
        >
          _
        </button>
      </div>
    </div>
  );
}
