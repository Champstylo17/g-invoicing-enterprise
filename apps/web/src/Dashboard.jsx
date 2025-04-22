import { Card, CardContent } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, LineChart, Line, PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { useState } from "react";

function getZachmanTag(section) {
  if (section.includes("Agreement") || section.includes("Live Summary")) return "What";
  if (section.includes("Transitions") || section.includes("Process")) return "How";
  if (section.includes("Role") || section.includes("Permissions")) return "Who";
  if (section.includes("Time") || section.includes("Timeline")) return "When";
  if (section.includes("Audit") || section.includes("Justification") || section.includes("Motivation")) return "Why";
  if (section.includes("Agency") || section.includes("Distribution")) return "Where";
  return "";
}

function getZachmanColor(tag) {
  switch (getZachmanTag(tag)) {
    case "What": return "#60a5fa";
    case "How": return "#34d399";
    case "Who": return "#2dd4bf";
    case "When": return "#f59e0b";
    case "Why": return "#f87171";
    case "Where": return "#a78bfa";
    default: return "#d1d5db";
  }
}

export default function GInvoicingMobileDashboard() {
  const [filter, setFilter] = useState("All");
  return <div>G-Invoicing Dashboard Loaded (see full code for features)</div>;
}
