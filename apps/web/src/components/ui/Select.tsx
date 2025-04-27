// apps/web/src/components/ui/Select.tsx
import React from "react";

type SelectProps = React.SelectHTMLAttributes<HTMLSelectElement>;

export default function Select({ className = "", children, ...props }: SelectProps) {
  return (
    <select
      className={`w-full px-3 py-2 border border-gray-300 rounded-md bg-white focus:outline-none focus:ring focus:border-govblue ${className}`}
      {...props}
    >
      {children}
    </select>
  );
}
