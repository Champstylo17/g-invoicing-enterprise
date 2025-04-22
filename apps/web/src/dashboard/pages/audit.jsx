import { useState } from 'react';

const data = [
  { entity: 'AG-1002', user: 'analyst_jkim' },
  { entity: 'ORD-1107', user: 'clerk_rsmith' },
  { entity: 'INV-0893', user: 'officer_dwayne' }
];

export default function Audit() {
  const [query, setQuery] = useState('');
  const filtered = data.filter(row =>
    row.entity.toLowerCase().includes(query.toLowerCase()) ||
    row.user.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div>
      <h2 className="text-lg font-semibold mb-3">Audit Trail</h2>
      <input
        type="text"
        className="border p-2 rounded mb-4 w-full"
        placeholder="Search entity or user..."
        value={query}
        onChange={e => setQuery(e.target.value)}
      />
      <table className="w-full table-auto text-sm">
        <thead>
          <tr className="bg-gray-100">
            <th className="text-left px-2 py-1">Entity</th>
            <th className="text-left px-2 py-1">User</th>
          </tr>
        </thead>
        <tbody>
          {filtered.map((row, i) => (
            <tr key={i}>
              <td className="px-2 py-1">{row.entity}</td>
              <td className="px-2 py-1">{row.user}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}