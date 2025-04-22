import React from "react";
import { Link, Outlet } from "react-router-dom";

const Layout = () => (
  <div className="flex min-h-screen bg-gray-100">
    <aside className="w-64 bg-white shadow p-4">
      <h2 className="text-xl font-bold mb-6">Enterprise Panel</h2>
      <nav className="flex flex-col gap-4">
        <Link to="/dashboard" className="text-blue-600">Dashboard</Link>
        <Link to="/invoices" className="text-blue-600">Invoices</Link>
        <Link to="/agreements" className="text-blue-600">Agreements</Link>
        <Link to="/users" className="text-blue-600">Users</Link>
      </nav>
    </aside>
    <main className="flex-1 p-6">
      <Outlet />
    </main>
  </div>
);

export default Layout;
