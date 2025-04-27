import { Card, CardContent } from "@/components/ui/cards";

export default function InteragencyAgreementExplorer() {
  const agreements = [
    { id: "AG001", from: "DoD", to: "Treasury", amount: "$5.4M", status: "Approved" },
    { id: "AG002", from: "GSA", to: "EPA", amount: "$1.2M", status: "Pending" },
    { id: "AG003", from: "DHS", to: "HHS", amount: "$3.0M", status: "Closed" },
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-4">🗂️ Interagency Agreement Explorer</h1>
      <table className="w-full text-sm text-left">
        <thead>
          <tr className="text-gray-500 border-b">
            <th>ID</th><th>From</th><th>To</th><th>Amount</th><th>Status</th>
          </tr>
        </thead>
        <tbody>
          {agreements.map((ag, idx) => (
            <tr key={idx} className="border-t text-gray-700">
              <td>{ag.id}</td>
              <td>{ag.from}</td>
              <td>{ag.to}</td>
              <td>{ag.amount}</td>
              <td>{ag.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
