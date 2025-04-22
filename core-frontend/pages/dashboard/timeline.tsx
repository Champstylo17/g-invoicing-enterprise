
import React from 'react';

export default function TimelinePage() {
  const events = [
    { date: '2025-04-01', type: 'Invoice Created', detail: 'Invoice #105' },
    { date: '2025-04-10', type: 'Agreement Expiry', detail: 'Agreement A1' }
  ];

  return (
    <div>
      <h1>Event Timeline</h1>
      <ul>
        {events.map((e, i) => (
          <li key={i}>{e.date} — {e.type}: {e.detail}</li>
        ))}
      </ul>
    </div>
  );
}
