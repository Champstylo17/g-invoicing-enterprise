import { Card, CardContent } from "@/components/ui/card";

export default function TransitionAuditTable() {
  const logs = [
    { id: "AG-001", from: "Draft", to: "Pending", user: "analyst1", date: "2025-04-21" },
    { id: "AG-002", from: "Pending", to: "Approved", user: "reviewer2", date: "2025-04-22" }
  ];
  return (
    <Card className="bg-white shadow-md">
      <CardContent>
        <h2 className="text-lg font-semibold text-gray-800">Transition Audit</h2>
        <table className="w-full text-sm mt-3">
          <thead>
            <tr className="text-left text-gray-500">
              <th>ID</th><th>From</th><th>To</th><th>User</th><th>Date</th>
            </tr>
          </thead>
          <tbody>
            {logs.map((log, index) => (
              <tr key={index} className="text-gray-700 border-t">
                <td>{log.id}</td>
                <td>{log.from}</td>
                <td>{log.to}</td>
                <td>{log.user}</td>
                <td>{log.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </CardContent>
    </Card>
  );
}
