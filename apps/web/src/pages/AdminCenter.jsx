import React from 'react';

export default function AdminCenter() {
  return (
    <div className="p-6 grid gap-6">
      <h1 className="text-2xl font-bold">🏛️ Admin Command Center</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="border p-4 rounded shadow-lg">Total Agreements: 102</div>
        <div className="border p-4 rounded shadow-lg">Active Invoices: $4.7M</div>
        <div className="border p-4 rounded shadow-lg">Agencies Managed: 12</div>
      </div>
    </div>
  );
}