import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Draft', days: 2.5 },
  { name: 'Pending', days: 3.8 },
  { name: 'Approved', days: 1.2 }
];

export default function TimeInStateBarChart() {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h3 className="text-sm text-gray-600 mb-2">Time-In-State</h3>
      <ResponsiveContainer width="100%" height={200}>
        <BarChart data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="days" fill="#3b82f6" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}