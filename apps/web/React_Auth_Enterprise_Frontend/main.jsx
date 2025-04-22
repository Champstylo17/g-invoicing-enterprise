import React, { useState, useEffect } from "react";
import { createRoot } from "react-dom/client";
import "./style.css";

const App = () => {
  const [token, setToken] = useState(localStorage.getItem("token") || "");
  const [role, setRole] = useState(localStorage.getItem("role") || "");
  const [invoices, setInvoices] = useState([]);
  const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

  const login = async () => {
    const res = await fetch(`${API_URL}/api/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username: "admin", password: "admin123" })
    });
    const data = await res.json();
    if (data.token) {
      setToken(data.token);
      setRole(data.role);
      localStorage.setItem("token", data.token);
      localStorage.setItem("role", data.role);
    }
  };

  const logout = () => {
    setToken("");
    setRole("");
    localStorage.removeItem("token");
    localStorage.removeItem("role");
  };

  const fetchInvoices = async () => {
    const res = await fetch(`${API_URL}/api/invoices`, {
      headers: { Authorization: `Bearer ${token}` }
    });
    const data = await res.json();
    setInvoices(data);
  };

  useEffect(() => {
    if (token) fetchInvoices();
  }, [token]);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Enterprise SaaS Dashboard</h1>
      {!token ? (
        <button onClick={login} className="bg-blue-600 text-white px-4 py-2 rounded">
          Login
        </button>
      ) : (
        <div>
          <div className="flex justify-between mb-4">
            <p>Role: <strong>{role}</strong></p>
            <button onClick={logout} className="text-red-600 underline">Logout</button>
          </div>
          <ul className="space-y-2">
            {invoices.map(inv => (
              <li key={inv.id} className="bg-white p-3 rounded shadow">
                Invoice #{inv.id} – ${inv.amount}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

const root = createRoot(document.getElementById("root"));
root.render(<App />);
