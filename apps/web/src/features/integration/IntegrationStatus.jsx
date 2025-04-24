import React from "react";

export default function IntegrationStatus() {
  const integrations = [
    { name: "Treasury Sync", status: "Success", lastRun: "1h ago" },
    { name: "FPDS.gov", status: "Failed", lastRun: "5h ago" },
    { name: "SAM.gov", status: "Success", lastRun: "2d ago" }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {integrations.map((intg, i) => (
        <div key={i} className="p-4 bg-white rounded shadow border-l-4 border-govblue">
          <h4 className="font-semibold">{intg.name}</h4>
          <p>Status: <span className={intg.status === "Success" ? "text-green-600" : "text-red-600"}>{intg.status}</span></p>
          <p className="text-sm text-gray-500">Last Sync: {intg.lastRun}</p>
        </div>
      ))}
    </div>
  );
}
