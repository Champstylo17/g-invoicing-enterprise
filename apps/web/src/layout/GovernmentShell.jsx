// apps/web/src/layout/GovernmentShell.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function GovernmentShell({ children }) {
  return (
    // make this just the “right‐hand” flex‐column container
    <div className="flex flex-col flex-1 bg-gray-50 text-gray-900 font-sans min-h-screen">
      {/* Global header */}
      <header className="h-16 bg-white border-b border-gray-200 px-6 flex items-center justify-between shadow-sm">
        <div className="text-lg font-semibold tracking-wide text-govblue">
          G-Invoicing Enterprise Portal
        </div>
        <div className="flex items-center space-x-4">
          <span className="text-sm text-gray-600">Welcome, Analyst</span>
          <div className="w-8 h-8 bg-gray-300 rounded-full" />
        </div>
      </header>

      {/* page body */}
      <main className="flex-1 overflow-y-auto p-6">
        {children}
      </main>

      {/* optional footer */}
      <footer className="px-6 py-4 text-xs text-gray-500 border-t border-gray-200">
        © 2025 G-Invoicing Enterprise
      </footer>
    </div>
  );
}
