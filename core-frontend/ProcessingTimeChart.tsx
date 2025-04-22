import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { date: "2024-01", avgTime: 12 },
  { date: "2024-02", avgTime: 9 },
  { date: "2024-03", avgTime: 15 },
  { date: "2024-04", avgTime: 10 },
];

export default function ProcessingTimeChart() {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data}>
        <XAxis dataKey="date" />
        <YAxis label={{ value: "Days", angle: -90, position: "insideLeft" }} />
        <Tooltip />
        <Line type="monotone" dataKey="avgTime" stroke="#82ca9d" />
      </LineChart>
    </ResponsiveContainer>
  );
}