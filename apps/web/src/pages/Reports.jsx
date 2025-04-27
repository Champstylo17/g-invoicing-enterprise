import React from 'react';
import { Bar, Pie, Line } from 'react-chartjs-2';

const barData = {
  labels: ['Agency A', 'Agency B', 'Agency C'],
  datasets: [{ label: 'Contracts', data: [12, 19, 3] }],
};

const pieData = {
  labels: ['Paid', 'Pending', 'Overdue'],
  datasets: [{ data: [300, 50, 100] }],
};

const lineData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr'],
  datasets: [{ label: 'Revenue', data: [4000, 3000, 5000, 6000] }],
};

export default function Reports() {
  return (
    <div className="p-6 grid gap-6">
      <h1 className="text-2xl font-bold">📈 Reports Dashboard</h1>
      <Bar data={barData} />
      <Pie data={pieData} />
      <Line data={lineData} />
    </div>
  );
}