
import { useEffect, useState } from 'react';
export default function Overview() {
  const [metrics, setMetrics] = useState({});
  useEffect(() => {
    fetch('/api/metrics').then(res => res.json()).then(setMetrics);
  }, []);
  return (
    <div>
      <h1>Dashboard Overview</h1>
      <p>Top Contractors: {metrics.topContractors}</p>
      <p>Backlogged Agreements: {metrics.backlog}</p>
    </div>
  );
}
