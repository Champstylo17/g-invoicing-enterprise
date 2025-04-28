import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import AppLayout from "@/layout/AppLayout";
import ProtectedRoute from "@/components/auth/ProtectedRoute";

import Dashboard from "@/Dashboard";
import Login from "@/pages/Login";

// Existing pages
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

// NEW lifecycle pages
import Orders from "@/pages/Orders";
import Performances from "@/pages/Performances";
import Payments from "@/pages/Payments";
import Agreements from "@/pages/Agreements";

export default function AppRoutes() {
  return (
    <Router>
      <Routes>
        {/* public */}
        <Route path="/login" element={<Login />} />

        {/* protected area */}
        <Route
          element={
            <ProtectedRoute>
              <AppLayout />
            </ProtectedRoute>
          }
        >
          {/* redirect root to dashboard */}
          <Route path="/" element={<Navigate to="/dashboard" replace />} />

          {/* core dashboard */}
          <Route path="/dashboard" element={<Dashboard />} />

          {/* governance & admin */}
          <Route path="/audit" element={<Audit />} />
          <Route path="/permissions" element={<Permissions />} />
          <Route path="/dictionary" element={<Dictionary />} />
          <Route path="/compliance" element={<Compliance />} />

          {/* interagency data */}
          <Route path="/agreements" element={<Agreements />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/agencies" element={<Agencies />} />
          <Route path="/performances" element={<Performances />} />
          <Route path="/invoices" element={<Invoices />} />
          <Route path="/payments" element={<Payments />} />

          {/* compliance views */}
          <Route path="/compliance-agency" element={<ComplianceByAgency />} />

          {/* explorers & timelines */}
          <Route path="/agreement-explorer" element={<InteragencyAgreementExplorer />} />
          <Route path="/contract-timeline" element={<ContractSummaryTimeline />} />

          {/* utility / test */}
          <Route path="/ui-test" element={<UiTest />} />
        </Route>
      </Routes>
    </Router>
  );
}
