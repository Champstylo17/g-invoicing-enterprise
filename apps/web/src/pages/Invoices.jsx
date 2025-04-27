import React, { useEffect, useState } from "react";
import LoadingSpinner from "@/components/LoadingSpinner";

export default function Invoices() {
  const [invoices, setInvoices] = useState(null);

  useEffect(() => {
    fetch("/api/invoices")
      .then(r => r.json())
      .then(setInvoices);
  }, []);

  // ← guard goes here
  if (!invoices) return <LoadingSpinner />;

  return (
    <div>
      {invoices.map(inv => (
        <div key={inv.id}>Invoice #{inv.id} – {inv.status}</div>
      ))}
    </div>
  );
}