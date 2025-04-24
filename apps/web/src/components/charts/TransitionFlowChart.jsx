import { Card, CardContent } from "@/components/ui/card";

export default function TransitionFlowChart() {
  return (
    <Card className="bg-white shadow-md">
      <CardContent>
        <h2 className="text-lg font-semibold text-gray-800">Transition Flow</h2>
        <div className="flex justify-between items-center mt-4 text-sm font-medium text-gray-700">
          <div className="text-gray-500">Draft</div>
          <div>→</div>
          <div className="text-yellow-600">Pending</div>
          <div>→</div>
          <div className="text-blue-600">Approved</div>
          <div>→</div>
          <div className="text-green-600">Closed</div>
        </div>
      </CardContent>
    </Card>
  );
}
