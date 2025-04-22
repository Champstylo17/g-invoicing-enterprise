import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { date: "2024-01", invoices: 34 },
  { date: "2024-02", invoices: 45 },
  { date: "2024-03", invoices: 60 },
  { date: "2024-04", invoices: 52 },
];

export default function InvoiceVolumeChart() {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data}>
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="invoices" fill="#8884d8" />
      </BarChart>
    </ResponsiveContainer>
  );
}