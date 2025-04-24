import { useEffect, useState } from "react";

// EXISTING COMPONENTS FROM VERIFIED LOCATIONS
import Compliance from "@/dashboard/pages/compliance";
import Permissions from "@/dashboard/pages/permissions";
import Audit from "@/dashboard/pages/audit";
import Dictionary from "@/dashboard/pages/dictionary";
import Overview from "@/dashboard/pages/overview";
import ContractorList from "@/tables/ContractorList";
import AgreementExplorer from "@/tables/AgreementExplorer";
import TimelineChart from "@/tables/TimelineChart";

// NEWLY CREATED + EXTENDED COMPONENTS
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

export default function GInvoicingDashboard() {
  const [role, setRole] = useState("admin");
  const [agreements, setAgreements] = useState([]);
  const [auditLogs, setAuditLogs] = useState([]);
  const [contractors, setContractors] = useState([]);
  const [permissions, setPermissions] = useState([]);
  const [dictionary, setDictionary] = useState([]);
  const [timelines, setTimelines] = useState([]);


  useEffect(() => {
    const token = localStorage.getItem("jwt_token");
    if (token) {
      const payload = JSON.parse(atob(token.split(".")[1]));
      setRole(payload.role);
  useEffect(() => {
    fetch("/api/agreements").then(res => res.json()).then(setAgreements);
    fetch("/api/audit").then(res => res.json()).then(setAuditLogs);
    fetch("/api/contractors").then(res => res.json()).then(setContractors);
    fetch("/api/permissions").then(res => res.json()).then(setPermissions);
    fetch("/api/dictionary").then(res => res.json()).then(setDictionary);
    fetch("/api/timelines").then(res => res.json()).then(setTimelines);
  }, []);

    }
  }, []);

  return (
    <div className="p-6 space-y-6 text-gray-900 bg-gradient-to-b from-blue-50 to-gray-100 min-h-screen">
      <h1 className="text-3xl font-semibold border-b pb-2">
        G-Invoicing Enterprise Dashboard –{" "}
        <span className="text-blue-700 capitalize">{role}</span> View
      </h1>

      {/* 🔷 Overview Summary Section */}
      <Overview />

      {/* 🔷 Top KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <KpiCard />
        <ForecastCard />
        <ValidationCard />
        {role !== "reviewer" && <BottleneckDetectionCard />}
      </div>

      {/* 🔶 Transition Flow & Timelines */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <TransitionFlowChart />
        <TimeInStateBarChart />
      </div>

      {/* 🧾 Audit & Heatmap */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {role !== "reviewer" && <AuditLogTable data={auditLogs} />}
        <ReadinessHeatmap />
      </div>

      {/* 📝 Change Justification & Permissions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {role !== "analyst" && <ChangeJustification />}
        {role !== "analyst" && <Permissions />}
      </div>

      {/* 🛡️ Permissions Table & Data Dictionary */}
      {role !== "analyst" && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Permissions />
          <PermissionsTable data={permissions} />
        </div>
      )}

      {/* 📚 User Stories, Donut Compliance */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <UserStoriesList />
        <TreasuryDonutChart />
        <DataDictionary />
        <ContractorList data={contractors} />
        <AgreementExplorer data={agreements} />
        <TimelineChart data={timelines} />
      </div>

      {/* 🏢 Agencies & Invoices */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Agencies />
        <Invoices />
      </div>

      {/* ✅ Final Compliance Footer */}
      <Compliance />
    </div>
  );
}
