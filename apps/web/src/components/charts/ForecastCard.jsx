import { Card, CardContent } from "@/components/ui/cards";

export default function ForecastCard() {
  return (
    <Card className="bg-white shadow-md">
      <CardContent>
        <h2 className="text-lg font-semibold text-gray-800">Forecast</h2>
        <p className="text-sm text-gray-600 mt-2">Next expected transition:</p>
        <p className="text-xl font-bold text-blue-600">Approve → Close in 2.1 days</p>
      </CardContent>
    </Card>
  );
}
