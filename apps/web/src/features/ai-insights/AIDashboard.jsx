import React from "react";

export default function AIDashboard({ riskLevel }) {
  const mockData = [
    { agency: "DoD", score: 92, level: "High" },
    { agency: "EPA", score: 67, level: "Moderate" },
    { agency: "VA", score: 45, level: "Low" }
  ];

  const filtered = riskLevel === "All" ? mockData : mockData.filter(d => d.level === riskLevel);

  return (
    <div className="space-y-4">
      {filtered.map((item, i) => (
        <div key={i} className="bg-white p-4 rounded shadow">
          <h4 className="font-semibold">{item.agency}</h4>
          <p>Risk Score: <strong>{item.score}</strong> ({item.level})</p>
        </div>
      ))}
    </div>
  );
}
