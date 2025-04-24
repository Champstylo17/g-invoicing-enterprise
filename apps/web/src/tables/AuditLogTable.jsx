import React from "react";

export default function AuditLogTable({ data = [] }) {
  return (
    <div className="bg-white rounded-md shadow overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200 text-sm">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Entity ID</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Performed By</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">From Status</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">To Status</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Timestamp</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {data.slice(0, 50).map((log, index) => (
            <tr key={index}>
              <td className="px-6 py-4 whitespace-nowrap">{log.entity_id}</td>
              <td className="px-6 py-4 whitespace-nowrap">{log.performed_by}</td>
              <td className="px-6 py-4 whitespace-nowrap">{log.from_status}</td>
              <td className="px-6 py-4 whitespace-nowrap">{log.to_status}</td>
              <td className="px-6 py-4 whitespace-nowrap">{log.timestamp}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
