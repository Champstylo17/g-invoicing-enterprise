import { useState } from 'react';

const data = [
  { transition: 'Pending → Approved', reason: 'All validations passed' },
  { transition: 'Approved → Closed', reason: 'Project completed' }
];

export default function Compliance() {
  const [query, setQuery] = useState('');
  const filtered = data.filter(row =>
    row.transition.toLowerCase().includes(query.toLowerCase()) ||
    row.reason.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div>
      <h2 className="text-lg font-semibold mb-3">Compliance Justifications</h2>
      <input
        type="text"
        className="border p-2 rounded mb-4 w-full"
        placeholder="Search transition or reason..."
        value={query}
        onChange={e => setQuery(e.target.value)}
      />
      <table className="w-full table-auto text-sm">
        <thead>
          <tr className="bg-gray-100">
            <th className="text-left px-2 py-1">Transition</th>
            <th className="text-left px-2 py-1">Reason</th>
          </tr>
        </thead>
        <tbody>
          {filtered.map((row, i) => (
            <tr key={i}>
              <td className="px-2 py-1">{row.transition}</td>
              <td className="px-2 py-1">{row.reason}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}