
import React from "react";
import InvoiceTable from "./InvoiceTable";
import InvoiceFilters from "./InvoiceFilters";
import InvoiceExport from "./InvoiceExport";

export default function InvoicesManager() {
  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-2xl font-semibold text-gray-800 mb-2">Invoices Manager</h1>
      <InvoiceFilters />
      <InvoiceExport />
      <InvoiceTable />
    </div>
  );
}
