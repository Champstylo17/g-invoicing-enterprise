import React from "react";

export default function ContractorList({ data = [] }) {
  return (
    <div className="bg-white rounded-md shadow overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200 text-sm">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-4 py-3 text-left font-medium text-gray-500 uppercase tracking-wider">Contractor</th>
            <th className="px-4 py-3 text-left font-medium text-gray-500 uppercase tracking-wider">DUNS</th>
            <th className="px-4 py-3 text-left font-medium text-gray-500 uppercase tracking-wider">Agency</th>
            <th className="px-4 py-3 text-left font-medium text-gray-500 uppercase tracking-wider">Type</th>
            <th className="px-4 py-3 text-left font-medium text-gray-500 uppercase tracking-wider">Value</th>
            <th className="px-4 py-3 text-left font-medium text-gray-500 uppercase tracking-wider">Rating</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {data.slice(0, 50).map((contractor, index) => (
            <tr key={index}>
              <td className="px-4 py-2 whitespace-nowrap">{contractor.name}</td>
              <td className="px-4 py-2 whitespace-nowrap">{contractor.duns}</td>
              <td className="px-4 py-2 whitespace-nowrap">{contractor.agency}</td>
              <td className="px-4 py-2 whitespace-nowrap">{contractor.contract_type}</td>
              <td className="px-4 py-2 whitespace-nowrap">${contractor.contract_value.toLocaleString()}</td>
              <td className="px-4 py-2 whitespace-nowrap">{contractor.rating}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
