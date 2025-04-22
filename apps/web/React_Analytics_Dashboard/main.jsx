import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import { Bar, Pie } from "react-chartjs-2";
import { Chart, BarElement, ArcElement, CategoryScale, LinearScale, Tooltip, Legend } from "chart.js";
Chart.register(BarElement, ArcElement, CategoryScale, LinearScale, Tooltip, Legend);

const App = () => {
  const [data, setData] = useState(null);
  const API = "http://localhost:5000/api/stats/overview";

  useEffect(() => {
    fetch(API).then(res => res.json()).then(setData);
  }, []);

  if (!data) return <p className="p-6">Loading analytics...</p>;

  const roleLabels = data.userRoles.map(r => r.role);
  const roleCounts = data.userRoles.map(r => r.count);

  return (
    <div className="p-6 font-sans bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">📊 Analytics Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="bg-white shadow p-4 rounded">
          <h2 className="text-lg font-semibold">Total Invoices</h2>
          <p className="text-2xl">{data.invoiceCount}</p>
        </div>
        <div className="bg-white shadow p-4 rounded">
          <h2 className="text-lg font-semibold">Total Amount</h2>
          <p className="text-2xl">${data.totalAmount.toFixed(2)}</p>
        </div>
        <div className="bg-white shadow p-4 rounded">
          <h2 className="text-lg font-semibold">User Roles</h2>
          <ul className="list-disc list-inside">
            {data.userRoles.map(r => (
              <li key={r.role}>{r.role}: {r.count}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white shadow p-4 rounded">
          <h3 className="text-lg font-semibold mb-2">User Role Distribution</h3>
          <Pie
            data={{
              labels: roleLabels,
              datasets: [{
                label: "Users",
                data: roleCounts,
                backgroundColor: ["#60a5fa", "#34d399", "#f87171"]
              }]
            }}
          />
        </div>

        <div className="bg-white shadow p-4 rounded">
          <h3 className="text-lg font-semibold mb-2">Invoice Count Bar</h3>
          <Bar
            data={{
              labels: ["Invoices"],
              datasets: [{
                label: "Count",
                data: [data.invoiceCount],
                backgroundColor: "#6366f1"
              }]
            }}
          />
        </div>
      </div>
    </div>
  );
};

createRoot(document.getElementById("root")).render(<App />);
