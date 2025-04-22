
import React from "react";

export default function InvoiceFilters() {
  return (
    <div className="flex gap-4 items-center mb-4">
      <input type="text" placeholder="Search by ID..." className="border rounded px-3 py-1" />
      <select className="border rounded px-3 py-1">
        <option value="">All Status</option>
        <option value="Paid">Paid</option>
        <option value="Pending">Pending</option>
        <option value="Overdue">Overdue</option>
      </select>
    </div>
  );
}
