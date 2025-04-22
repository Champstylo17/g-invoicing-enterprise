import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import "./style.css";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip } from 'chart.js';
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip);

const App = () => {
  const [token, setToken] = useState("");
  const [invoices, setInvoices] = useState([]);

  const login = async () => {
    const res = await fetch("http://localhost:5000/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username: "admin", password: "password123" }),
    });
    const data = await res.json();
    setToken(data.token);
  };

  const fetchInvoices = async () => {
    const res = await fetch("http://localhost:5000/api/invoices", {
      headers: { Authorization: `Bearer ${token}` },
    });
    const data = await res.json();
    setInvoices(data);
  };

  useEffect(() => {
    if (token) fetchInvoices();
  }, [token]);

  const chartData = {
    labels: invoices.map(inv => `#${inv.id}`),
    datasets: [
      {
        label: "Invoice Amount ($)",
        data: invoices.map(inv => inv.amount),
        backgroundColor: "rgba(59, 130, 246, 0.6)",
      },
    ],
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Enterprise Invoices</h1>
      {!token ? (
        <button onClick={login} className="bg-blue-500 text-white px-4 py-2 rounded">Login</button>
      ) : (
        <>
          <ul className="mb-6">
            {invoices.map((inv) => (
              <li key={inv.id} className="bg-white p-2 mb-2 rounded shadow">ID: {inv.id} — ${inv.amount}</li>
            ))}
          </ul>
          <div className="bg-white p-4 rounded shadow">
            <Bar data={chartData} />
          </div>
        </>
      )}
    </div>
  );
};

const root = createRoot(document.getElementById("root"));
root.render(<App />);
