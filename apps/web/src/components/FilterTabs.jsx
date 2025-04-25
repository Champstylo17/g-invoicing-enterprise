import React from "react";

export default function FilterTabs({ filters = [], active, onChange }) {
  return (
    <div className="flex space-x-2 my-4 text-sm">
      {filters.map((filter) => (
        <button
          key={filter}
          onClick={() => onChange(filter)}
          className={`px-3 py-1 rounded-full border ${
            active === filter
              ? "bg-govblue text-white border-govblue"
              : "bg-white text-gray-700 hover:bg-govblue hover:text-white border-gray-300"
          }`}
        >
          {filter}
        </button>
      ))}
    </div>
  );
}
