import React from "react";
import BannerHeader from "@/components/BannerHeader";
import SectionHeading from "@/components/SectionHeading";

export default function OntologyExplorer() {
  return (
    <div className="space-y-6">
      <BannerHeader title="Ontology Explorer" subtitle="Data lineage, business definitions, and tagging taxonomies" />
      <SectionHeading title="Core Business Terms" />
      <div className="bg-white p-4 rounded shadow">Explore term definitions, classifications, and usage across entities.</div>
    </div>
  );
}
