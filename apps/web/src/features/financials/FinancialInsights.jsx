import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { name: 'Q1', Budget: 400000, Actual: 385000 },
  { name: 'Q2', Budget: 420000, Actual: 410000 },
  { name: 'Q3', Budget: 430000, Actual: 440000 },
  { name: 'Q4', Budget: 450000, Actual: 455000 },
];

export default function FinancialInsights() {
  return (
    <div className="bg-white p-6 rounded shadow">
      <h3 className="text-xl font-semibold mb-4">Budget vs Actual</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="Budget" fill="#1a4480" />
          <Bar dataKey="Actual" fill="#a31f34" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
