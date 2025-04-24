import React from "react";

export default function AgreementExplorer({ data = [] }) {
  return (
    <div className="bg-white rounded-md shadow overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200 text-sm">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-4 py-3 text-left font-medium text-gray-500 uppercase tracking-wider">Agreement ID</th>
            <th className="px-4 py-3 text-left font-medium text-gray-500 uppercase tracking-wider">Agency</th>
            <th className="px-4 py-3 text-left font-medium text-gray-500 uppercase tracking-wider">Status</th>
            <th className="px-4 py-3 text-left font-medium text-gray-500 uppercase tracking-wider">Amount</th>
            <th className="px-4 py-3 text-left font-medium text-gray-500 uppercase tracking-wider">Start</th>
            <th className="px-4 py-3 text-left font-medium text-gray-500 uppercase tracking-wider">End</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {data.slice(0, 50).map((agreement, index) => (
            <tr key={index}>
              <td className="px-4 py-2 whitespace-nowrap">{agreement.agreement_id || agreement.id}</td>
              <td className="px-4 py-2 whitespace-nowrap">{agreement.agency || "N/A"}</td>
              <td className="px-4 py-2 whitespace-nowrap">{agreement.status || "Pending"}</td>
              <td className="px-4 py-2 whitespace-nowrap">${(agreement.amount || 0).toLocaleString()}</td>
              <td className="px-4 py-2 whitespace-nowrap">{agreement.start_date || "—"}</td>
              <td className="px-4 py-2 whitespace-nowrap">{agreement.end_date || "—"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
