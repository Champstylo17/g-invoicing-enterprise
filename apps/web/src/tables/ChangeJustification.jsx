export default function ChangeJustification() {
  const rows = [
    { transition: 'Pending →', reason: 'All revisions complete' },
    { transition: 'Close →', reason: 'Agreement voided' }
  ];

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h3 className="text-sm text-gray-600 mb-2">Change Justification Capture</h3>
      <table className="w-full text-sm text-left text-gray-700">
        <thead>
          <tr><th>Transition</th><th>Reason</th></tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i}><td>{row.transition}</td><td>{row.reason}</td></tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}