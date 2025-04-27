// apps/web/src/Dashboard.jsx
import { useEffect, useState } from "react";

import NavTabs from "@/components/NavTabs";
import BannerHeader from "@/components/BannerHeader";
import SectionHeading from "@/components/SectionHeading";
import FilterTabs from "@/components/FilterTabs";

// Pages and core components
import Compliance from "@/dashboard/pages/compliance";
import Permissions from "@/dashboard/pages/permissions";
import Audit from "@/dashboard/pages/audit";
import Dictionary from "@/dashboard/pages/dictionary";
import Overview from "@/dashboard/pages/overview";
import ContractorList from "@/tables/ContractorList";
import AgreementExplorer from "@/tables/AgreementExplorer";
import TimelineChart from "@/tables/TimelineChart";

// Visuals and analytics
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

// Features
import AIDashboard from "@/features/ai-insights/AIDashboard";
import FinancialInsights from "@/features/financials/FinancialInsights";
import OntologyExplorer from "@/features/ontology/OntologyView";
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

  // Guarded JWT decode
  useEffect(() => {
    const token = localStorage.getItem("jwt_token");
    if (!token) return;

    const parts = token.split(".");
    if (parts.length === 3) {
      try {
        const payload = JSON.parse(atob(parts[1]));
        setRole(payload.role || "admin");
      } catch (e) {
        console.warn("Invalid JWT token, cannot decode payload", e);
      }
    } else {
      console.warn("Token is not in JWT format, skipping decode");
    }
  }, []);

  // Data fetches with safeFetch
  useEffect(() => {
    const safeFetch = (url, options) =>
      fetch(url, options)
        .then(res => {
          if (!res.ok) {
            console.warn(`Fetch to ${url} failed with ${res.status}`);
            return [];
          }
          return res.json();
        })
        .catch(err => {
          console.error(`Network error fetching ${url}`, err);
          return [];
        });

    safeFetch("/api/agreements").then(setAgreements);
    safeFetch("/api/audit").then(setAuditLogs);
    safeFetch("/api/contractors").then(setContractors);
    safeFetch("/api/permissions").then(setPermissions);
    safeFetch("/api/dictionary").then(setDictionary);
    safeFetch("/api/timelines").then(setTimelines);
    safeFetch("/api/ai-insights").then(setAiData);
    safeFetch("/api/financials").then(setFinanceData);
    safeFetch("/api/ontology").then(setOntologyData);
    safeFetch("/api/integration").then(setIntegrationData);
    safeFetch("/api/tools", {
      headers: { Authorization: `Bearer ${localStorage.getItem("jwt_token")}` },
    }).then(setToolsData);
  }, []);

  return (
    <div className="space-y-10 px-8 py-8 text-gray-900 bg-govgray min-h-screen font-sans">
      <BannerHeader
        title="G-Invoicing Enterprise Dashboard"
        subtitle="Unified platform for financial transparency and compliance"
      />

      <NavTabs
        tabs={[
          "dashboard",
          "ai",
          "financials",
          "ontology",
          "integration",
          "tools",
          "system-config",
          "devops",
          "workflow-studio",
        ]}
        active={activeTab}
        onChange={setActiveTab}
      />

      {activeTab === "dashboard" && (
        <>
          <section className="bg-white rounded-lg shadow p-6">
            <SectionHeading title="Summary & KPIs" />
            <Overview />
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-4">
              <div className="bg-white rounded-lg shadow p-4"><KpiCard /></div>
              <div className="bg-white rounded-lg shadow p-4"><ForecastCard /></div>
              <div className="bg-white rounded-lg shadow p-4"><ValidationCard /></div>
              {role !== "reviewer" && (
                <div className="bg-white rounded-lg shadow p-4">
                  <BottleneckDetectionCard />
                </div>
              )}
            </div>
          </section>

          <section className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white p-6 rounded-lg shadow">
            <div className="bg-white rounded-lg shadow p-4"><TransitionFlowChart /></div>
            <div className="bg-white rounded-lg shadow p-4"><TimeInStateBarChart /></div>
          </section>

          <section className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white p-6 rounded-lg shadow">
            {role !== "reviewer" && (
              <div className="bg-white rounded-lg shadow p-4">
                <AuditLogTable data={auditLogs} />
              </div>
            )}
            <div className="bg-white rounded-lg shadow p-4"><ReadinessHeatmap /></div>
          </section>

          <section className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white p-6 rounded-lg shadow">
            {role !== "analyst" && (
              <div className="bg-white rounded-lg shadow p-4"><ChangeJustification /></div>
            )}
            {role !== "analyst" && (
              <div className="bg-white rounded-lg shadow p-4"><Permissions /></div>
            )}
          </section>

          {role !== "analyst" && (
            <section className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white p-6 rounded-lg shadow">
              <div className="bg-white rounded-lg shadow p-4">
                <PermissionsTable data={permissions} />
              </div>
              <div className="bg-white rounded-lg shadow p-4"><DataDictionary /></div>
            </section>
          )}

          <section className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white p-6 rounded-lg shadow">
            <div className="bg-white rounded-lg shadow p-4"><UserStoriesList /></div>
            <div className="bg-white rounded-lg shadow p-4"><TreasuryDonutChart /></div>
            <div className="bg-white rounded-lg shadow p-4"><ContractorList data={contractors} /></div>
            <div className="bg-white rounded-lg shadow p-4"><AgreementExplorer data={agreements} /></div>
            <div className="bg-white rounded-lg shadow p-4"><TimelineChart data={timelines} /></div>
          </section>

          <section className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white p-6 rounded-lg shadow">
            <div className="bg-white rounded-lg shadow p-4"><Agencies /></div>
            <div className="bg-white rounded-lg shadow p-4"><Invoices /></div>
          </section>

          <div className="bg-white rounded-lg shadow p-6">
            <Compliance />
          </div>
        </>
      )}

      {activeTab === "ai" && (
        <section className="bg-white p-6 rounded-lg shadow">
          <SectionHeading title="AI Insights & Predictive Risk" />
          <FilterTabs
            filters={["All", "Low", "Moderate", "High"]}
            active={filter}
            onChange={setFilter}
          />
          <AIDashboard riskLevel={filter} />
        </section>
      )}

      {activeTab === "financials" && (
        <section className="bg-white p-6 rounded-lg shadow">
          <SectionHeading title="Financial Analysis & Metrics" />
          <FinancialInsights />
        </section>
      )}

      {activeTab === "ontology" && (
        <section className="bg-white p-6 rounded-lg shadow">
          <SectionHeading title="Data Dictionary & Metadata Ontology" />
          <OntologyExplorer />
        </section>
      )}

      {activeTab === "integration" && (
        <section className="bg-white p-6 rounded-lg shadow">
          <SectionHeading title="API Integrations & Treasury Syncs" />
          <IntegrationStatus />
        </section>
      )}

      {role === "admin" && activeTab === "tools" && (
        <section className="bg-white p-6 rounded-lg shadow">
          <SectionHeading title="Developer Tools & Utilities" />
          <ToolsDiagnostics />
        </section>
      )}

      {role === "admin" && activeTab === "system-config" && (
        <SystemConfigCenter />
      )}
      {role === "admin" && activeTab === "devops" && <DevOpsPanel />}
      {role === "admin" && activeTab === "workflow-studio" && (
        <WorkflowStudio />
      )}
    </div>
  );
}
