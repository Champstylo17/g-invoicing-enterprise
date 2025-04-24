import React from "react";

export default function PermissionsTable({ data = [] }) {
  return (
    <div className="bg-white rounded-md shadow overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200 text-sm">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left font-medium text-gray-500 uppercase tracking-wider">Role</th>
            <th className="px-6 py-3 text-left font-medium text-gray-500 uppercase tracking-wider">From State</th>
            <th className="px-6 py-3 text-left font-medium text-gray-500 uppercase tracking-wider">To State</th>
            <th className="px-6 py-3 text-left font-medium text-gray-500 uppercase tracking-wider">Allowed</th>
            <th className="px-6 py-3 text-left font-medium text-gray-500 uppercase tracking-wider">Change Type</th>
            <th className="px-6 py-3 text-left font-medium text-gray-500 uppercase tracking-wider">Reviewer Notes</th>
            <th className="px-6 py-3 text-left font-medium text-gray-500 uppercase tracking-wider">Timestamp</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {data.slice(0, 50).map((perm, index) => (
            <tr key={index}>
              <td className="px-6 py-4 whitespace-nowrap">{perm.role}</td>
              <td className="px-6 py-4 whitespace-nowrap">{perm.from_state}</td>
              <td className="px-6 py-4 whitespace-nowrap">{perm.to_state}</td>
              <td className="px-6 py-4 whitespace-nowrap">{perm.allowed ? "Yes" : "No"}</td>
              <td className="px-6 py-4 whitespace-nowrap">{perm.change_type}</td>
              <td className="px-6 py-4 whitespace-nowrap">{perm.reviewer_notes}</td>
              <td className="px-6 py-4 whitespace-nowrap">{perm.timestamp}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
