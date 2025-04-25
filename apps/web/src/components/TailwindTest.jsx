import React from "react";

export default function TailwindTest() {
  return (
    <div className="p-6 bg-govblue text-white rounded-gov shadow-card max-w-md mx-auto mt-10">
      <h1 className="text-2xl font-bold mb-2">Tailwind is working 🎉</h1>
      <p className="text-sm">This test card uses govblue, rounded-gov, and shadow-card from your custom Tailwind theme.</p>
    </div>
  );
}
