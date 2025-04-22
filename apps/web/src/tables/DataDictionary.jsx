export default function DataDictionary() {
  const rows = [
    { entity: 'Agreement', attributes: 'ID, partner, amount' },
    { entity: 'Order', attributes: 'ID, department, date' }
  ];

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h3 className="text-sm text-gray-600 mb-2">Data Dictionary</h3>
      <table className="w-full text-sm text-left text-gray-700">
        <thead>
          <tr><th>Entity</th><th>Attributes</th></tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i}><td>{row.entity}</td><td>{row.attributes}</td></tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}