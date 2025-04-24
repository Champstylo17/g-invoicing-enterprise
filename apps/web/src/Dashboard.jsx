import { useEffect, useState } from "react";

import TabNav from "@/components/TabNav";
import BannerHeader from "@/components/BannerHeader";
import SectionHeading from "@/components/SectionHeading";
import FilterTabs from "@/components/FilterTabs";

// Pages
import Compliance from "@/dashboard/pages/compliance";
import Permissions from "@/dashboard/pages/permissions";
import Audit from "@/dashboard/pages/audit";
import Dictionary from "@/dashboard/pages/dictionary";
import Overview from "@/dashboard/pages/overview";
import ContractorList from "@/tables/ContractorList";
import AgreementExplorer from "@/tables/AgreementExplorer";
import TimelineChart from "@/tables/TimelineChart";

// Data Tables and Visuals
import ChangeJustification from "@/tables/ChangeJustification";
import DataDictionary from "@/tables/DataDictionary";
import PermissionsTable from "@/tables/PermissionsTable";
import KpiCard from "@/cards/KpiCard";
import TimeInStateBarChart from "@/charts/TimeInStateBarChart";
import TreasuryDonutChart from "@/charts/TreasuryDonutChart";
import ForecastCard from "@/components/charts/ForecastCard";
import TransitionFlowChart from "@/components/charts/TransitionFlowChart";
import ReadinessHeatmap from "@/components/charts/ReadinessHeatmap";
import BottleneckDetectionCard from "@/components/cards/BottleneckDetectionCard";
import ValidationCard from "@/components/cards/ValidationCard";
import UserStoriesList from "@/components/cards/UserStoriesList";
import Agencies from "@/dashboard/pages/agencies";
import Invoices from "@/dashboard/pages/invoices";
import AuditLogTable from "@/tables/AuditLogTable";

// Feature Tabs
import AIDashboard from "@/features/ai-insights/AIDashboard";
import FinancialInsights from "@/features/financials/FinancialInsights";
import OntologyExplorer from "@/features/ontology/OntologyView"; // unified to one name
import IntegrationStatus from "@/features/integration/IntegrationStatus";
import ToolsDiagnostics from "@/features/tools/ToolsDiagnostics";
import SystemConfigCenter from "@/features/tools/SystemConfigCenter";
import DevOpsPanel from "@/features/tools/DevOpsPanel";
import WorkflowStudio from "@/features/tools/WorkflowStudio";

export default function GInvoicingDashboard() {
  const [role, setRole] = useState("admin");
  const [activeTab, setActiveTab] = useState("dashboard");
  const [filter, setFilter] = useState("All");

  const [agreements, setAgreements] = useState([]);
  const [auditLogs, setAuditLogs] = useState([]);
  const [contractors, setContractors] = useState([]);
  const [permissions, setPermissions] = useState([]);
  const [dictionary, setDictionary] = useState([]);
  const [timelines, setTimelines] = useState([]);

  const [aiData, setAiData] = useState([]);
  const [financeData, setFinanceData] = useState([]);
  const [ontologyData, setOntologyData] = useState([]);
  const [integrationData, setIntegrationData] = useState([]);
  const [toolsData, setToolsData] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("jwt_token");
    if (token) {
      const payload = JSON.parse(atob(token.split(".")[1]));
      setRole(payload.role);
    }
  }, []);

  useEffect(() => {
    fetch("/api/agreements").then(res => res.json()).then(setAgreements);
    fetch("/api/audit").then(res => res.json()).then(setAuditLogs);
    fetch("/api/contractors").then(res => res.json()).then(setContractors);
    fetch("/api/permissions").then(res => res.json()).then(setPermissions);
    fetch("/api/dictionary").then(res => res.json()).then(setDictionary);
    fetch("/api/timelines").then(res => res.json()).then(setTimelines);
    fetch("/api/ai-insights").then(res => res.json()).then(setAiData);
    fetch("/api/financials").then(res => res.json()).then(setFinanceData);
    fetch("/api/ontology").then(res => res.json()).then(setOntologyData);
    fetch("/api/integration").then(res => res.json()).then(setIntegrationData);
    fetch("/api/tools", {
      headers: { Authorization: `Bearer ${localStorage.getItem("jwt_token")}` },
    }).then(res => res.json()).then(setToolsData);
    fetch("/api/config").then(res => res.json()).then(console.log);
    fetch("/api/devops").then(res => res.json()).then(console.log);
    fetch("/api/workflows").then(res => res.json()).then(console.log);
  }, []);

  return (
    <div className="space-y-6 font-sans text-gray-900 bg-gradient-to-b from-blue-50 to-gray-100 min-h-screen">
      <BannerHeader
        title="G-Invoicing Enterprise Dashboard"
        subtitle="Unified interagency platform for financial transparency and federal compliance"
      />
      <TabNav
        tabs={[
          "dashboard",
          "ai",
          "financials",
          "ontology",
          "integration",
          "tools",
          "system-config",
          "devops",
          "workflow-studio"
        ]}
        active={activeTab}
        onChange={setActiveTab}
      />

      {activeTab === "dashboard" && (
        <>
          <SectionHeading title="Overview Summary" />
          <Overview />
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <KpiCard />
            <ForecastCard />
            <ValidationCard />
            {role !== "reviewer" && <BottleneckDetectionCard />}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <TransitionFlowChart />
            <TimeInStateBarChart />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {role !== "reviewer" && <AuditLogTable data={auditLogs} />}
            <ReadinessHeatmap />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {role !== "analyst" && <ChangeJustification />}
            {role !== "analyst" && <Permissions />}
          </div>
          {role !== "analyst" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Permissions />
              <PermissionsTable data={permissions} />
            </div>
          )}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <UserStoriesList />
            <TreasuryDonutChart />
            <DataDictionary />
            <ContractorList data={contractors} />
            <AgreementExplorer data={agreements} />
            <TimelineChart data={timelines} />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Agencies />
            <Invoices />
          </div>
          <Compliance />
        </>
      )}

      {activeTab === "ai" && (
        <>
          <SectionHeading title="AI Insights & Predictive Risk" />
          <FilterTabs filters={["All", "Low", "Moderate", "High"]} active={filter} onChange={setFilter} />
          <AIDashboard riskLevel={filter} />
        </>
      )}

      {activeTab === "financials" && (
        <>
          <SectionHeading title="Financial Analysis & Metrics" />
          <FinancialInsights />
        </>
      )}

      {activeTab === "ontology" && (
        <>
          <SectionHeading title="Data Dictionary & Metadata Ontology" />
          <OntologyExplorer />
        </>
      )}

      {activeTab === "integration" && (
        <>
          <SectionHeading title="API Integrations & Treasury Syncs" />
          <IntegrationStatus />
        </>
      )}

      {role === "admin" && activeTab === "tools" && (
        <>
          <SectionHeading title="Developer Tools & Utilities" />
          <ToolsDiagnostics />
        </>
      )}
      {role === "admin" && activeTab === "system-config" && <SystemConfigCenter />}
      {role === "admin" && activeTab === "devops" && <DevOpsPanel />}
      {role === "admin" && activeTab === "workflow-studio" && <WorkflowStudio />}
    </div>
  );
}
