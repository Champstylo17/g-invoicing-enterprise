import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Dashboard() {
  const location = useLocation();

  const navItems = [
    { path: '/dashboard/overview', label: '📊 Overview' },
    { path: '/dashboard/invoices', label: '🧾 Invoices' },
    { path: '/dashboard/agencies', label: '🏛️ Agencies' }
  ];

  return (
    <div className="flex h-screen font-sans bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md flex flex-col p-4">
        <h1 className="text-2xl font-bold mb-8 text-blue-600">G-Invoicing</h1>
        <nav className="space-y-2">
          {navItems.map(({ path, label }) => (
            <Link
              key={path}
              to={path}
              className={`block px-4 py-2 rounded-md transition-all ${
                location.pathname === path
                  ? 'bg-blue-500 text-white'
                  : 'text-gray-700 hover:bg-blue-100'
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>
        <footer className="mt-auto text-sm text-gray-400 pt-4 border-t">
          <p>© 2025 G-Invoicing Platform</p>
        </footer>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 p-10 overflow-y-auto">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">Welcome to your dashboard</h2>
        <p className="text-gray-600">
          Select a module from the sidebar to begin managing intergovernmental agreements, invoices, and agency data.
        </p>
      </main>
    </div>
  );
}
