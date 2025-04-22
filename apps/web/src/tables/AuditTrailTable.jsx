export default function AuditTrailTable() {
  const rows = [
    { entity: 'A-113', user: 'user_u1' },
    { entity: 'O-205', user: 'user_a2' },
    { entity: 'I-768', user: 'user_j3' }
  ];

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h3 className="text-sm text-gray-600 mb-2">Transition Audit Trail</h3>
      <table className="w-full text-sm text-left text-gray-700">
        <thead>
          <tr><th>Entity ID</th><th>Performed By</th></tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i}><td>{row.entity}</td><td>{row.user}</td></tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}