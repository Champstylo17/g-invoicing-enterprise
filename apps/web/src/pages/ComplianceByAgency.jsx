import { Card, CardContent } from "@/components/ui/card";

export default function ComplianceByAgency() {
  const agencies = [
    { name: "Department of Treasury", compliance: 92 },
    { name: "Department of Defense", compliance: 85 },
    { name: "General Services Administration", compliance: 78 },
  ];

  return (
    <div className="p-6 space-y-4">
      <h1 className="text-2xl font-semibold">⚖️ Compliance by Agency</h1>
      {agencies.map((agency, idx) => (
        <Card key={idx} className="bg-white shadow">
          <CardContent className="p-4 flex justify-between items-center">
            <span className="font-medium">{agency.name}</span>
            <span className={`font-bold ${agency.compliance >= 90 ? "text-green-600" : agency.compliance >= 80 ? "text-yellow-600" : "text-red-600"}`}>
              {agency.compliance}%
            </span>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
