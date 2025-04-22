
export default function SmartInsights({ data }) {
  return (
    <div className="bg-yellow-100 p-4 rounded">
      <h2>Smart Insights</h2>
      <p>{data.message}</p>
    </div>
  );
}
