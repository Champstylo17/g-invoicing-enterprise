import React from "react";
import BannerHeader from "@/components/BannerHeader";
import SectionHeading from "@/components/SectionHeading";

export default function WorkflowStudio() {
  return (
    <div className="space-y-6">
      <BannerHeader title="Workflow Automation Studio" subtitle="Visualize and debug approval chains and SLAs" />
      <SectionHeading title="Business Process Models" />
      <div className="bg-white p-4 rounded shadow">State transitions, escalation paths, and timeline snapshots.</div>
    </div>
  );
}
