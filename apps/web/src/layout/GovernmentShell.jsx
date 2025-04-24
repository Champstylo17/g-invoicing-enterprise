import React from "react";
import { Link } from "react-router-dom";

export default function GovernmentShell({ children }) {
  return (
    <div className="flex h-screen bg-slate-50 text-gray-900 font-sans">
      <aside className="w-64 bg-govblue text-white flex flex-col shadow-lg">
        <div className="p-4 text-xl font-bold border-b border-blue-800 tracking-wide">
          ⚖️ G-Invoicing Gov
        </div>
        <nav className="flex-1 overflow-y-auto p-4 space-y-2">
          <SidebarLink to="/dashboard" label="Dashboard" />
          <SidebarLink to="/ai" label="AI Insights" />
          <SidebarLink to="/financials" label="Financial Analysis" />
          <SidebarLink to="/ontology" label="Ontology Explorer" />
          <SidebarLink to="/integration" label="Integrations" />
          <SidebarLink to="/tools" label="Developer Tools" />
        </nav>
        <div className="p-4 text-sm border-t border-blue-900">
          GovCloud Enterprise ⸻ 2025
        </div>
      </aside>
      <main className="flex-1 flex flex-col">
        <header className="h-16 bg-white border-b border-gray-200 px-6 flex items-center justify-between shadow-sm">
          <div className="text-lg font-semibold tracking-wide text-govblue">
            G-Invoicing Enterprise Portal
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-sm text-gray-600">Welcome, Analyst</span>
            <div className="w-8 h-8 bg-gray-300 rounded-full" />
          </div>
        </header>
        <section className="flex-1 overflow-y-auto p-6">
          {children}
        </section>
      </main>
    </div>
  );
}

function SidebarLink({ to, label }) {
  return (
    <Link
      to={to}
      className="block px-3 py-2 rounded hover:bg-blue-900 transition text-sm"
    >
      {label}
    </Link>
  );
}
