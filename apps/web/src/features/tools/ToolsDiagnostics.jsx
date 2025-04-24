import React from "react";

export default function ToolsDiagnostics() {
  const tools = ["Data Seeder", "Test Suite", "Log Viewer"];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {tools.map((tool, i) => (
        <div key={i} className="bg-white p-4 rounded shadow">
          <h4 className="font-semibold">{tool}</h4>
          <p className="text-sm text-gray-500">Utility description and access logs.</p>
        </div>
      ))}
    </div>
  );
}
