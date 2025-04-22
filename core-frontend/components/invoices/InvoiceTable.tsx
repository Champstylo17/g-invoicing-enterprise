
import React from "react";

const invoices = [
  { id: "INV001", performanceId: "PERF001", amount: 1500, date: "2024-03-01", status: "Paid" },
  { id: "INV002", performanceId: "PERF002", amount: 3400, date: "2024-03-05", status: "Pending" },
  { id: "INV003", performanceId: "PERF003", amount: 2300, date: "2024-03-07", status: "Overdue" },
];

export default function InvoiceTable() {
  return (
    <div className="overflow-x-auto rounded-lg shadow border mt-4">
      <table className="min-w-full text-sm text-left text-gray-700">
        <thead className="bg-gray-100 uppercase text-xs text-gray-600">
          <tr>
            <th className="px-6 py-3">Invoice ID</th>
            <th className="px-6 py-3">Performance ID</th>
            <th className="px-6 py-3">Amount ($)</th>
            <th className="px-6 py-3">Date</th>
            <th className="px-6 py-3">Status</th>
          </tr>
        </thead>
        <tbody>
          {invoices.map((inv) => (
            <tr key={inv.id} className="border-b hover:bg-gray-50">
              <td className="px-6 py-3">{inv.id}</td>
              <td className="px-6 py-3">{inv.performanceId}</td>
              <td className="px-6 py-3">{inv.amount}</td>
              <td className="px-6 py-3">{inv.date}</td>
              <td className="px-6 py-3">{inv.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
