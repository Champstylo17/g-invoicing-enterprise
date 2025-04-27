// apps/web/src/components/ui/cards.tsx

import React, { PropsWithChildren } from "react";

// The outer container
export function Card({ children }: PropsWithChildren<{}>) {
  return <div className="bg-white shadow-card p-4 rounded-lg">{children}</div>;
}

// Header section (e.g. title)
export function CardHeader({ children }: PropsWithChildren<{}>) {
  return <div className="border-b pb-2 mb-4 text-lg font-semibold">{children}</div>;
}

// Title inside header
export function CardTitle({ children }: PropsWithChildren<{}>) {
  return <h3 className="text-xl font-bold">{children}</h3>;
}

// Main content area
export function CardContent({ children }: PropsWithChildren<{}>) {
  return <div className="space-y-2">{children}</div>;
}

// Optional footer (e.g. actions, links)
export function CardFooter({ children }: PropsWithChildren<{}>) {
  return <div className="border-t pt-2 mt-4 text-right text-sm text-gray-600">{children}</div>;
}
