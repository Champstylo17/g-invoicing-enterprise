import { useEffect, useState } from 'react';

export default function Agencies() {
  const [agencies, setAgencies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/agencies')
      .then(res => res.json())
      .then(data => {
        setAgencies(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <div style={{ padding: "2rem" }}>
      <h1>🏛️ Agency Directory</h1>

      {loading ? (
        <p>Loading agencies...</p>
      ) : agencies.length === 0 ? (
        <p>No agencies found.</p>
      ) : (
        <table style={{ borderCollapse: 'collapse', width: '100%' }}>
          <thead>
            <tr>
              <th style={{ textAlign: 'left', borderBottom: '1px solid #ccc' }}>Agency</th>
              <th style={{ textAlign: 'left', borderBottom: '1px solid #ccc' }}>Region</th>
              <th style={{ textAlign: 'left', borderBottom: '1px solid #ccc' }}>Subagency</th>
            </tr>
          </thead>
          <tbody>
            {agencies.map((agency, index) => (
              <tr key={index}>
                <td>{agency.name}</td>
                <td>{agency.region}</td>
                <td>{agency.subagency}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
