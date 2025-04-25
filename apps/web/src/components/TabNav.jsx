import React from "react";

export default function TabNav({ tabs = [], active, onChange }) {
  return (
    <nav className="border-b border-gray-300 bg-slate-100 px-4 py-2 rounded-t-md shadow-md overflow-x-auto">
      <ul className="flex space-x-3 text-sm font-medium text-gray-800 min-w-max">
        {[
          "dashboard",
          "ai",
          "financials",
          "ontology",
          "integration",
          "tools",
          "system-config",
          "devops",
          "workflow-studio"
        ].map((tab) => (
          <li key={tab}>
            <button
              onClick={() => onChange(tab)}
              className={`px-4 py-2 rounded-md transition whitespace-nowrap ${
                active === tab
                  ? "bg-govblue text-white shadow"
                  : "hover:bg-govblue hover:text-white bg-white border border-gray-300"
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
