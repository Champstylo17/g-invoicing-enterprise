import { Card, CardContent } from "@/components/ui/card";

export default function UserStoriesList() {
  const stories = [
    { title: "Auto-classify SLA exceptions", priority: "High" },
    { title: "Display role justification matrix", priority: "Medium" },
    { title: "Export audit trail as CSV", priority: "Low" }
  ];

  return (
    <Card className="bg-white shadow-md">
      <CardContent>
        <h2 className="text-lg font-semibold text-gray-800 mb-2">User Stories</h2>
        <ul className="text-sm text-gray-700">
          {stories.map((story, i) => (
            <li key={i}>• {story.title} <span className="text-xs text-gray-500">({story.priority})</span></li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
