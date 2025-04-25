export default function KpiCard({ title, value, color = 'govblue' }) {
  return (
    <div className={`bg-white rounded-lg shadow-card p-4 border-l-4 border-${color}`}>
      <h3 className="text-xs uppercase text-gray-500 tracking-wide">{title}</h3>
      <p className="text-3xl font-bold text-${color}">{value}</p>
    </div>
  );
}