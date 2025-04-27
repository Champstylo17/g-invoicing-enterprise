import React from "react";

export default function TabNav({ tabs = [], active, onChange }) {
  return (
    <nav className="border-b border-gray-200 bg-white px-4 py-3 shadow-md">
      <ul className="flex flex-wrap gap-2 md:gap-4 text-sm font-semibold text-gray-800">
        {tabs.map((tab) => (
          <li key={tab}>
            <button
              onClick={() => onChange(tab)}
              className={`px-4 py-2 rounded-full transition whitespace-nowrap ${
                active === tab
                  ? "bg-govblue text-white shadow"
                  : "bg-govgray text-govblue hover:bg-govblue hover:text-white border border-govblue"
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1).replace(/-|_/g, " ")}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}