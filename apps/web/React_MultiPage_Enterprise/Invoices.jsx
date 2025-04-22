import { useEffect, useState } from "react";

const Invoices = ({ token }) => {
  const [invoices, setInvoices] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/invoices", {
      headers: { Authorization: `Bearer ${token}` }
    })
      .then(res => res.json())
      .then(setInvoices);
  }, [token]);

  return (
    <div>
      <h1 className="text-xl font-bold">Invoices</h1>
      <ul className="mt-4 space-y-2">
        {invoices.map(inv => (
          <li key={inv.id} className="bg-white p-3 rounded shadow">
            Invoice #{inv.id} — ${inv.amount}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Invoices;
