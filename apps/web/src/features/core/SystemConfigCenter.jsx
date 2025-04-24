import React from "react";
import BannerHeader from "@/components/BannerHeader";
import SectionHeading from "@/components/SectionHeading";

export default function SystemConfigCenter() {
  return (
    <div className="space-y-6">
      <BannerHeader title="System Configuration Center" subtitle="Manage global platform settings and shared modules" />
      <SectionHeading title="Default Settings Overview" />
      <p className="text-sm text-gray-700">Display fallback config, shared UI tokens, role-based defaults.</p>
    </div>
  );
}
