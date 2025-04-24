import { Card, CardContent } from "@/components/ui/card";

export default function BottleneckDetectionCard() {
  return (
    <Card className="bg-white shadow-md">
      <CardContent>
        <h2 className="text-lg font-semibold text-gray-800">Bottlenecks</h2>
        <ul className="text-sm mt-2 text-gray-600 space-y-1">
          <li>🔴 Agreement AG-002 stalled in Pending (5.4 days)</li>
          <li>🟡 Agreement AG-007 near SLA breach in Approved</li>
        </ul>
      </CardContent>
    </Card>
  );
}
