/** @format */

// ProgressBar.tsx
import React from "react";

interface ProgressBarProps {
  progress: number; // Progress value between 0 and 100
}

export function ProgressBar({ progress }: ProgressBarProps) {
  return (
    <div className="w-[300px] h-4 bg-gray-200 rounded-md overflow-hidden">
      <div
        className="h-full bg-blue-500 transition-all"
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
}
