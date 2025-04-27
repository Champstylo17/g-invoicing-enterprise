// apps/web/src/components/ui/Alert.tsx
import React from "react";

type AlertProps = {
  variant?: "success" | "error" | "info";
  children: React.ReactNode;
};

export default function Alert({ variant = "info", children }: AlertProps) {
  const styles = {
    info: "bg-blue-100 text-blue-800",
    success: "bg-green-100 text-green-800",
    error: "bg-red-100 text-red-800",
  } as const;

  return (
    <div className={`p-4 rounded-md ${styles[variant]}`}>
      {children}
    </div>
  );
}
