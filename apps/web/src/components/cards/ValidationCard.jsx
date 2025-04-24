import { Card, CardContent } from "@/components/ui/card";

export default function ValidationCard() {
  return (
    <Card className="bg-white shadow-md">
      <CardContent>
        <h2 className="text-lg font-semibold text-gray-800">Validation</h2>
        <p className="text-sm text-gray-500 mt-2">SLA Compliance: <span className="text-green-600 font-bold">92%</span></p>
        <p className="text-sm text-gray-500">Average Validation Time: <span className="text-blue-600 font-semibold">3.2 days</span></p>
      </CardContent>
    </Card>
  );
}
