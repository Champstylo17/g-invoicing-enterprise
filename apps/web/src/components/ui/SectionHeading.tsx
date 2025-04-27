// apps/web/src/components/ui/SectionHeading.tsx
import React from "react";

export default function SectionHeading({ title }: { title: string }) {
  return <h2 className="text-xl font-semibold text-govblue mb-4">{title}</h2>;
}
