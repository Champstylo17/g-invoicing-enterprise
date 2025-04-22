
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import InvoicesManager from "./components/invoices";
import AgreementsPage from "./components/agreements";
import ContractorsPage from "./components/contractors";

export default function App() {
  return (
    <Router>
      <div className="flex min-h-screen bg-gray-100">
        <aside className="w-64 bg-white shadow-md p-4">
          <h1 className="text-xl font-bold mb-4">Admin Panel</h1>
          <nav>
            <ul className="space-y-2">
              <li><Link to="/" className="text-blue-600 hover:underline">Invoices</Link></li>
              <li><Link to="/agreements" className="text-blue-600 hover:underline">Agreements</Link></li>
              <li><Link to="/contractors" className="text-blue-600 hover:underline">Contractors</Link></li>
            </ul>
          </nav>
        </aside>
        <main className="flex-1 p-6">
          <Routes>
            <Route path="/" element={<InvoicesManager />} />
            <Route path="/agreements" element={<AgreementsPage />} />
            <Route path="/contractors" element={<ContractorsPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}
