import { Card, CardContent } from "@/components/ui/cards";

export default function ContractSummaryTimeline() {
  const stages = ["Draft", "Review", "Approved", "Obligated", "Closed"];
  const timeline = [
    { stage: "Draft", duration: 3 },
    { stage: "Review", duration: 5 },
    { stage: "Approved", duration: 7 },
    { stage: "Obligated", duration: 4 },
    { stage: "Closed", duration: 2 }
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-4">📑 Contract Summary Timelines</h1>
      <Card className="bg-white shadow">
        <CardContent className="p-4 flex space-x-4">
          {timeline.map((step, idx) => (
            <div key={idx} className="text-center">
              <div className="text-xs text-gray-500">{step.stage}</div>
              <div className="w-16 h-4 mt-1 rounded-full bg-blue-400" style={{ width: `${step.duration * 10}px` }}></div>
              <div className="text-xs mt-1 text-gray-600">{step.duration} days</div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
