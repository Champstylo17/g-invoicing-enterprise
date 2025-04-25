import React from "react";
import BannerHeader from "@/components/BannerHeader";
import SectionHeading from "@/components/SectionHeading";

export default function SystemConfigCenter() {
  return (
    <div className="space-y-6">
      <BannerHeader title="System Configuration Center" subtitle="Shared services, default settings, role flags" />
      <SectionHeading title="Shared App Configs" />
      <div className="bg-white p-4 rounded shadow">All environment-level flags, feature toggles, and shared service toggles live here.</div>
    </div>
  );
}
