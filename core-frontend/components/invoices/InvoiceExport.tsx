
import React from "react";

export default function InvoiceExport() {
  const handleExport = () => {
    alert("Export to CSV or Excel triggered!");
  };

  return (
    <div className="text-right mb-2">
      <button onClick={handleExport} className="bg-blue-600 text-white px-4 py-2 rounded shadow">
        Export CSV
      </button>
    </div>
  );
}
