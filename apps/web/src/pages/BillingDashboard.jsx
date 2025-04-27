import React from 'react';
import { Line, Doughnut } from 'react-chartjs-2';

const revenueData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
  datasets: [
    {
      label: 'Revenue',
      data: [10000, 15000, 13000, 17000, 21000],
      borderColor: 'blue',
      backgroundColor: 'lightblue',
      tension: 0.4
    }
  ]
};

const overdueData = {
  labels: ['Paid', 'Overdue'],
  datasets: [
    {
      data: [85, 15],
      backgroundColor: ['#36A2EB', '#FF6384']
    }
  ]
};

export default function BillingDashboard() {
  return (
    <div className="p-6 grid gap-6">
      <h1 className="text-2xl font-bold">💵 Billing Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="border p-4 rounded shadow-lg">
          <h2 className="text-xl mb-2">Revenue Over Time</h2>
          <Line data={revenueData} />
        </div>
        <div className="border p-4 rounded shadow-lg">
          <h2 className="text-xl mb-2">Invoice Status</h2>
          <Doughnut data={overdueData} />
        </div>
      </div>
    </div>
  );
}