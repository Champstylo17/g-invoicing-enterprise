import React from "react";

export default function TimelineChart({ data = [] }) {
  return (
    <div className="bg-white rounded-md shadow px-6 py-4">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">Contract Timeline Snapshot</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200 text-sm">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-2 text-left font-medium text-gray-500 uppercase tracking-wider">Contract ID</th>
              <th className="px-4 py-2 text-left font-medium text-gray-500 uppercase tracking-wider">Draft</th>
              <th className="px-4 py-2 text-left font-medium text-gray-500 uppercase tracking-wider">Pending</th>
              <th className="px-4 py-2 text-left font-medium text-gray-500 uppercase tracking-wider">Approved</th>
              <th className="px-4 py-2 text-left font-medium text-gray-500 uppercase tracking-wider">Obligated</th>
              <th className="px-4 py-2 text-left font-medium text-gray-500 uppercase tracking-wider">Closed</th>
              <th className="px-4 py-2 text-left font-medium text-gray-500 uppercase tracking-wider">SLA</th>
              <th className="px-4 py-2 text-left font-medium text-gray-500 uppercase tracking-wider">Reviewer</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {data.slice(0, 50).map((contract, index) => (
              <tr key={index}>
                <td className="px-4 py-2 whitespace-nowrap">{contract.contract_id}</td>
                <td className="px-4 py-2 whitespace-nowrap">{contract.timeline?.Draft || "—"}</td>
                <td className="px-4 py-2 whitespace-nowrap">{contract.timeline?.Pending || "—"}</td>
                <td className="px-4 py-2 whitespace-nowrap">{contract.timeline?.Approved || "—"}</td>
                <td className="px-4 py-2 whitespace-nowrap">{contract.timeline?.Obligated || "—"}</td>
                <td className="px-4 py-2 whitespace-nowrap">{contract.timeline?.Closed || "—"}</td>
                <td className="px-4 py-2 whitespace-nowrap">
                  <span className={`px-2 py-1 rounded-full text-xs font-semibold ${contract.sla_flag === "Compliant" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}>
                    {contract.sla_flag}
                  </span>
                </td>
                <td className="px-4 py-2 whitespace-nowrap">{contract.reviewer}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
