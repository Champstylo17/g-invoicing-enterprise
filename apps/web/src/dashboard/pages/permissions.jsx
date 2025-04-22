import { useState } from 'react';

const data = [
  { role: 'Author', from: 'Draft', to: 'Pending' },
  { role: 'Reviewer', from: 'Pending', to: 'Approved' },
  { role: 'Approver', from: 'Approved', to: 'Closed' }
];

function exportCSV(rows) {
  const header = Object.keys(rows[0]).join(',');
  const values = rows.map(row => Object.values(row).join(','));
  const csv = [header, ...values].join('\n');
  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.setAttribute('download', 'permissions.csv');
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

export default function Permissions() {
  const [query, setQuery] = useState('');
  const filtered = data.filter(
    row => row.role.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Permissions Table</h2>
        <button
          className="bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600"
          onClick={() => exportCSV(filtered)}
        >
          Export CSV
        </button>
      </div>
      <input
        type="text"
        className="border p-2 rounded mb-4 w-full"
        placeholder="Search by role..."
        value={query}
        onChange={e => setQuery(e.target.value)}
      />
      <table className="w-full table-auto text-sm">
        <thead>
          <tr className="bg-gray-100">
            <th className="text-left px-2 py-1">Role</th>
            <th className="text-left px-2 py-1">From</th>
            <th className="text-left px-2 py-1">To</th>
          </tr>
        </thead>
        <tbody>
          {filtered.map((row, i) => (
            <tr key={i}>
              <td className="px-2 py-1">{row.role}</td>
              <td className="px-2 py-1">{row.from}</td>
              <td className="px-2 py-1">{row.to}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}