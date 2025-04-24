import React from "react";
import BannerHeader from "@/components/BannerHeader";
import SectionHeading from "@/components/SectionHeading";

export default function WorkflowStudio() {
  return (
    <div className="space-y-6">
      <BannerHeader title="Process Workflow Studio" subtitle="Map federal transitions, approvals, and timing constraints" />
      <SectionHeading title="Workflow Models" />
      <p className="text-sm text-gray-700">Flowchart viewer of state machines, approval timelines, and triggers.</p>
    </div>
  );
}
