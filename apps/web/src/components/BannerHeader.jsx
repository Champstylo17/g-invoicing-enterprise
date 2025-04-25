import React from "react";

export default function BannerHeader({ title, subtitle }) {
  return (
    <div className="bg-govblue text-white px-6 py-4 rounded-md shadow-header mb-6">
      <h1 className="text-2xl font-semibold tracking-wide">{title}</h1>
      {subtitle && <p className="text-sm text-slate-100 mt-1">{subtitle}</p>}
    </div>
  );
}
