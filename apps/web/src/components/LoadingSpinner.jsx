import React from "react";

export default function LoadingSpinner() {
  return (
    <div className="flex justify-center items-center h-full">
      <div className="animate-spin rounded-full h-8 w-8 border-4 border-govblue border-t-transparent"></div>
    </div>
  );
}
