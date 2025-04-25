import React from "react";

export default function SectionHeading({ title }) {
  return (
    <h2 className="text-xl font-semibold text-govblue mb-4 border-b border-govblue pb-1">
      {title}
    </h2>
  );
}
