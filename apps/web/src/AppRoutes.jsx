import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import AppLayout from "@/layout/AppLayout";
import ProtectedRoute from "@/components/auth/ProtectedRoute";
import Dashboard from "@/Dashboard";
import Login from "@/pages/Login";
import Compliance from "@/dashboard/pages/compliance";
import Permissions from "@/dashboard/pages/permissions";
import Audit from "@/dashboard/pages/audit";
import Dictionary from "@/dashboard/pages/dictionary";
import Agencies from "@/dashboard/pages/agencies";
import Invoices from "@/dashboard/pages/invoices";
import ComplianceByAgency from "@/pages/ComplianceByAgency";
import InteragencyAgreementExplorer from "@/pages/InteragencyAgreementExplorer";
import ContractSummaryTimeline from "@/pages/ContractSummaryTimeline";
import UiTest from "@/dashboard/pages/UiTest";

export default function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />

        <Route element={<ProtectedRoute><AppLayout /></ProtectedRoute>}>
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/audit" element={<Audit />} />
          <Route path="/permissions" element={<Permissions />} />
          <Route path="/dictionary" element={<Dictionary />} />
          <Route path="/agreements" element={<Agencies />} />
          <Route path="/invoices" element={<Invoices />} />
          <Route path="/compliance-agency" element={<ComplianceByAgency />} />
          <Route path="/agreement-explorer" element={<InteragencyAgreementExplorer />} />
          <Route path="/contract-timeline" element={<ContractSummaryTimeline />} />
          <Route path="/ui-test" element={<UiTest />} />
        </Route>
      </Routes>
    </Router>
  );
}
