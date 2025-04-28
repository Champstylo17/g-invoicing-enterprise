import { Routes, Route, Navigate } from "react-router-dom";
import AppLayout from "./layout/AppLayout";
import Dashboard from "./pages/Dashboard";
import Agreements from "./pages/Agreements";
import Orders from "./pages/Orders";
import Performances from "./pages/Performances";
import Invoices from "./pages/Invoices";
import Payments from "./pages/Payments";
import Permissions from "./pages/Permissions";
import Dictionary from "./pages/Dictionary";
import Audit from "./pages/Audit";
import ComplianceAgency from "./pages/ComplianceAgency";
import Tools from "./pages/Tools";
import WorkflowStudio from "./pages/WorkflowStudio";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<Navigate to="/dashboard" replace />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="agreements" element={<Agreements />} />
        <Route path="orders" element={<Orders />} />
        <Route path="performances" element={<Performances />} />
        <Route path="invoices" element={<Invoices />} />
        <Route path="payments" element={<Payments />} />
        <Route path="permissions" element={<Permissions />} />
        <Route path="dictionary" element={<Dictionary />} />
        <Route path="audit" element={<Audit />} />
        <Route path="compliance-agency" element={<ComplianceAgency />} />
        <Route path="tools" element={<Tools />} />
        <Route path="workflow-studio" element={<WorkflowStudio />} />
      </Route>
    </Routes>
  );
}
