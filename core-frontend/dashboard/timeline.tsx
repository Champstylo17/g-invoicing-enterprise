
export default function Timeline() {
  const events = [
    { date: '2025-04-01', label: 'Invoice Created' },
    { date: '2025-04-15', label: 'Agreement Expired' }
  ];

  return (
    <div>
      <h2>Event Timeline</h2>
      <ul>{events.map((e, i) => <li key={i}>{e.date} - {e.label}</li>)}</ul>
    </div>
  );
}
