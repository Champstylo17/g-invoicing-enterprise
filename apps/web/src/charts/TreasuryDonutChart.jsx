import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Compliant', value: 74 },
  { name: 'Non-Compliant', value: 26 }
];
const COLORS = ['#34d399', '#f87171'];

export default function TreasuryDonutChart() {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h3 className="text-sm text-gray-600 mb-2">Treasury Compliance</h3>
      <ResponsiveContainer width="100%" height={200}>
        <PieChart>
          <Pie data={data} dataKey="value" cx="50%" cy="50%" innerRadius={50} outerRadius={70}>
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
      <div className="text-center mt-2 text-xl font-bold text-orange-500">74% Compliant</div>
    </div>
  );
}