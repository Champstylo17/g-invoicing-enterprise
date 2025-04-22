import { useEffect, useState } from 'react';

export default function Invoices() {
  const [invoices, setInvoices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/invoices')
      .then(res => res.json())
      .then(data => {
        setInvoices(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <div style={{ padding: "2rem" }}>
      <h1>📄 Invoice Tracker</h1>

      {loading ? (
        <p>Loading invoices...</p>
      ) : invoices.length === 0 ? (
        <p>No invoices found.</p>
      ) : (
        <ul>
          {invoices.map((invoice, index) => (
            <li key={index}>
              <strong>ID:</strong> {invoice.id} — <strong>Agency:</strong> {invoice.agency} — <strong>Amount:</strong> ${invoice.amount}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
