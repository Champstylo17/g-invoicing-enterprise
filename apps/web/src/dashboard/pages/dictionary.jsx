import { useState } from 'react';

const data = [
  { entity: 'Agreement', attributes: 'id, type, amount, agency' },
  { entity: 'Order', attributes: 'id, supplier, deliveryDate' },
  { entity: 'Invoice', attributes: 'id, total, issuedDate' }
];

export default function Dictionary() {
  const [query, setQuery] = useState('');
  const filtered = data.filter(row =>
    row.entity.toLowerCase().includes(query.toLowerCase()) ||
    row.attributes.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div>
      <h2 className="text-lg font-semibold mb-3">Data Dictionary</h2>
      <input
        type="text"
        className="border p-2 rounded mb-4 w-full"
        placeholder="Search by entity or attributes..."
        value={query}
        onChange={e => setQuery(e.target.value)}
      />
      <table className="w-full table-auto text-sm">
        <thead>
          <tr className="bg-gray-100">
            <th className="text-left px-2 py-1">Entity</th>
            <th className="text-left px-2 py-1">Attributes</th>
          </tr>
        </thead>
        <tbody>
          {filtered.map((row, i) => (
            <tr key={i}>
              <td className="px-2 py-1">{row.entity}</td>
              <td className="px-2 py-1">{row.attributes}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}