import React from "react";

export default function RootLoading() {
  return (
    <div className="min-h-screen bg-[#12141c] flex flex-col items-center justify-center space-y-4">
      {/* Animated Spinner */}
      <div className="relative flex items-center justify-center">
        <div className="w-16 h-16 border-4 border-zinc-800 border-t-[#ccff00] rounded-full animate-spin"></div>
        <div className="absolute text-xs font-black text-[#ccff00]">FIT</div>
      </div>

      {/* Loading Text */}
      <div className="text-center space-y-1">
        <p className="text-white text-base font-bold tracking-wider uppercase">
          Loading Application...
        </p>
        <p className="text-zinc-500 text-xs">
          Please wait while we prepare your plan.
        </p>
      </div>
    </div>
  );
}