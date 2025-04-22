import { useEffect, useState } from 'react';
import metricsData from '../data/metrics.json';

export default function Overview() {
  const [metrics, setMetrics] = useState({});

  useEffect(() => {
    const url = import.meta.env.VITE_API_URL
      ? `${import.meta.env.VITE_API_URL}/api/metrics`
      : null;

    if (url) {
      fetch(url)
        .then(res => res.json())
        .then(setMetrics)
        .catch(() => setMetrics(metricsData));
    } else {
      setMetrics(metricsData);
    }
  }, []);

  return (
    <div style={{ padding: '2rem' }}>
      <h1>📊 Dashboard Overview</h1>
      <p><strong>Top Contractors:</strong> {metrics.topContractors?.join(', ')}</p>
      <p><strong>Backlog:</strong> {metrics.backlog}</p>
      <p><strong>Overdue:</strong> {metrics.invoiceOverdue}</p>
    </div>
  );
}