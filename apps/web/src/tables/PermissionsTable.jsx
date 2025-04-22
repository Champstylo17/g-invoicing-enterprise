export default function PermissionsTable() {
  const rows = [
    { role: 'Author', from: 'Draft', to: 'Dratt' },
    { role: 'Reviewer', from: 'Reviewer', to: 'Approver' }
  ];

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h3 className="text-sm text-gray-600 mb-2">Role-Based Transition Permissions</h3>
      <table className="w-full text-sm text-left text-gray-700">
        <thead>
          <tr><th>Role</th><th>From → To</th></tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i}><td>{row.role}</td><td>{row.from} → {row.to}</td></tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}