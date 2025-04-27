import React, { useEffect, useState } from 'react';
import LoadingSpinner from '@/components/LoadingSpinner';

export default function Payments() {
  const [payments, setPayments] = useState(null);

  useEffect(() => {
    fetch('/api/payments')
      .then(res => res.json())
      .then(setPayments)
      .catch(console.error);
  }, []);

  if (!payments) return <LoadingSpinner />;

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Payments</h1>
      <table className="w-full bg-white rounded shadow-card">
        <thead>
          <tr className="text-left">
            <th className="px-4 py-2">ID</th>
            <th className="px-4 py-2">Amount</th>
            <th className="px-4 py-2">Status</th>
            <th className="px-4 py-2">Date</th>
          </tr>
        </thead>
        <tbody>
          {payments.map(p => (
            <tr key={p.id} className="border-t">
              <td className="px-4 py-2">{p.id}</td>
              <td className="px-4 py-2">${p.amount.toFixed(2)}</td>
              <td className="px-4 py-2">{p.status}</td>
              <td className="px-4 py-2">{new Date(p.created_at).toLocaleDateString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
