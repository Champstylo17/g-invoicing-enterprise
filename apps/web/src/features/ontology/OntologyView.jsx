import React from "react";

export default function OntologyView() {
  const categories = ["Agency", "Funding Source", "Performance Status"];
  return (
    <div className="space-y-4">
      {categories.map((cat, i) => (
        <div key={i} className="border-l-4 border-govblue pl-4 py-2 bg-white shadow rounded">
          <h4 className="text-lg font-semibold">{cat}</h4>
          <p className="text-sm text-gray-600">Definition and lineage for {cat}</p>
        </div>
      ))}
    </div>
  );
}
