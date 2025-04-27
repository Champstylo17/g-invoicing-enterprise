import { Card, CardContent } from "@/components/ui/cards";

export default function ReadinessHeatmap() {
  const zones = [
    ["✓", "✓", "✗"],
    ["✓", "✗", "✓"],
    ["✗", "✓", "✓"]
  ];
  const colors = {
    "✓": "bg-green-400",
    "✗": "bg-red-400"
  };

  return (
    <Card className="bg-white shadow-md">
      <CardContent>
        <h2 className="text-lg font-semibold text-gray-800 mb-2">Readiness Heatmap</h2>
        <div className="grid grid-cols-3 gap-2">
          {zones.flat().map((val, idx) => (
            <div key={idx} className={`w-12 h-12 flex items-center justify-center text-white font-bold rounded ${colors[val]}`}>
              {val}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
