import { useEffect, useState } from 'react';

export default function Overview() {
  const [metrics, setMetrics] = useState({});

  useEffect(() => {
    fetch('/api/metrics')
      .then(res => res.json())
      .then(setMetrics);
  }, []);

  return (
    <div style={{ padding: "2rem" }}>
      <h1>📊 Dashboard Overview</h1>

      <p>
        <strong>Top Contractors:</strong>{' '}
        {Array.isArray(metrics.topContractors)
          ? metrics.topContractors.join(', ')
          : 'Loading...'}
      </p>

      <p>
        <strong>Backlogged Agreements:</strong>{' '}
        {metrics.backlog ?? 'Loading...'}
      </p>

      <p>
        <strong>Overdue Invoices:</strong>{' '}
        {metrics.invoiceOverdue ?? 'Loading...'}
      </p>
    </div>
  );
}
